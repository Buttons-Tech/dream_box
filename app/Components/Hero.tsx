"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeroProps {
  onSignUpClick: () => void;
}


const Hero = ({ onSignUpClick }: HeroProps) => {
  const router = useRouter() 

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" 
          alt="Virtual School Background" 
          fill
          className="w-full h-full object-cover opacity-20"
        />
        {/* Brand Gradient: Purple to White */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-transparent to-white"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
          Empowering the Next Generation of <span className="text-purple-700">Creators</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Bridging the gap between traditional education and global realities through 
          creativity, innovation, technology and personalized learning.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={onSignUpClick}
            className="bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-purple-800 hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            Sign Up My Child
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
          </button>
          <button 
            onClick={() => router?.push('/contact-school')}
            className="bg-white border-2 border-purple-700 text-purple-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-purple-50 transition"
          >
            Bring Dreambox to My School
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;