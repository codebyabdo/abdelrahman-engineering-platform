import { ContactPayload } from "@/types/contact";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export function ContactConfirmationEmail({
  name,
  message,
}: Pick<ContactPayload, "name" | "message">) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{`We received your message, ${name}`}</Preview>

      <Tailwind>
        <Body
          className="m-0 px-6 py-10"
          style={{
            backgroundColor: "#050505", // --bg-main
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          <Container
            className="mx-auto overflow-hidden rounded-3xl"
            style={{
              maxWidth: "680px",
              backgroundColor: "#080808", // --bg-card
              border: "1px solid rgba(255, 255, 255, 0.08)", // --bg-card-border
            }}
          >
            {/* Header */}
            <Section
              className="px-12 py-10"
              style={{
                background: "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15) 0%, transparent 70%)", // --bg-radial-glow
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <Text
                className="m-0 text-[11px] uppercase tracking-[6px]"
                style={{
                  color: "#60a5fa", // --accent-blue-light
                }}
              >
                ABD EL-RAHMAN ADEL
              </Text>

              <Heading
                className="mt-6 mb-0 text-[38px] font-semibold leading-tight"
                style={{
                  color: "#f5f5f5", // --text-primary
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Thank You, {name}
              </Heading>

              <Text
                className="mt-5 mb-0 text-base"
                style={{
                  color: "rgba(255, 255, 255, 0.6)", // --text-muted
                }}
              >
                Your message has been received successfully.
              </Text>
            </Section>

            {/* Body */}
            <Section className="px-12 py-10">
              <Heading
                as="h2"
                className="m-0 text-[22px] font-semibold"
                style={{
                  color: "#f5f5f5",
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Next Step
              </Heading>

              <Hr
                className="my-8"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.08)", // --bg-card-border
                }}
              />

              <Text
                className="m-0 text-base leading-8"
                style={{
                  color: "rgba(255, 255, 255, 0.6)", // --text-muted
                }}
              >
                I&apos;ll review your message and get back to you as soon as
                possible, usually within 24 hours.
              </Text>

              {/* Message Card */}
              <Section
                className="mt-10 rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <Text
                  className="mt-0 mb-4 text-[11px] uppercase tracking-[3px]"
                  style={{
                    color: "#2563eb", // --accent-blue
                  }}
                >
                  Your Message
                </Text>

                <Text
                  className="m-0 whitespace-pre-wrap text-[15px] leading-8"
                  style={{
                    color: "#f5f5f5", // --text-primary
                  }}
                >
                  {message}
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section
              className="px-12 py-8"
              style={{
                backgroundColor: "#050505",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <Text
                className="m-0 text-center text-xs"
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                This is an automated confirmation from Abd El-Rahman Adel&apos;s
                portfolio. You can reply to your original inquiry if needed.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactConfirmationEmail;