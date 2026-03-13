import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Fitness Gym — premium gym experience. Book slots online, join a membership, train with expert coaches. No commute required.",
  openGraph: {
    title: "Fitness Gym — Train Hard, Book Online",
    description: "Premium gym experience with 3D walkthroughs, online booking, and top coaches.",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"],
  },
};

const zones = [
  {
    title: "Iron Floor",
    tag: "Strength",
    desc: "Olympic racks, free weights, and power stations for progressive overload and real strength gains.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cardio Tunnel",
    tag: "Endurance",
    desc: "Rows of treadmills, bikes, and rowers designed for fat burn, stamina, and interval training.",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Functional Lab",
    tag: "Performance",
    desc: "Sled tracks, kettlebells, TRX rigs, and explosive circuits for athletic conditioning.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Recovery Bay",
    tag: "Recovery",
    desc: "Stretch zones, foam rolling stations, and guided cooldown flows to keep your body ready.",
    img: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?auto=format&fit=crop&w=900&q=80",
  },
];

const stats = [
  { value: "2,500+", label: "Active Members" },
  { value: "120+", label: "Equipment Units" },
  { value: "18", label: "Expert Coaches" },
  { value: "5:30 AM", label: "Opens Daily" },
];

const trainers = [
  {
    name: "Arjun Singh",
    role: "Head Strength Coach",
    specialty: "Body recomposition, powerlifting, progressive overload programming.",
  },
  {
    name: "Neha Verma",
    role: "HIIT & Cardio Lead",
    specialty: "Fat loss, interval training, group performance sessions.",
  },
  {
    name: "Rohit Mehra",
    role: "Mobility Specialist",
    specialty: "Flexibility, injury prevention, and athletic recovery.",
  },
];

const schedule = [
  { time: "06:00 AM", name: "Power Lift Foundations" },
  { time: "08:00 AM", name: "Cardio Burn Session" },
  { time: "11:00 AM", name: "Functional Core Blast" },
  { time: "06:30 PM", name: "Full Body Strength" },
  { time: "08:00 PM", name: "Recovery + Stretch Flow" },
];

const plans = [
  {
    name: "Monthly",
    price: "₹1,499",
    features: ["Unlimited gym access", "2 trainer sessions", "Locker access", "App booking"],
  },
  {
    name: "Quarterly",
    price: "₹3,999",
    features: ["Everything in Monthly", "4 trainer sessions", "Diet guidance", "Priority slots"],
    highlight: true,
  },
  {
    name: "Yearly",
    price: "₹10,999",
    features: ["Everything in Quarterly", "Unlimited trainer sessions", "Body analysis", "Guest passes"],
  },
];

const testimonials = [
  {
    name: "Priya M.",
    text: "Fitness is unlike any gym I've been to. The space feels premium and every trainer knows what they're doing.",
  },
  {
    name: "Devraj K.",
    text: "I lost 14 kg in 4 months. The HIIT sessions are intense but the coaches keep you going every single day.",
  },
  {
    name: "Anika S.",
    text: "The online booking is seamless. I reserved my slot at midnight and walked in the next morning — perfect.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-zinc-950 text-white">

      {/* ── HERO ── */}
      <section
        className="bg-pan relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgb(0 0 0 / 40%), rgb(9 9 11 / 92%)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.28),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_48%)]" />

        <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
          <div className="reveal relative z-10 max-w-4xl space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.42em] text-orange-300">
              Fitness Gym — Established 2018
            </p>
            <h1 className="text-5xl font-black leading-[1.06] sm:text-7xl lg:text-8xl">
              Step inside.<br />
              <span className="text-orange-400">Train harder.</span><br />
              Win every day.
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-2xl">
              The steel, the lights, the hustle — all of it available online.
              Explore every zone, book your slot, and get your membership without leaving home.
            </p>
            <div className="flex flex-wrap gap-4 pt-3">
              <Link href="/book" className="interactive-button rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-400">
                Book Gym Now
              </Link>
              <Link href="/membership" className="interactive-button rounded-full border-2 border-orange-400 px-8 py-4 text-base font-bold text-orange-200 hover:bg-orange-500 hover:text-white">
                Get Membership
              </Link>
              <Link href="/experience" className="interactive-button rounded-full border border-zinc-500 px-8 py-4 text-base font-semibold text-zinc-100 hover:bg-zinc-800">
                3D Tour ↗
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-y border-zinc-800 bg-zinc-900/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-0 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-10 px-6">
              <p className="text-4xl font-black text-orange-400 sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT / FEEL ── */}
      <section
        className="relative bg-cover bg-center py-28"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(9 9 11 / 96%) 40%, rgb(9 9 11 / 60%)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-orange-300">Who we are</p>
            <h2 className="text-4xl font-black sm:text-6xl">
              Not just a gym.<br />A results machine.
            </h2>
            <p className="text-lg leading-8 text-zinc-300">
              Fitness was built for people who are serious about change. Every zone,
              every machine, every program is engineered to push you past your plateau
              and into your best shape. Our coaches don't count — they train alongside you.
            </p>
            <p className="text-lg leading-8 text-zinc-300">
              Open 18 hours a day, 7 days a week. No hidden fees.
              Everything you need — book online, join online, track online.
            </p>
            <Link href="/experience" className="interactive-button inline-block rounded-full bg-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-700">
              Explore the full gym in 3D →
            </Link>
          </div>
        </div>
      </section>

      {/* ── GYM ZONES ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">Inside Fitness</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Every zone, built different</h2>
          </div>
          <p className="max-w-xs text-sm text-zinc-400">
            Four dedicated areas, each designed for a specific outcome.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {zones.map((zone) => (
            <article key={zone.title} className="interactive-card group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
              <div
                className="h-52 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${zone.img}')` }}
              />
              <div className="p-7">
                <span className="rounded-full border border-orange-400/50 px-3 py-1 text-xs uppercase tracking-widest text-orange-300">
                  {zone.tag}
                </span>
                <h3 className="mt-4 text-2xl font-bold">{zone.title}</h3>
                <p className="mt-3 text-zinc-300">{zone.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CLASS SCHEDULE PREVIEW ── */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgb(9 9 11 / 90%), rgb(9 9 11 / 96%)), url('https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">Schedule</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Today's classes</h2>
          </div>
          <div className="space-y-3">
            {schedule.map((item) => (
              <div key={item.time} className="interactive-card flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 px-6 py-5">
                <div className="flex items-center gap-6">
                  <span className="w-24 text-base font-bold text-orange-300">{item.time}</span>
                  <span className="text-lg font-semibold text-zinc-100">{item.name}</span>
                </div>
                <Link href="/book" className="interactive-button hidden rounded-full border border-zinc-600 px-4 py-2 text-sm text-zinc-300 hover:border-orange-400 hover:text-orange-200 sm:block">
                  Book slot →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/classes" className="interactive-button inline-block rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold text-zinc-100 hover:border-orange-400">
              See all classes & coaches →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COACHES ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">Coaches</p>
        <h2 className="mt-3 text-4xl font-black sm:text-5xl">Train with the best</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trainers.map((t) => (
            <article key={t.name} className="interactive-card rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
              <div className="h-14 w-14 rounded-full bg-orange-500/20 ring-2 ring-orange-400/40" />
              <h3 className="mt-5 text-2xl font-bold">{t.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-orange-300">{t.role}</p>
              <p className="mt-4 leading-7 text-zinc-300">{t.specialty}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── MEMBERSHIP PLANS ── */}
      <section className="border-y border-zinc-800 bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">Pricing</p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">Pick your plan, join today</h2>
          <p className="mt-4 max-w-xl text-zinc-300">
            All plans include unlimited gym access. No joining fee. Cancel anytime.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`interactive-card rounded-3xl p-8 ${
                  plan.highlight
                    ? "border-2 border-orange-500 bg-zinc-900"
                    : "border border-zinc-800 bg-zinc-900/60"
                }`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-3 text-4xl font-black text-orange-400">{plan.price}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-zinc-300">
                      <span className="mt-0.5 text-orange-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/membership"
                  className={`interactive-button mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${
                    plan.highlight
                      ? "bg-orange-500 text-white hover:bg-orange-400"
                      : "border border-zinc-600 text-zinc-100 hover:border-orange-400"
                  }`}
                >
                  Get {plan.name} Plan
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">Members say</p>
        <h2 className="mt-3 text-4xl font-black sm:text-5xl">Real results. Real people.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="interactive-card rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
              <p className="text-4xl text-orange-500">&ldquo;</p>
              <p className="mt-2 text-lg leading-8 text-zinc-200">{t.text}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-300">— {t.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgb(9 9 11 / 78%), rgb(9 9 11 / 95%)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">Start today</p>
          <h2 className="mt-4 text-5xl font-black sm:text-7xl">
            Your strongest<br /><span className="text-orange-400">version awaits.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-300">
            No queues. No paperwork. Book your first session and lock your membership
            entirely online in under 2 minutes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="interactive-button rounded-full bg-orange-500 px-10 py-4 text-base font-bold text-white hover:bg-orange-400">
              Book Now
            </Link>
            <Link href="/membership" className="interactive-button rounded-full border-2 border-orange-400 px-10 py-4 text-base font-bold text-orange-200 hover:bg-orange-500 hover:text-white">
              Join Fitness
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
