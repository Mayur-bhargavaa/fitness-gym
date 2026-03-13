"use client";

import { FormEvent, useState } from "react";
import { showToast } from "@/app/components/ui-utils";

export default function BookPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement).value,
      time: (form.elements.namedItem("time") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/booking", {
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
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Book</p>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Book Your Gym Slot</h1>
          <p className="mt-3 text-zinc-300">
            Reserve your visit online and arrive at your selected time.
          </p>

          {done ? (
            <div className="mt-8 rounded-2xl border border-green-700 bg-green-900/30 p-6 text-center">
              <p className="text-2xl font-bold text-green-300">Booking Confirmed! ✓</p>
              <p className="mt-2 text-zinc-300">You will receive a confirmation shortly.</p>
              <button
                onClick={() => setDone(false)}
                className="interactive-button mt-5 rounded-full border border-zinc-600 px-5 py-2 text-sm text-zinc-300 hover:border-orange-400"
              >
                Book another slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <input name="name" required type="text" placeholder="Full Name"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <input name="email" required type="email" placeholder="Email"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <input name="date" required type="date"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <input name="time" required type="time"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <button type="submit" disabled={loading}
                className="interactive-button w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-400 disabled:opacity-60">
                {loading ? "Booking…" : "Confirm Booking"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
