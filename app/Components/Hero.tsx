"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeroProps {
  onSignUpClick: () => void;
}

const Hero = ({ onSignUpClick }: HeroProps) => {
  const router = useRouter(); 

  return (
    <section className="relative min-h-screen flex items-center pt-10 lg:pt-20 overflow-hidden bg-white">
      {/* Decorative Brand Blobs */}
      <div className="absolute top-20 l eft-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT COLUMN: The "Whole Child" Hook */}
        <div className="text-left space-y-6 md:space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-100">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-700">Special Needs • Home Schooling • School Tech Club</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-black text-gray-900 leading-[0.95] tracking-tighter uppercase italic">
            Where <span className="text-purple-700">Online SChooling</span> <br />
            Meets <span className="text-yellow-500 underline decoration-purple-700">Innovation</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 font-medium max-w-lg leading-relaxed">
            From first words to first lines of code. We nurture early years development, mastery in English, and global tech skills in one virtual laboratory for the next generation of leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onSignUpClick}
              className="bg-purple-700 text-white px-8 py-4 md:py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-purple-800 shadow-xl shadow-purple-200 transition-all"
            >
              Enroll My Child
            </button>
            <button 
              onClick={() => router?.push('/contact-school')}
              className="bg-white border-2 border-purple-700 text-purple-700 px-8 py-4 md:py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-purple-50 transition-all"
            >
              For Schools
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: The Visual (Visible on ALL screens now) */}
        <div className="relative group order-1 lg:order-2 mt-12 lg:mt-0">
            {/* Main Image Container - Adjusted size for mobile */}
            <div className="relative z-10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl rotate-1 lg:rotate-2 hover:rotate-0 transition-all duration-500">
                <Image 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" 
                    alt="Child reading and learning" 
                    width={600}
                    height={700}
                    className="object-cover h-[350px] md:h-[500px] w-full"
                />
                {/* Visual Overlay to warm up the image */}
                <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* BALANCED BADGES: Tech vs. Early Years */}
            <div className="absolute -top-4 -left-4 z-20 bg-yellow-400 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl -rotate-6">
                <p className="text-xl md:text-2xl">📖</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase text-purple-950">Online Schooling</p>
            </div>
            
            <div className="absolute bottom-10 -right-4 z-20 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl rotate-6 border border-purple-100">
                <p className="text-xl md:text-2xl">🎨</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase text-purple-700">Early Years</p>
            </div>

            <div className="absolute top-12 -left-8 z-30 bg-purple-700 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl -rotate-12 lg:block hidden">
                <p className="text-xl md:text-2xl">🤖</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase text-white">TECH Academy</p>
            </div>
              <div className="absolute bottom-23 -right-8 z-30 bg-purple-700 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl -rotate-12 lg:block hidden">
                <p className="text-xl md:text-2xl">📖</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase text-white">Tutoring</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;