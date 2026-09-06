import nodemailer from "nodemailer";
import { Resend } from "resend";

type MailProvider = "resend" | "nodemailer";

export type SendMailInput = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;

  /**
   * Unique ID for this logical email.
   *
   * Example:
   * contact-owner/<submissionId>
   * contact-confirmation/<submissionId>
   */
  idempotencyKey: string;
};

type MailSendResult = {
  provider: MailProvider;
  messageId?: string;
};

const PRIMARY_PROVIDER: MailProvider =
  process.env.MAIL_PROVIDER === "nodemailer" ? "nodemailer" : "resend";

let resendClient: Resend | null = null;
let transporter: nodemailer.Transporter | null = null;

/* =========================================================
   Resend
========================================================= */

function getResendClient() {
  if (resendClient) {
    return resendClient;
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing.");
  }

  resendClient = new Resend(apiKey);

  return resendClient;
}

function getResendFromAddress() {
  const from = process.env.RESEND_FROM;

  if (!from) {
    throw new Error("RESEND_FROM is missing.");
  }

  return from;
}

/* =========================================================
   Nodemailer / Gmail
========================================================= */

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error(
      "EMAIL_USER and EMAIL_PASS are required for Nodemailer.",
    );
  }

  /**
   * Explicit Gmail SMTP configuration.
   *
   * Port 587 + secure:false = STARTTLS.
   *
   * This avoids the previous 465/IPv6 connection problem
   * you were seeing.
   */
  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,

    auth: {
      user,
      pass,
    },

    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,

    pool: true,
    maxConnections: 2,
    maxMessages: 50,
  });

  return transporter;
}

function getGmailFromAddress() {
  const from =
    process.env.EMAIL_FROM ||
    process.env.EMAIL_USER;

  if (!from) {
    throw new Error(
      "EMAIL_FROM or EMAIL_USER is required for Nodemailer.",
    );
  }

  return from;
}

/* =========================================================
   Error helpers
========================================================= */

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown email provider error.";
  }
}

function getResendStatusCode(error: unknown): number | undefined {
  if (
    typeof error === "object" &&
    error !== null &&
    "statusCode" in error
  ) {
    const statusCode = (error as { statusCode?: unknown }).statusCode;

    return typeof statusCode === "number" ? statusCode : undefined;
  }

  return undefined;
}

/**
 * Important:
 *
 * We DON'T automatically fallback to Gmail for every Resend error.
 *
 * A network timeout / 5xx can mean:
 *
 * "Resend may have accepted the email,
 * but our server didn't receive the response."
 *
 * Falling back immediately could create a duplicate.
 *
 * Therefore:
 *
 * - 4xx / validation / authentication errors => fallback
 * - missing configuration => fallback
 * - 5xx / network / timeout => DON'T fallback automatically
 */
function shouldFallbackToGmail(error: unknown) {
  const statusCode = getResendStatusCode(error);

  if (!statusCode) {
    return false;
  }

  return statusCode >= 400 && statusCode < 500;
}

/* =========================================================
   Resend sender
========================================================= */

async function sendWithResend({
  to,
  subject,
  html,
  replyTo,
  idempotencyKey,
}: SendMailInput): Promise<MailSendResult> {
  const resend = getResendClient();

  const from = getResendFromAddress();

  const { data, error } = await resend.emails.send(
    {
      from,
      to,
      subject,
      html,
      replyTo,
    },
    {
      idempotencyKey,
    },
  );

  if (error) {
    throw error;
  }

  return {
    provider: "resend",
    messageId: data?.id,
  };
}

/* =========================================================
   Gmail sender
========================================================= */

async function sendWithGmail({
  to,
  subject,
  html,
  replyTo,
  idempotencyKey,
}: SendMailInput): Promise<MailSendResult> {
  const transporterInstance = getTransporter();

  const from = getGmailFromAddress();

  /**
   * Message-ID does NOT provide the same server-side
   * idempotency guarantee as Resend.
   *
   * But it gives mail clients a stable identifier and
   * reduces accidental duplicate threading.
   */
  const messageId = `<${idempotencyKey
    .replace(/[^a-zA-Z0-9._-]/g, "-")}@codebyabdo.me>`;

  const result = await transporterInstance.sendMail({
    from,
    to,
    subject,
    html,
    replyTo,

    messageId,

    headers: {
      "X-Portfolio-Mail-ID": idempotencyKey,
    },
  });

  return {
    provider: "nodemailer",
    messageId: result.messageId,
  };
}

/* =========================================================
   Public API
========================================================= */

export async function sendMail(
  input: SendMailInput,
): Promise<MailSendResult> {
  const {
    to,
    subject,
    idempotencyKey,
  } = input;

  console.info("[mailer] Sending email:", {
    to,
    subject,
    idempotencyKey,
    primaryProvider: PRIMARY_PROVIDER,
  });

  /* -------------------------------------------------------
     Resend Primary
  ------------------------------------------------------- */

  if (PRIMARY_PROVIDER === "resend") {
    try {
      const result = await sendWithResend(input);

      console.info("[mailer] Resend succeeded:", {
        to,
        messageId: result.messageId,
        idempotencyKey,
      });

      return result;
    } catch (error) {
      const message = getErrorMessage(error);
      const statusCode = getResendStatusCode(error);

      console.error("[mailer] Resend failed:", {
        to,
        statusCode,
        message,
        idempotencyKey,
      });

      /**
       * Only fallback when we know Resend rejected the request.
       *
       * This avoids the dangerous case:
       *
       * Resend accepted email
       *        ↓
       * network response lost
       *        ↓
       * Gmail sends another copy
       */
      if (!shouldFallbackToGmail(error)) {
        throw new Error(
          `Resend failed and fallback was skipped to prevent duplicate delivery: ${message}`,
        );
      }

      console.warn(
        "[mailer] Resend rejected the request. Falling back to Gmail.",
      );

      try {
        const result = await sendWithGmail(input);

        console.info("[mailer] Gmail fallback succeeded:", {
          to,
          messageId: result.messageId,
          idempotencyKey,
        });

        return result;
      } catch (gmailError) {
        const gmailMessage = getErrorMessage(gmailError);

        console.error("[mailer] Gmail fallback failed:", {
          to,
          message: gmailMessage,
          idempotencyKey,
        });

        throw new Error(
          `Both email providers failed. Resend: ${message}. Gmail: ${gmailMessage}`,
        );
      }
    }
  }

  /* -------------------------------------------------------
     Gmail Primary
  ------------------------------------------------------- */

  try {
    const result = await sendWithGmail(input);

    console.info("[mailer] Gmail succeeded:", {
      to,
      messageId: result.messageId,
      idempotencyKey,
    });

    return result;
  } catch (error) {
    const message = getErrorMessage(error);

    console.error("[mailer] Gmail failed:", {
      to,
      message,
      idempotencyKey,
    });

    /**
     * Gmail SMTP does not have the same idempotency
     * mechanism as Resend.
     *
     * We can safely attempt Resend only if Gmail returned
     * a clear SMTP rejection. Network timeouts are uncertain.
     */
    throw new Error(`Gmail failed: ${message}`);
  }
}