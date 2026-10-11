export default function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-200/60 border-2 border-amber-300 px-4 py-2 rounded-full">
              <span className="text-xl">🌟</span>
              <span className="text-xs sm:text-sm font-black text-amber-900 tracking-wide uppercase">Egan Center, Lagos • Ages 3+</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Where Kids <span className="text-amber-500 underline decoration-wavy decoration-amber-300">Build Their Dreams</span> Through STEM!
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Welcome to Dreambox Club! Spark your child's imagination with hands-on Robotics, Python Programming, AI, and Mathematics designed for young innovators.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={onGetStarted}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-amber-950 font-black px-8 py-4 rounded-2xl shadow-[0_6px_0_0_#d97706] active:translate-y-1 active:shadow-none transition-all text-lg"
              >
                Enroll Your Child Now 🎒
              </button>
              <a 
                href="#courses"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 font-bold px-8 py-4 rounded-2xl shadow-sm text-center transition-all"
              >
                Explore Courses 📚
              </a>
            </div>
          </div>

          {/* Right Cartoon Visual Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-amber-300 rounded-[40px] border-4 border-amber-400 shadow-[0_12px_0_0_#f59e0b] p-6 flex flex-col items-center justify-center text-center">
              <div className="absolute -top-6 -right-6 bg-white border-4 border-amber-300 px-4 py-2 rounded-2xl font-black text-slate-800 shadow-md rotate-6">
                🤖 100% Hands-On!
              </div>
              <div className="text-8xl mb-4 animate-bounce">🚀</div>
              <h3 className="text-2xl font-black text-amber-950">Future Innovators Hub</h3>
              <p className="text-amber-900 font-semibold text-sm mt-2">
                Equipping primary & secondary students with next-gen technical superpowers right here in Egan, Lagos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}