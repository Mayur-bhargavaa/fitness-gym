"use client";

import { FormEvent, useState } from "react";
import { showToast } from "@/app/components/ui-utils";

export default function MembershipPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      plan: (form.elements.namedItem("plan") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        showToast(json.message, "success");
        setDone(true);
        form.reset();
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
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="reveal interactive-card rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Membership</p>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Get Membership</h1>
          <p className="mt-3 text-zinc-300">
            Select your plan and submit membership details online.
          </p>

          {done ? (
            <div className="mt-8 rounded-2xl border border-green-700 bg-green-900/30 p-6 text-center">
              <p className="text-2xl font-bold text-green-300">Welcome to Fitness! ✓</p>
              <p className="mt-2 text-zinc-300">Our team will contact you within 24 hours.</p>
              <button
                onClick={() => setDone(false)}
                className="interactive-button mt-5 rounded-full border border-zinc-600 px-5 py-2 text-sm text-zinc-300 hover:border-orange-400"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <input name="name" required type="text" placeholder="Full Name"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <input name="phone" required type="tel" placeholder="Phone Number"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <input name="email" required type="email" placeholder="Email"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <select name="plan" required defaultValue=""
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400">
                <option value="" disabled>Select Plan</option>
                <option value="monthly">Monthly — ₹1,499/mo</option>
                <option value="quarterly">Quarterly — ₹3,999/3mo</option>
                <option value="yearly">Yearly — ₹12,999/yr</option>
              </select>
              <button type="submit" disabled={loading}
                className="interactive-button w-full rounded-lg border border-orange-400 px-4 py-3 font-semibold text-orange-200 hover:bg-orange-500 hover:text-white disabled:opacity-60">
                {loading ? "Submitting…" : "Submit Membership"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
