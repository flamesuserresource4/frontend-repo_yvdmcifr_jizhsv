import { Rocket, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 backdrop-blur bg-black/20 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-red-500" />
          <span className="font-semibold tracking-wide">IRON HERO</span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <li><a href="#tech" className="hover:text-white transition">Tech</a></li>
          <li><a href="#arsenal" className="hover:text-white transition">Arsenal</a></li>
          <li><a href="#about" className="hover:text-white transition">About</a></li>
        </ul>
        <a href="#arsenal" className="inline-flex items-center gap-2 rounded-md bg-red-600/90 hover:bg-red-600 px-3 py-1.5 text-sm font-medium shadow-lg shadow-red-600/30 transition">
          <Rocket className="h-4 w-4" /> Launch
        </a>
      </nav>
    </header>
  );
}
