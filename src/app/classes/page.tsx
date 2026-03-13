import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Browse Fitness Gym class schedule — Power Lifting, Cardio Burn, Yoga Flow, HIIT, and more. Book your slot online.",
};

const schedule = [
  { time: "06:00 AM", className: "Power Lift Foundations" },
  { time: "08:00 AM", className: "Cardio Burn Session" },
  { time: "11:00 AM", className: "Functional Core Blast" },
  { time: "06:30 PM", className: "Full Body Strength" },
  { time: "08:00 PM", className: "Recovery + Stretch Flow" },
];

const trainers = [
  {
    name: "Arjun Singh",
    specialty: "Strength & Body Recomposition",
    description: "Build muscle safely with structured progression and power coaching.",
  },
  {
    name: "Neha Verma",
    specialty: "HIIT & Endurance Coaching",
    description: "Improve stamina, speed, and fat-loss performance through interval systems.",
  },
  {
    name: "Rohit Mehra",
    specialty: "Mobility & Recovery",
    description: "Move pain-free and recover faster with guided mobility and flexibility work.",
  },
];

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="reveal max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Classes</p>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-6xl">Train with structure and expert guidance</h1>
          <p className="mt-4 text-zinc-300 sm:text-lg">
            Choose sessions by time and goal, then book your gym slot from the booking page.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="reveal text-3xl font-bold sm:text-4xl">Daily class schedule</h2>
        <div className="mt-8 space-y-4">
          {schedule.map((item, index) => (
            <div
              key={item.time}
              className={`reveal interactive-card flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 ${
                index > 0 ? "reveal-delay-1" : ""
              }`}
            >
              <span className="text-lg font-semibold text-orange-300">{item.time}</span>
              <span className="text-zinc-200">{item.className}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="reveal text-3xl font-bold sm:text-4xl">Meet your coaches</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <article
              key={trainer.name}
              className={`reveal interactive-card rounded-2xl border border-zinc-800 bg-zinc-900/65 p-6 ${
                index > 0 ? "reveal-delay-1" : ""
              }`}
            >
              <p className="text-2xl font-semibold">{trainer.name}</p>
              <p className="mt-2 text-orange-300">{trainer.specialty}</p>
              <p className="mt-4 text-zinc-300">{trainer.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
