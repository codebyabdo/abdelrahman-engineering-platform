"use server";

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

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const rawData = {
      name: getStringField(formData, "name"),
      email: getStringField(formData, "email"),
      subject: getStringField(formData, "subject"),
      message: getStringField(formData, "message"),
    };

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

    const ownerEmail = process.env.CONTACT_EMAIL;

    if (!ownerEmail) {
      console.error("[contact] CONTACT_EMAIL is missing.");
      throw new Error("CONTACT_EMAIL is missing.");
    }

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

    const [
      ownerResult,
      confirmationResult,
    ] = await Promise.allSettled([
      sendMail({
        to: ownerEmail,
        replyTo: email,
        subject: `New Portfolio Inquiry • ${subject}`,
        html: ownerHtml,
      }),

      sendMail({
        to: email,
        replyTo: ownerEmail,
        subject: "We've received your message",
        html: confirmationHtml,
      }),
    ]);

    // Owner notification is critical.
    if (ownerResult.status === "rejected") {
      console.error(
        "[contact] Owner notification failed:",
        ownerResult.reason,
      );

      return {
        success: false,
        message:
          "We couldn't deliver your inquiry right now. Please try again later.",
        fieldErrors: emptyFieldErrors,
      };
    }

    // Confirmation is secondary.
    if (confirmationResult.status === "rejected") {
      console.warn(
        "[contact] Confirmation email failed:",
        confirmationResult.reason,
      );
    }

    return {
      success: true,
      message: "Message sent successfully.",
      fieldErrors: emptyFieldErrors,
    };
  } catch (error) {
    console.error("[contact] sendContactEmail error:", error);

    return {
      success: false,
      message:
        "Unable to send your message right now. Please try again.",
      fieldErrors: emptyFieldErrors,
    };
  }
}