import { Cpu, ShieldCheck, Gauge, Battery } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Arc Reactor Core",
    desc: "Clean, near-limitless power output driving the suit and integrated systems.",
  },
  {
    icon: ShieldCheck,
    title: "Nano-Armor",
    desc: "Self-assembling plating with dynamic sealing and impact dispersion.",
  },
  {
    icon: Gauge,
    title: "Flight Stabilizers",
    desc: "Micro-thrusters and AI-assisted stabilization for precision maneuvers.",
  },
  {
    icon: Battery,
    title: "Energy Management",
    desc: "Adaptive routing to weapons, propulsion, and defense in real-time.",
  },
];

export default function TechGrid() {
  return (
    <section id="tech" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Stark-Level Technology</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          A modular system engineered for speed, protection, and overwhelming firepower.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
              <Icon className="h-6 w-6 text-red-500" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
