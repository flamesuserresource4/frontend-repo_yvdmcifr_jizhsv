export default function Footer() {
  return (
    <footer id="about" className="bg-black text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Iron Hero Showcase. Fan-made experience.</p>
          <div className="text-xs text-white/50">
            Built for entertainment and demonstration purposes.
          </div>
        </div>
      </div>
    </footer>
  );
}
