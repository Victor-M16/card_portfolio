import { ActionError, defineAction } from "astro:actions";
import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_API_KEY } from "astro:env/server";
import { z } from "astro/zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  message: z
    .string()
    .trim()
    .min(10, "Please write a little more (at least 10 characters).")
    .max(5000, "Please keep it under 5000 characters."),
  // Honeypot: hidden from people, but naive bots fill it in.
  website: z.string().optional(),
});

export const server = {
  contact: defineAction({
    accept: "form",
    input: contactSchema,
    handler: async ({ name, email, message, website }) => {
      if (website) {
        // Pretend it worked so bots don't retry.
        return { sent: true };
      }

      if (!RESEND_API_KEY) {
        console.error("Contact form: RESEND_API_KEY is not set.");
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "The contact form isn't configured yet. Please email me directly.",
        });
      }

      const sendFailed = new ActionError({
        code: "BAD_GATEWAY",
        message: "Something went wrong sending your message. Please try again or email me directly.",
      });

      let response: Response;
      try {
        response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: CONTACT_FROM_EMAIL,
            to: [CONTACT_TO_EMAIL],
            reply_to: email,
            subject: `Portfolio message from ${name}`,
            // Plain text only, so nothing a visitor types is ever rendered as HTML.
            text: `From: ${name} <${email}>\n\n${message}`,
          }),
          signal: AbortSignal.timeout(10_000),
        });
      } catch (error) {
        console.error("Contact form: could not reach Resend", error);
        throw sendFailed;
      }

      if (!response.ok) {
        console.error("Contact form: Resend returned", response.status, await response.text());
        throw sendFailed;
      }

      return { sent: true };
    },
  }),
};
