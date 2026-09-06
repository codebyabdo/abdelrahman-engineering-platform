"use server";

import { randomUUID } from "crypto";
import { render } from "@react-email/render";

import { ContactConfirmationEmail } from "@/emails/contact-confirmation";
import { ContactOwnerEmail } from "@/emails/contact-owner";
import { sendMail } from "@/lib/mailer";
import { contactSchema } from "@/validation/contact";

export type ContactFormState = {
  success: boolean;
  message: string;

  fieldErrors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
};

const emptyFieldErrors = {
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
};

function getStringField(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function getSubmissionId(formData: FormData) {
  const existingId = getStringField(formData, "submissionId");

  /**
   * Prefer the client-generated submission ID.
   *
   * If it doesn't exist, generate one server-side.
   */
  return existingId || randomUUID();
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    /* =====================================================
       1. Read FormData
    ===================================================== */

    const rawData = {
      name: getStringField(formData, "name"),
      email: getStringField(formData, "email"),
      subject: getStringField(formData, "subject"),
      message: getStringField(formData, "message"),
    };

    const submissionId = getSubmissionId(formData);

    /* =====================================================
       2. Validate
    ===================================================== */

    const parsed = contactSchema.safeParse(rawData);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;

      return {
        success: false,
        message: "Please fix the highlighted fields.",

        fieldErrors: {
          name: errors.name?.[0],
          email: errors.email?.[0],
          subject: errors.subject?.[0],
          message: errors.message?.[0],
        },
      };
    }

    const {
      name,
      email,
      subject,
      message,
    } = parsed.data;

    /* =====================================================
       3. Owner email
    ===================================================== */

    const ownerEmail = process.env.CONTACT_EMAIL;

    if (!ownerEmail) {
      console.error(
        "[contact] CONTACT_EMAIL is missing.",
      );

      throw new Error(
        "CONTACT_EMAIL is missing.",
      );
    }

    /* =====================================================
       4. Render emails
    ===================================================== */

    const ownerHtml = await render(
      ContactOwnerEmail({
        name,
        email,
        subject,
        message,
      }),
    );

    const confirmationHtml = await render(
      ContactConfirmationEmail({
        name,
        message,
      }),
    );

    /* =====================================================
       5. Send owner notification
    ===================================================== */

    const ownerIdempotencyKey =
      `contact-owner/${submissionId}`;

    const confirmationIdempotencyKey =
      `contact-confirmation/${submissionId}`;

    console.info("[contact] Sending owner notification:", {
      submissionId,
      idempotencyKey: ownerIdempotencyKey,
    });

    const ownerResult = await sendMail({
      to: ownerEmail,

      replyTo: email,

      subject:
        `New Portfolio Inquiry • ${subject}`,

      html: ownerHtml,

      idempotencyKey:
        ownerIdempotencyKey,
    });

    console.info(
      "[contact] Owner notification sent:",
      {
        provider: ownerResult.provider,
        messageId: ownerResult.messageId,
        submissionId,
      },
    );

    /* =====================================================
       6. Send confirmation
    ===================================================== */

    try {
      console.info(
        "[contact] Sending visitor confirmation:",
        {
          submissionId,
          idempotencyKey:
            confirmationIdempotencyKey,
        },
      );

      const confirmationResult =
        await sendMail({
          to: email,

          replyTo: ownerEmail,

          subject:
            "We've received your message",

          html: confirmationHtml,

          idempotencyKey:
            confirmationIdempotencyKey,
        });

      console.info(
        "[contact] Confirmation sent:",
        {
          provider:
            confirmationResult.provider,

          messageId:
            confirmationResult.messageId,

          submissionId,
        },
      );
    } catch (confirmationError) {
      /**
       * Confirmation is secondary.
       *
       * The owner already received the inquiry,
       * therefore we still return success.
       */
      console.warn(
        "[contact] Confirmation email failed:",
        {
          submissionId,
          error: confirmationError,
        },
      );
    }

    /* =====================================================
       7. Success
    ===================================================== */

    return {
      success: true,

      message:
        "Message sent successfully.",

      fieldErrors:
        emptyFieldErrors,
    };
  } catch (error) {
    console.error(
      "[contact] sendContactEmail error:",
      error,
    );

    return {
      success: false,

      message:
        "Unable to send your message right now. Please try again.",

      fieldErrors:
        emptyFieldErrors,
    };
  }
}