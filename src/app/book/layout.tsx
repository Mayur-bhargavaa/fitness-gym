import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Slot",
  description:
    "Book your gym session at Fitness Gym — select a date and time online, no physical visit required.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
