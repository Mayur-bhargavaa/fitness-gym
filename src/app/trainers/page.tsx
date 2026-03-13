"use client";

import { FormEvent, useState } from "react";
import { showToast } from "@/app/components/ui-utils";

const TRAINERS = [
  {
    name: "Arjun Singh",
    role: "Strength & Powerlifting Coach",
    exp: "8 yrs experience",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
    certs: ["NASM-CPT", "Powerlifting Specialist"],
    slots: ["6:00 AM", "7:00 AM", "5:00 PM", "6:00 PM"],
  },
  {
    name: "Neha Verma",
    role: "Yoga & Functional Fitness",
    exp: "6 yrs experience",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
    certs: ["200-hr RYT", "FMS Certified"],
    slots: ["7:00 AM", "8:00 AM", "4:00 PM", "5:00 PM"],
  },
  {
    name: "Rohit Mehra",
    role: "HIIT & Cardio Specialist",
    exp: "5 yrs experience",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    certs: ["ACE-CPT", "TRX Certified"],
    slots: ["8:00 AM", "9:00 AM", "6:00 PM", "7:00 PM"],
  },
];

export default function TrainersPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const f = e.currentTarget;
    const data = {
      name: (f.elements.namedItem("name") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      phone: (f.elements.namedItem("phone") as HTMLInputElement).value,
      trainer: (f.elements.namedItem("trainer") as HTMLSelectElement).value,
      date: (f.elements.namedItem("date") as HTMLInputElement).value,
      time: (f.elements.namedItem("time") as HTMLSelectElement).value,
      goal: (f.elements.namedItem("goal") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/trainer-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        showToast(json.message, "success");
        setDone(true);
        f.reset();
        setSelected("");
      } else {
        showToast(json.error ?? "Something went wrong.", "error");
      }
    } catch {
      showToast("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const selectedTrainer = TRAINERS.find((t) => t.name === selected);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 to-transparent" />
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Expert Coaches</p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">Personal Trainers</h1>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            One-on-one sessions with certified coaches — online, on your schedule.
          </p>
        </div>
      </section>

      {/* Trainer Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {TRAINERS.map((t) => (
            <div
              key={t.name}
              onClick={() => setSelected(t.name)}
              className={`interactive-card cursor-pointer rounded-2xl border bg-zinc-900 p-6 transition-all ${
                selected === t.name
                  ? "border-orange-400 ring-2 ring-orange-400/30"
                  : "border-zinc-800"
              }`}
            >
              <div
                className="h-48 w-full rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${t.img})` }}
              />
              <h3 className="mt-4 text-xl font-bold">{t.name}</h3>
              <p className="text-sm text-orange-300">{t.role}</p>
              <p className="mt-1 text-xs text-zinc-400">{t.exp}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.certs.map((c) => (
                  <span key={c} className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300">
                    {c}
                  </span>
                ))}
              </div>
              {selected === t.name && (
                <p className="mt-3 text-xs font-semibold text-orange-400">✓ Selected</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="mx-auto max-w-2xl px-6 pb-24">
        <div className="reveal interactive-card rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Book Session</p>
          <h2 className="mt-3 text-3xl font-extrabold">Schedule a Session</h2>
          {selected && (
            <p className="mt-1 text-sm text-zinc-400">
              With <span className="text-orange-300 font-medium">{selected}</span> — click a trainer card above to change
            </p>
          )}

          {done ? (
            <div className="mt-8 rounded-2xl border border-green-700 bg-green-900/30 p-6 text-center">
              <p className="text-2xl font-bold text-green-300">Session Booked! ✓</p>
              <p className="mt-2 text-zinc-300">Your trainer will confirm the appointment.</p>
              <button onClick={() => setDone(false)}
                className="interactive-button mt-5 rounded-full border border-zinc-600 px-5 py-2 text-sm text-zinc-300 hover:border-orange-400">
                Book another session
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input name="name" required type="text" placeholder="Your Full Name"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <input name="email" required type="email" placeholder="Email"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <input name="phone" required type="tel" placeholder="Phone"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <select name="trainer" required value={selected} onChange={(e) => setSelected(e.target.value)}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400">
                <option value="">Select Trainer</option>
                {TRAINERS.map((t) => <option key={t.name} value={t.name}>{t.name} — {t.role}</option>)}
              </select>
              <input name="date" required type="date"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400" />
              <select name="time" required defaultValue=""
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400">
                <option value="" disabled>Preferred Time</option>
                {(selectedTrainer?.slots ?? ["6:00 AM","7:00 AM","8:00 AM","5:00 PM","6:00 PM","7:00 PM"]).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <textarea name="goal" rows={3} placeholder="Your fitness goal (optional)"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-400 resize-none" />
              <button type="submit" disabled={loading}
                className="interactive-button w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-400 disabled:opacity-60">
                {loading ? "Booking…" : "Book Session"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
