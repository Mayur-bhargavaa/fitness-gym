"use client";

import { FormEvent, useState } from "react";
import { showToast } from "@/app/components/ui-utils";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const f = e.currentTarget;
    const data = {
      name: (f.elements.namedItem("name") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        showToast(json.message, "success");
        setDone(true);
        f.reset();
      } else {
        showToast(json.error ?? "Something went wrong.", "error");
      }
    } catch {
      showToast("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 to-transparent" />
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Get in Touch</p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            Questions, feedback, or just want to know more? We're here for you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-2">
        {/* Info */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-bold text-orange-300">Visit Us</h2>
            <p className="text-zinc-300 leading-relaxed">
              12 Iron Lane, Powai<br />
              Mumbai – 400076<br />
              Maharashtra, India
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-bold text-orange-300">Hours</h2>
            <ul className="space-y-1 text-zinc-300 text-sm">
              <li className="flex justify-between"><span>Monday – Friday</span><span>5:30 AM – 11:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>6:00 AM – 10:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>7:00 AM – 6:00 PM</span></li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-bold text-orange-300">Direct Contact</h2>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>📞 <a href="tel:+919999999999" className="hover:text-orange-300">+91 99999 99999</a></li>
              <li>✉️ <a href="mailto:hello@fitnessgym.in" className="hover:text-orange-300">hello@fitnessgym.in</a></li>
              <li>💬 WhatsApp same number</li>
            </ul>
          </div>

          {/* Map placeholder */}
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className="flex h-48 items-center justify-center bg-zinc-800 text-zinc-400 text-sm">
              📍 Map — Powai, Mumbai
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <div className="reveal interactive-card rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
            <h2 className="text-2xl font-extrabold">Send a Message</h2>

            {done ? (
              <div className="mt-8 rounded-2xl border border-green-700 bg-green-900/30 p-6 text-center">
                <p className="text-xl font-bold text-green-300">Message Sent! ✓</p>
                <p className="mt-2 text-zinc-300">We'll get back to you within 24 hours.</p>
                <button onClick={() => setDone(false)}
                  className="interactive-button mt-4 rounded-full border border-zinc-600 px-5 py-2 text-sm text-zinc-300 hover:border-orange-400">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input name="name" required type="text" placeholder="Your Name"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
                <input name="email" required type="email" placeholder="Your Email"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
                <textarea name="message" required rows={6} placeholder="Your message…"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400 resize-none" />
                <button type="submit" disabled={loading}
                  className="interactive-button w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-400 disabled:opacity-60">
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
