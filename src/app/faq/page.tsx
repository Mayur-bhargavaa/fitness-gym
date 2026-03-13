"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need to visit the gym in person to sign up?",
    a: "No. You can sign up, pay, and book everything completely online. Your membership starts the moment you submit the form and our team confirms your plan.",
  },
  {
    q: "What are the gym timings?",
    a: "We're open Mon–Fri 5:30 AM – 11 PM, Saturday 6 AM – 10 PM, and Sunday 7 AM – 6 PM. Holiday hours may vary — check the Contact page.",
  },
  {
    q: "How do I book a gym slot?",
    a: "Click 'Book' in the navigation, choose your preferred date and time, and submit. You'll receive a confirmation on screen + email.",
  },
  {
    q: "Can I cancel or reschedule my booking?",
    a: "Bookings can be cancelled or rescheduled up to 4 hours before the session. Contact us via WhatsApp or email and we'll sort it out immediately.",
  },
  {
    q: "What's included in the Monthly membership plan?",
    a: "Monthly plan includes unlimited gym floor access, 2 group classes per week, locker room access, and free Wi-Fi in the facility. Towels and nutrition bar discounts are also included.",
  },
  {
    q: "What's included in the Yearly membership plan?",
    a: "Yearly plan includes everything in Monthly, plus 4 personal training sessions per month, priority slot booking, 1 free body composition analysis each quarter, and exclusive member events.",
  },
  {
    q: "Can I pause my membership?",
    a: "Memberships can be paused once per year for up to 30 days (medical or travel reasons). Submit a pause request via the Contact page with a reason.",
  },
  {
    q: "Are personal training sessions included in membership?",
    a: "Personal training sessions are available as add-ons or are included in the Yearly plan. Book them separately on the Trainers page.",
  },
  {
    q: "What equipment do you have?",
    a: "We have 120+ machines including treadmills, ellipticals, rowing machines, a full free-weights section, power racks, cable systems, a boxing zone, and a dedicated yoga/stretching studio.",
  },
  {
    q: "Is the gym accessible for beginners?",
    a: "Absolutely. All new members get a free gym orientation session with one of our coaches to learn equipment usage, proper form, and build a starter program.",
  },
  {
    q: "Do you offer trial memberships?",
    a: "Yes — prospective members can book a single-day trial slot from the Book page. Use the 'trial' time slot and pay a one-time ₹199 fee at the front desk.",
  },
  {
    q: "How do I get a refund?",
    a: "Refunds for annual or quarterly plans are processed within 7 working days on a pro-rate basis. Monthly plans are non-refundable after the first week. Reach us on the Contact page.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 to-transparent" />
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Help Centre</p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">FAQ</h1>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            Everything you need to know about Fitness Gym — memberships, bookings, trainers, and more.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all ${
                open === i ? "border-orange-400 bg-zinc-900" : "border-zinc-800 bg-zinc-900/60"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-zinc-100">{item.q}</span>
                <span
                  className={`ml-4 shrink-0 text-xl text-orange-400 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-sm leading-relaxed text-zinc-300">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="mt-2 text-zinc-300">We're one message away.</p>
          <a href="/contact"
            className="interactive-button mt-5 inline-block rounded-full bg-orange-500 px-7 py-3 font-semibold text-white hover:bg-orange-400">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
