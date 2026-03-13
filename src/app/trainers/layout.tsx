import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Trainers",
  description:
    "Book a one-on-one session with a certified Fitness Gym coach — Strength, Yoga, or HIIT. Online scheduling.",
};

export default function TrainersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
