"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// 1. STANDARDIZED DATA INTERFACE
interface UserData {
  fullName: string;
  currentClass: string;
  country: string;
  enrolledSubjects: string[];
  age: string | number;
  role: string;
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 2. UNIFIED DATA HYDRATION
    const checkAuth = () => {
      const token = localStorage.getItem('dbx_token');
      const savedUser = localStorage.getItem('dbx_user');

      if (!token || !savedUser) {
        router.push('/'); // Redirect if session is missing
        return;
      }

      try {
        setUserData(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user data");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <div className="flex h-screen items-center justify-center font-black text-purple-700 animate-pulse">SYNCHRONIZING...</div>;
  if (!userData) return null;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* HERO SECTION: Uniform Purple/Yellow Branding */}
        <section className="relative overflow-hidden bg-purple-900 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-purple-200">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
              <span className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.3em]">System Active</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-none">
              Welcome Back, <span className="text-yellow-400">{userData.fullName.split(' ')[0]}</span>
            </h1>
            <p className="text-purple-200 text-sm md:text-base font-medium max-w-md">
              Your mission profile for <span className="text-white font-bold underline">{userData.currentClass}</span> is ready for deployment.
            </p>
          </div>
          {/* Brand Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full -mr-20 -mt-20 blur-3xl" />
        </section>

        {/* STATS ROW: Mobile-Responsive 2x2 or 4x1 Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBox label="Current Grade" value={userData.currentClass} color="text-purple-700" />
          <StatBox label="Location" value={userData.country} color="text-blue-600" />
          <StatBox label="Age Group" value={`${userData.age} yrs`} color="text-orange-600" />
          <StatBox label="Active Units" value={userData.enrolledSubjects?.length || 0} color="text-green-600" />
        </section>

        {/* MODULES SECTION: The Core Learning Grid */}
        <section className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2">Curriculum</h2>
              <p className="text-2xl font-black text-gray-900 italic">Learning Modules</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.enrolledSubjects?.map((subject, index) => (
              <SubjectCard key={index} title={subject} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

// 3. REUSABLE COMPONENTS FOR UNIFORMITY

function StatBox({ label, value, color }: { label: string, value: string | number, color: string }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-xl font-black uppercase truncate ${color}`}>{value}</p>
    </div>
  );
}

function SubjectCard({ title }: { title: string }) {
  return (
    <div className="group cursor-pointer bg-gray-50 hover:bg-white p-6 rounded-3xl border-2 border-transparent hover:border-yellow-400 transition-all duration-300">
      <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
        {title.toLowerCase().includes('coding') ? '💻' : 
         title.toLowerCase().includes('robotics') ? '🤖' : '🚀'}
      </div>
      <h3 className="font-black text-lg text-gray-800 uppercase leading-tight mb-2">{title}</h3>
      <div className="flex items-center gap-2 text-[10px] font-black text-purple-600 uppercase tracking-widest">
        <span>Enter Classroom</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
}