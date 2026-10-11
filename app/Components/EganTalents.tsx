export default function EganTalents() {
  return (
    <section id="talents" className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-block bg-amber-400 text-amber-950 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
          🌟 Upcoming Competition
        </div>
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight">Egan Got Talents!</h2>
        <p className="text-lg text-purple-100 max-w-2xl mx-auto font-medium">
          Showcase your coding projects, robotic marvels, math speed trials, and digital masterpieces. Exciting prizes and trophies await our young champions!
        </p>
        <div className="pt-4">
          <button className="bg-amber-400 hover:bg-amber-300 text-amber-950 font-black px-8 py-4 rounded-2xl shadow-[0_6px_0_0_#b45309] active:translate-y-1 active:shadow-none transition-all text-lg">
            Register Your Child for the Show 🎉
          </button>
        </div>
      </div>
    </section>
  );
}