import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Take a visual tour of Fitness Gym — our equipment, zones, and energy.",
};

const PHOTOS = [
  {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    label: "Weight Floor",
    span: "col-span-2 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    label: "Cardio Zone",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    label: "Yoga Studio",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
    label: "Free Weights",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
    label: "Squat Racks",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    label: "Nutrition Bar",
    span: "col-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    label: "Boxing Ring",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80",
    label: "Locker Room",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=600&q=80",
    label: "Stretching Area",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    label: "Entrance Lobby",
    span: "col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 to-transparent" />
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Visual Tour</p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">Gallery</h1>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            See every corner of Fitness Gym — state-of-the-art equipment, premium zones, and
            the energy that defines us.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid auto-rows-[260px] grid-cols-2 gap-3 sm:grid-cols-4">
          {PHOTOS.map((p) => (
            <div
              key={p.url}
              className={`group relative overflow-hidden rounded-2xl ${p.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.url}
                alt={p.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 translate-y-4 text-sm font-semibold uppercase tracking-wider text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {p.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center">
          <h2 className="text-3xl font-extrabold">See it in 3D</h2>
          <p className="mt-3 text-zinc-300">
            Not just photos — take a scroll-driven 3D walkthrough of the entire gym.
          </p>
          <a href="/experience"
            className="interactive-button mt-6 inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-400">
            Explore 3D Experience →
          </a>
        </div>
      </section>
    </main>
  );
}
