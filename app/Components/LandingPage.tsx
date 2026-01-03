"use client";
import React from "react";
import {
  Code,
  Cpu,
  Baby,
  Calculator,
  Globe,
  Heart,
  ChevronRight,
  Menu,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color,
}) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-50 group">
    <div
      className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7FF] font-sans selection:bg-purple-200">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2">
          <div className="bg-pink-500 p-1.5 rounded-lg">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <span className="text-2xl font-black text-[#6347D1] tracking-tight">
            Dreambox
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-600">
          <a href="#" className="hover:text-[#6347D1]">
            Programs
          </a>
          <a href="#" className="hover:text-[#6347D1]">
            Special Needs
          </a>
          <a href="#" className="hover:text-[#6347D1]">
            Global
          </a>
          <button className="bg-[#6347D1] text-white px-8 py-3 rounded-2xl shadow-lg shadow-indigo-100 hover:bg-[#5239b5] transition-all">
            Join Academy
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 pt-12 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#6347D1] px-4 py-2 rounded-full text-xs font-bold mb-6">
            <Globe size={14} />
            <span>Now Enrolling: Nigeria • US • UK • Canada</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
            Building the <span className="text-[#6347D1]">Innovators</span> of
            Tomorrow.
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
            From Coding and Robotics to specialized Math & English tutorials. We
            empower every child—including those with special needs—to dream
            bigger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            
            <Link  href="/get-started" className="w-full flex flex-col sm:flex-row gap-4" >
            <button className="bg-[#FE9B4B] text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-orange-100 hover:bg-orange-500 transition-all flex items-center justify-center gap-2">
              Get Started <ChevronRight size={18} />
            </button>
            </Link>

            <Link  href="/get-started" className="w-full flex flex-col sm:flex-row gap-4" >
            <button className="bg-white text-slate-700 px-10 py-4 rounded-2xl font-bold shadow-sm border border-gray-100 hover:bg-gray-50 transition-all">
              View Curriculum
            </button>
            </Link>

          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <img
            src="https://illustrations.popsy.co/white/student-going-to-school.svg"
            alt="Hero Illustration"
            className="relative z-10 w-full"
          />
        </div>
      </section>

      {/* Programs Section */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Diverse Learning Paths
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Tailored education for every stage of development, from early years
            to advanced tech skills.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Code size={28} />}
            title="Coding"
            description="Master Python, Scratch, and Web Dev. Logic building for the digital age."
            color="bg-blue-500"
          />
          <FeatureCard
            icon={<Cpu size={28} />}
            title="Robotics"
            description="Hands-on engineering. Build and program real-world hardware kits."
            color="bg-green-400"
          />
          <FeatureCard
            icon={<Users size={28} />}
            title="School Clubs"
            description="We partner with schools to establish world-class tech hubs on your physical campus."
            color="bg-indigo-400"
          />

          <FeatureCard
            icon={<Baby size={28} />}
            title="Early Years"
            description="Foundation skills for toddlers. Fun, interactive, and stimulating."
            color="bg-pink-400"
          />
          <FeatureCard
            icon={<Calculator size={28} />}
            title="Tutorials"
            description="Excellence in Math and English. Exam prep and curriculum support."
            color="bg-orange-400"
          />
        </div>
      </section>

      {/* Special Needs Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="bg-[#6347D1] rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl shadow-indigo-200">
          <div className="md:w-1/2 z-10">
            <div className="inline-flex items-center gap-2 bg-purple-400/30 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <Heart size={14} className="fill-current" />
              <span>Inclusive Education</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Every Child Deserves <br /> a Chance to Shine.
            </h2>
            <p className="text-purple-100 text-lg mb-10 leading-relaxed opacity-90">
              Our specialized curriculum for children with special needs ensures
              that learning is accessible, supportive, and paced to individual
              progress.
            </p>
            <button className="bg-white text-[#6347D1] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all">
              Talk to a Specialist
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="/img/Special-Needs.jpg"
              alt="Inclusion Illustration"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-pink-500 p-1 rounded-md">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="font-bold text-slate-800">Dreambox Academy</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2026 Dreambox Academy. Serving Lagos, London, Toronto & New York.
          </p>
          <div className="flex gap-6 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-[#6347D1]">
              Terms
            </a>
            <a href="#" className="hover:text-[#6347D1]">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
