import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]">
            Become the Armored Avenger
          </h1>
          <p className="mt-5 text-white/80 text-lg sm:text-xl">
            Step into a fully interactive 3D showcase inspired by the genius, billionaire, playboy, philanthropist. Spin, explore, and feel the power.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#tech" className="rounded-md bg-red-600 hover:bg-red-500 px-5 py-2.5 font-medium shadow-lg shadow-red-600/30 transition">Explore Tech</a>
            <a href="#arsenal" className="rounded-md border border-white/20 hover:border-white/40 px-5 py-2.5 font-medium transition">View Arsenal</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
