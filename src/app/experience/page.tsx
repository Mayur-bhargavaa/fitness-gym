"use client";

import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Text } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type CameraRigProps = {
  progress: number;
};

function CameraRig({ progress }: CameraRigProps) {
  useFrame(({ camera }) => {
    const start = new THREE.Vector3(0, 3.2, 18);
    const midA = new THREE.Vector3(-8, 3, 8);
    const midB = new THREE.Vector3(8, 3, -2);
    const end = new THREE.Vector3(0, 2.8, -16);

    const point = new THREE.Vector3();
    if (progress < 0.33) {
      point.lerpVectors(start, midA, progress / 0.33);
    } else if (progress < 0.66) {
      point.lerpVectors(midA, midB, (progress - 0.33) / 0.33);
    } else {
      point.lerpVectors(midB, end, (progress - 0.66) / 0.34);
    }

    camera.position.lerp(point, 0.08);

    const lookStart = new THREE.Vector3(0, 2.1, 2);
    const lookEnd = new THREE.Vector3(0, 1.8, -20);
    const lookTarget = new THREE.Vector3().lerpVectors(lookStart, lookEnd, progress);
    camera.lookAt(lookTarget);
  });

  return null;
}

function DumbbellRack({ position }: { position: [number, number, number] }) {
  const dumbbells = useMemo(() => Array.from({ length: 8 }), []);

  return (
    <group position={position}>
      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[4.4, 0.22, 1.1]} />
        <meshStandardMaterial color="#2b2b2b" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[4.2, 0.16, 0.9]} />
        <meshStandardMaterial color="#323232" metalness={0.8} roughness={0.35} />
      </mesh>

      {dumbbells.map((_, index) => {
        const x = -1.65 + index * 0.47;
        return (
          <group key={index} position={[x, 1.37, 0]}>
            <mesh position={[-0.12, 0, 0]}>
              <cylinderGeometry args={[0.09, 0.09, 0.16, 24]} />
              <meshStandardMaterial color="#0d0d0d" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0.12, 0, 0]}>
              <cylinderGeometry args={[0.09, 0.09, 0.16, 24]} />
              <meshStandardMaterial color="#0d0d0d" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.03, 0.03, 0.22, 18]} />
              <meshStandardMaterial color="#595959" metalness={1} roughness={0.2} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function Treadmill({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[2.2, 0.22, 1]} />
        <meshStandardMaterial color="#1f1f1f" metalness={0.55} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[1.6, 0.06, 0.62]} />
        <meshStandardMaterial color="#111111" metalness={0.2} roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.1, -0.42]}>
        <boxGeometry args={[0.85, 0.5, 0.08]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.65} roughness={0.3} />
      </mesh>
      <mesh position={[-0.72, 0.8, -0.38]} rotation={[0, 0, 0.16]}>
        <cylinderGeometry args={[0.04, 0.04, 0.8, 16]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[0.72, 0.8, -0.38]} rotation={[0, 0, -0.16]}>
        <cylinderGeometry args={[0.04, 0.04, 0.8, 16]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.9} roughness={0.25} />
      </mesh>
    </group>
  );
}

function Bench({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[2.2, 0.18, 0.65]} />
        <meshStandardMaterial color="#212121" metalness={0.35} roughness={0.65} />
      </mesh>
      <mesh position={[0, 0.68, -0.36]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[1.4, 0.15, 0.55]} />
        <meshStandardMaterial color="#252525" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[-0.8, 0.15, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.35, 12]} />
        <meshStandardMaterial color="#5c5c5c" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.8, 0.15, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.35, 12]} />
        <meshStandardMaterial color="#5c5c5c" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function SquatRack({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {[-0.7, 0.7].map((x) => (
        <mesh key={x} position={[x, 1.65, 0]}>
          <boxGeometry args={[0.12, 3.3, 0.12]} />
          <meshStandardMaterial color="#2b2b2b" metalness={0.85} roughness={0.3} />
        </mesh>
      ))}
      <mesh position={[0, 3.1, 0]}>
        <boxGeometry args={[1.52, 0.1, 0.12]} />
        <meshStandardMaterial color="#353535" metalness={0.85} roughness={0.32} />
      </mesh>
      <mesh position={[0, 1.75, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.6, 18]} />
        <meshStandardMaterial color="#666" metalness={1} roughness={0.2} />
      </mesh>
      <mesh position={[-0.9, 1.75, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.08, 20]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.9, 1.75, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.08, 20]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function GymScene({ progress }: { progress: number }) {
  return (
    <>
      <color attach="background" args={["#07080b"]} />
      <fog attach="fog" args={["#07080b", 16, 90]} />

      <ambientLight intensity={0.5} color="#fff5ea" />
      <directionalLight position={[10, 15, 8]} intensity={1.2} color="#ffe2c4" castShadow />
      <pointLight position={[0, 6, 4]} intensity={6} color="#ff7b2d" distance={22} />
      <pointLight position={[0, 6, -10]} intensity={4.5} color="#ff5f1f" distance={24} />

      <mesh position={[0, -0.02, 0]} receiveShadow>
        <boxGeometry args={[34, 0.06, 70]} />
        <meshStandardMaterial color="#171717" roughness={0.9} metalness={0.12} />
      </mesh>

      <mesh position={[0, 4, -35]}>
        <boxGeometry args={[34, 8, 0.25]} />
        <meshStandardMaterial color="#111214" roughness={0.85} />
      </mesh>
      <mesh position={[-17, 4, 0]}>
        <boxGeometry args={[0.25, 8, 70]} />
        <meshStandardMaterial color="#0f1011" roughness={0.85} />
      </mesh>
      <mesh position={[17, 4, 0]}>
        <boxGeometry args={[0.25, 8, 70]} />
        <meshStandardMaterial color="#0f1011" roughness={0.85} />
      </mesh>

      <mesh position={[0, 7.2, 0]}>
        <boxGeometry args={[34, 0.16, 70]} />
        <meshStandardMaterial color="#111214" roughness={0.9} />
      </mesh>

      <DumbbellRack position={[-8, 0, 8]} />
      <DumbbellRack position={[-8, 0, 3]} />
      <DumbbellRack position={[8, 0, 8]} />

      <SquatRack position={[-10, 0, -2]} />
      <SquatRack position={[-5.5, 0, -2]} />
      <SquatRack position={[5.5, 0, -2]} />
      <SquatRack position={[10, 0, -2]} />

      <Bench position={[-8, 0, -10]} />
      <Bench position={[-4, 0, -10]} />
      <Bench position={[4, 0, -10]} />
      <Bench position={[8, 0, -10]} />

      <Treadmill position={[-9, 0, -18]} />
      <Treadmill position={[-5, 0, -18]} />
      <Treadmill position={[-1, 0, -18]} />
      <Treadmill position={[3, 0, -18]} />
      <Treadmill position={[7, 0, -18]} />

      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
        <Text
          position={[0, 5.8, 15]}
          fontSize={1.1}
          color="#ffb36d"
          letterSpacing={0.08}
          anchorX="center"
          anchorY="middle"
        >
          FITNESS GYM
        </Text>
      </Float>

      <Text
        position={[0, 2.2, 12]}
        fontSize={0.46}
        color="#d4d4d8"
        maxWidth={15}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        Scroll to move through the full 3D gym tour
      </Text>

      <CameraRig progress={progress} />
      <Environment preset="warehouse" />
    </>
  );
}

export default function ExperiencePage() {
  const walkthroughRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!walkthroughRef.current) {
        return;
      }

      const section = walkthroughRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollInSection = window.scrollY - sectionTop;
      const maxScroll = Math.max(1, sectionHeight - window.innerHeight);
      const nextProgress = scrollInSection / maxScroll;

      setProgress(Math.max(0, Math.min(1, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Experience</p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Full 3D gym walkthrough
          </h1>
          <p className="text-zinc-300 sm:text-lg">
            This is a real 3D scene. Scroll inside the tour to move the camera through
            the gym floor, equipment zones, and training area.
          </p>
        </div>
      </section>

      <section ref={walkthroughRef} className="relative h-[420vh]">
        <div className="sticky top-[90px] mx-auto max-w-6xl px-6">
          <div className="interactive-card overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70">
            <div className="relative h-[72vh] min-h-[520px]">
              <Canvas shadows camera={{ fov: 52, position: [0, 3.2, 18] }}>
                <GymScene progress={progress} />
              </Canvas>

              <div className="pointer-events-none absolute left-4 top-4 rounded-xl border border-zinc-700 bg-zinc-950/75 px-4 py-3 backdrop-blur sm:left-6 sm:top-6">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Walkthrough</p>
                <p className="mt-1 text-sm text-zinc-200">Scroll down to move through gym</p>
              </div>

              <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-orange-400/60 bg-zinc-950/70 px-4 py-2 text-xs font-semibold text-orange-300 backdrop-blur sm:bottom-6 sm:right-6 sm:text-sm">
                {Math.round(progress * 100)}% Complete
              </div>
            </div>
          </div>
          <div className="mt-5 px-1 text-center text-sm text-zinc-400">
            Keep scrolling to complete the full 3D gym tour.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="interactive-card rounded-3xl border border-zinc-800 bg-zinc-900/70 p-10 text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">Continue your journey</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            After viewing the complete gym in 3D, book your slot or get membership online.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/book"
              className="interactive-button rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-400"
            >
              Book Gym Now
            </Link>
            <Link
              href="/membership"
              className="interactive-button rounded-full border border-orange-400 px-6 py-3 text-sm font-semibold text-orange-200 hover:bg-orange-500 hover:text-white"
            >
              Get Membership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
