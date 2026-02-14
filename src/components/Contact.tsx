import { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setError("");
    } catch (err) {
      setError("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-800 px-4"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded border text-black"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded border text-black"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            onBlur={(e) => {
              if (!validateEmail(e.target.value)) {
                setError("Invalid email format.");
              } else {
                setError("");
              }
            }}
          />

          <textarea
            placeholder="Message"
            className="p-3 rounded border text-black"
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            disabled={loading}
            className="bg-accent text-white p-3 rounded hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;