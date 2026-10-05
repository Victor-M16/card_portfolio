import { actions, isInputError } from "astro:actions";
import { useState, type SubmitEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string[]>>;

interface Props {
  fallbackEmail: string;
}

const inputClass =
  "bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none focus-visible:ring-2 focus-visible:ring-gold aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-400";

export default function ContactForm({ fallbackEmail }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setError("");
    setFieldErrors({});

    const { error } = await actions.contact(new FormData(form));

    if (!error) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("error");
    if (isInputError(error)) {
      setFieldErrors(error.fields as FieldErrors);
      setError("Please fix the highlighted fields.");
    } else {
      setError(error.message);
    }
  }

  const field = (name: keyof FieldErrors) => ({
    name,
    id: `contact-${name}`,
    "aria-invalid": fieldErrors[name] ? true : undefined,
    "aria-describedby": fieldErrors[name] ? `contact-${name}-error` : undefined,
  });

  const fieldError = (name: keyof FieldErrors) =>
    fieldErrors[name] && (
      <span id={`contact-${name}-error`} className="text-sm text-red-400">
        {fieldErrors[name][0]}
      </span>
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-12 flex flex-col gap-8">
      <label htmlFor="contact-name" className="flex flex-col gap-4">
        <span className="font-medium text-white">Your name</span>
        <input
          {...field("name")}
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          placeholder="What's your name?"
          className={inputClass}
        />
        {fieldError("name")}
      </label>

      <label htmlFor="contact-email" className="flex flex-col gap-4">
        <span className="font-medium text-white">Your email</span>
        <input
          {...field("email")}
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          placeholder="What's your email?"
          className={inputClass}
        />
        {fieldError("email")}
      </label>

      <label htmlFor="contact-message" className="flex flex-col gap-4">
        <span className="font-medium text-white">Your message</span>
        <textarea
          {...field("message")}
          rows={7}
          required
          maxLength={5000}
          placeholder="What do you want to say?"
          className={inputClass}
        />
        {fieldError("message")}
      </label>

      {/* Honeypot field, hidden from people and screen readers. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary transition outline-none hover:bg-[#1f1847] focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      <p role="status" aria-live="polite" className="min-h-6">
        {status === "sent" && (
          <span className="text-green-400">Thanks! Your message has been sent. I'll get back to you soon.</span>
        )}
        {status === "error" && (
          <span className="text-red-400">
            {error}{" "}
            <a className="underline" href={`mailto:${fallbackEmail}`}>
              {fallbackEmail}
            </a>
          </span>
        )}
      </p>
    </form>
  );
}
