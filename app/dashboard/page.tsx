"use client";
import React, { useEffect, useState } from 'react';

// 1. DEFINE THE INTERFACE TO FIX TYPESCRIPT ERRORS
interface UserData {
  fullName: string;
  parentEmail: string;
  gender: string;
  age: string | number;
  currentClass: string;
  country: string;
  enrolledSubjects: string[];
  favouriteCharacter?: string;
  role: string;
}

export default function DashboardPage() {
  // Set the state with the UserData type or null
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
    const hydrateData = () => {
      try {
        const saved = localStorage.getItem('dbx_user');
        
        // Check if data exists and isn't a string "undefined"
        if (saved && saved !== "undefined") {
          const parsed: UserData = JSON.parse(saved);
          setUserData(parsed);
        }
      } catch (error) {
        console.error("Failed to parse user data:", error);
      } finally {
        setIsSyncing(false);
      }
    };

    hydrateData();
  }, []);

  // 2. LOADING STATE (Prevents "undefined" errors while reading storage)
  if (isSyncing) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-600">Syncing Pilot Data...</p>
        </div>
      </div>
    );
  }

  // 3. FALLBACK IF NO DATA IS FOUND
  if (!userData) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">No Pilot Data Found</h2>
        <p className="text-gray-500 mb-6">{`We couldn't find your profile. Please try registering again.`}</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="px-8 py-3 bg-purple-600 text-white rounded-xl font-bold"
        >
          Return to Base
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 p-4 md:p-8">
      
      {/* WELCOME BANNER */}
      <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-black rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <span className="px-4 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 inline-block">
            {userData.role} Status: Active
          </span>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 uppercase">
            Welcome, {userData.fullName.split(' ')[0]}!
          </h1>
          <p className="text-purple-200 font-medium max-w-md text-sm md:text-base mb-8">
            Your learning modules for <span className="text-white font-bold">{userData.currentClass}</span> are primed and ready for exploration.
          </p>
          
          <div className="flex flex-wrap gap-3">
             {userData.enrolledSubjects?.map((sub) => (
               <span key={sub} className="px-5 py-2 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                 {sub} Sector
               </span>
             ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
        <div className="absolute right-12 top-12 text-7xl opacity-10 rotate-12 select-none">🚀</div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoTile label="Current Region" value={userData.country} icon="🌍" color="text-blue-500" />
        <InfoTile label="Academic Tier" value={userData.currentClass} icon="🎓" color="text-purple-500" />
        <InfoTile label="Age Group" value={`${userData.age} yrs`} icon="⚡" color="text-orange-500" />
        <InfoTile label="Subjects" value={userData.enrolledSubjects?.length.toString() || "0"} icon="📚" color="text-green-500" />
      </div>

      {/* LEARNING PATHWAYS */}
      <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-sm">
         <div className="flex justify-between items-center mb-10">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Active Learning Pathways</h3>
            <div className="h-px flex-1 bg-gray-100 mx-8 hidden md:block"></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userData.enrolledSubjects?.map((subject) => (
              <div key={subject} className="group p-8 bg-gray-50 rounded-[2.5rem] border-2 border-transparent hover:border-purple-200 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all">
                   {getSubjectIcon(subject)}
                 </div>
                 <h4 className="font-black italic uppercase text-xl text-gray-800 mb-2">{subject}</h4>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Status: Ready for Launch</p>
                 <div className="mt-6 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-purple-600 rounded-full"></div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}

// HELPER: UI COMPONENTS
function InfoTile({ label, value, icon, color }: { label: string, value: string, icon: string, color: string }) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="text-2xl mb-4">{icon}</div>
      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-xl font-black italic uppercase truncate ${color}`}>{value}</p>
    </div>
  );
}

// HELPER: ICONS MAPPING
function getSubjectIcon(subject: string) {
  const s = subject.toLowerCase();
  if (s.includes('cod')) return '💻';
  if (s.includes('robot')) return '🤖';
  if (s.includes('math')) return '📐';
  if (s.includes('stem')) return '🧬';
  if (s.includes('art')) return '🎨';
  return '🌟';
}