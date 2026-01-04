"use client";
import React from 'react';
import { 
  Code, 
  Cpu, 
   
  Calculator, 
  Users, 
  Heart,
  ChevronRight,
  UserPlus,
  Building2,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

interface CategoryItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, title, desc, color }) => (
  <div className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
    <div className={`${color} w-12 h-12 rounded-xl flex flex-shrink-0 items-center justify-center text-white shadow-sm`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#6347D1] transition-colors">{title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed mt-1">{desc}</p>
    </div>
  </div>
);

const GetStarted: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] flex flex-col md:flex-row font-sans">
      
      {/* Left Side: Introduction */}
      <div className="w-full md:w-5/12 bg-[#6347D1] p-8 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-48 h-48 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="bg-pink-500 p-1.5 rounded-lg shadow-lg">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-black tracking-tight">Dreambox</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Empowering the <br/>Next Generation.
          </h1>
          <p className="text-purple-100 mb-12 leading-relaxed opacity-90 max-w-md">
            Dreambox is a global tech-driven academy providing world-class education to students in Nigeria, US, UK, and Canada. We believe every child is a genius waiting to be unlocked.
          </p>

          <div className="space-y-2">
            <CategoryItem 
              icon={<Code size={20} />} 
              title="Coding" 
              desc="Logic & software development for kids." 
              color="bg-blue-500" 
            />
            <CategoryItem 
              icon={<Cpu size={20} />} 
              title="Robotics" 
              desc="Engineering & hardware programming." 
              color="bg-green-400" 
            />
            <CategoryItem 
              icon={<Users size={20} />} 
              title="School Clubs" 
              desc="Bringing tech excellence to your school campus." 
              color="bg-indigo-400" 
            />
            <CategoryItem 
              icon={<Heart size={20} />} 
              title="Special Needs" 
              desc="Inclusive and adaptive learning paths." 
              color="bg-pink-400" 
            />
            <CategoryItem 
              icon={<Calculator size={20} />} 
              title="Tutorials" 
              desc="Math & English mastery for all grades." 
              color="bg-orange-400" 
            />
          </div>
        </div>
      </div>

      {/* Right Side: Sign Up Options */}
      <div className="w-full md:w-7/12 p-8 md:p-24 flex flex-col justify-center items-center">
        <div className="max-w-md w-full text-center md:text-left">
          <h2 className="text-3xl font-black text-slate-900 mb-2">How would you like to join?</h2>
          <p className="text-gray-500 mb-10">Select your path to get started with the academy.</p>

          <div className="space-y-4">
            {/* Parent Sign Up */}
            <button className="w-full group bg-white border-2 border-transparent hover:border-[#6347D1] p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="bg-orange-100 text-[#FE9B4B] p-4 rounded-2xl group-hover:bg-[#6347D1] group-hover:text-white transition-colors">
                  <UserPlus size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-black text-slate-800">I am a Parent</h3>
                  <p className="text-xs text-gray-400">Enroll your child for global learning.</p>
                </div>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#6347D1]" />
            </button>

            {/* School Sign Up */}
            <Link href="/get-started/school" className="w-full">
            <button className="w-full group bg-white border-2 border-transparent hover:border-[#6347D1] p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="bg-blue-100 text-blue-500 p-4 rounded-2xl group-hover:bg-[#6347D1] group-hover:text-white transition-colors">
                  <Building2 size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-black text-slate-800">I am a School</h3>
                  <p className="text-xs text-gray-400">Set up a School Club on your campus.</p>
                </div>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#6347D1]" />
            </button>
            </Link>

            {/* Tutor Sign Up */}
            <Link href="/get-started/tutor" className="w-full">
            <button className="w-full group bg-white border-2 border-transparent hover:border-[#6347D1] p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="bg-green-100 text-green-500 p-4 rounded-2xl group-hover:bg-[#6347D1] group-hover:text-white transition-colors">
                  <GraduationCap size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-black text-slate-800">I am a Tutor</h3>
                  <p className="text-xs text-gray-400">Join our global network of educators.</p>
                </div>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#6347D1]" />
            </button>
            </Link>
          </div>

          <p className="mt-12 text-center text-sm text-gray-400">
            Already have an account? <a href="#" className="text-[#6347D1] font-bold hover:underline">Log in here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;