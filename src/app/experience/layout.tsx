import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Experience",
  description:
    "Scroll through a real-time 3D walkthrough of Fitness Gym. See every zone — weights, cardio, racks — rendered with WebGL.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
