import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-center text-white">
      {/* Big 404 */}
      <p className="text-[10rem] font-extrabold leading-none tracking-tight text-zinc-800 select-none sm:text-[14rem]">
        404
      </p>

      <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-zinc-400">
        Looks like you went off-track. Even the best athletes lose their way sometimes — let's
        get you back on the floor.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="interactive-button rounded-full bg-orange-500 px-7 py-3 font-semibold text-white hover:bg-orange-400"
        >
          Back to Home
        </Link>
        <Link
          href="/book"
          className="interactive-button rounded-full border border-zinc-600 px-7 py-3 font-semibold text-zinc-300 hover:border-orange-400 hover:text-white"
        >
          Book a Slot
        </Link>
      </div>

      <p className="mt-12 text-xs uppercase tracking-[0.35em] text-orange-400/60">
        Fitness Gym
      </p>
    </main>
  );
}
