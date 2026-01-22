"use client";
import React from 'react';
import Image from 'next/image';
import { 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const TutorProfile = () => {
  // In a real app, you would fetch this from your /api/tutors endpoint
  const tutorData = {
    name: "Dr. Sarah Jenkins",
    status: "Pending", // This triggers the orange "In Review" UI
    expertise: ["Robotics Engineering", "Coding (Python)", "Special Needs (IEP)"],
    appliedDate: "Oct 24, 2023",
    region: "United Kingdom"
  };

  return (
    <div className="min-h-screen bg-[#F8F7FF] p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="flex items-center gap-5">
            <div className="relative w-20 h-20">
              <Image 
                src="https://i.pravatar.cc/150?u=sarah" 
                alt="Profile" 
                fill 
                className="rounded-3xl object-cover border-4 border-white shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900">{tutorData.name}</h1>
              <p className="text-gray-500 font-medium">{tutorData.region} Faculty</p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="bg-orange-50 border border-orange-100 px-6 py-3 rounded-2xl flex items-center gap-3">
            <Clock className="text-orange-500 animate-pulse" size={20} />
            <div>
              <p className="text-[10px] uppercase font-black text-orange-400 leading-none">Status</p>
              <p className="text-sm font-bold text-orange-700">{tutorData.status} Review</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left Column: Stats & Progress */}
          <div className="md:col-span-2 space-y-8">
            {/* Welcome Banner */}
            <div className="bg-[#6347D1] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-100">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Welcome to Dreambox!</h2>
                <p className="text-purple-100 opacity-90 max-w-md mb-6">
                  We are currently verifying your credentials. Once approved, you'll be able to manage classes and view student growth.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-xl text-xs font-bold">Applied: {tutorData.appliedDate}</div>
                  <div className="bg-white/20 px-4 py-2 rounded-xl text-xs font-bold">Faculty ID: DB-UK-042</div>
                </div>
              </div>
              <ShieldCheck size={120} className="absolute right-[-20px] bottom-[-20px] text-white/10 rotate-12" />
            </div>

            {/* Expertise Section */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
              <h3 className="font-black text-slate-800 mb-6 flex items-center gap-2">
                <Award className="text-pink-500" /> Your Specializations
              </h3>
              <div className="flex flex-wrap gap-3">
                {tutorData.expertise.map((skill, i) => (
                  <span key={i} className="px-5 py-3 bg-[#F8F7FF] text-[#6347D1] rounded-2xl text-xs font-bold border border-indigo-50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Steps to Completion */}
          <div className="space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
              <h3 className="font-black text-slate-800 mb-6">Onboarding Steps</h3>
              <div className="space-y-6">
                <StepItem icon={<CheckCircle2 className="text-green-500" />} label="Submit Application" done={true} />
                <StepItem icon={<Clock className="text-orange-400" />} label="Background Check" done={false} />
                <StepItem icon={<BookOpen className="text-gray-300" />} label="Training Module" done={false} />
              </div>
            </div>

            <button className="w-full bg-white text-slate-700 py-4 rounded-2xl font-bold border border-gray-100 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              Edit My Profile <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper component for onboarding list
const StepItem = ({ icon, label, done }: { icon: any, label: string, done: boolean }) => (
  <div className={`flex items-center gap-4 ${!done ? 'opacity-50' : ''}`}>
    <div className="flex-shrink-0">{icon}</div>
    <span className={`text-sm font-bold ${done ? 'text-slate-800' : 'text-slate-400'}`}>{label}</span>
  </div>
);

export default TutorProfile;