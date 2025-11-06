import { Zap, Radar, Target } from "lucide-react";

const weapons = [
  {
    icon: Zap,
    name: "Repulsor Beams",
    desc: "High-intensity directed energy with precision targeting.",
  },
  {
    icon: Radar,
    name: "Smart Missiles",
    desc: "Micro-guided payloads with autonomous threat tracking.",
  },
  {
    icon: Target,
    name: "Unibeam",
    desc: "Chest-mounted particle cannon for maximum output.",
  },
];

export default function Arsenal() {
  return (
    <section id="arsenal" className="relative bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Arsenal</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A showcase of iconic weapon systems and defensive countermeasures.
            </p>
          </div>
          <a href="#about" className="rounded-md border border-white/20 hover:border-white/40 px-4 py-2 text-sm transition">Learn More</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {weapons.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-red-500" />
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
