import Image from "next/image";





const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" 
          alt="Virtual School Background" 
          fill
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
          Empowering the Next Generation of <span className="text-blue-600">Creators</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Bridging the gap between traditional education and global tech realities through 
          innovation, robotics, and personalized learning.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition">
            Sign Up My Child
          </button>
          <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition">
            Bring Dreambox to My School
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero