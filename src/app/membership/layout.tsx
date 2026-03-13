import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join Fitness Gym online — Monthly, Quarterly or Yearly membership plans. Unlimited access, expert coaches.",
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
