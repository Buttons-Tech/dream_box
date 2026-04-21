"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function UnifiedDashboardLayout({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userJson = localStorage.getItem('dbx_user');
    if (!userJson) { 
      router.push('/'); 
      return; 
    }
    const user = JSON.parse(userJson);
    setRole(user.role || 'student');
  }, [router]);

  // If role isn't loaded yet, show a loading state so it doesn't look "broken"
  if (!role) return <div className="min-h-screen bg-white" />;

  const isTutor = role === 'tutor';
  const navBg = isTutor ? 'bg-[#064e3b]' : 'bg-[#1a1a2e]';
  const accent = isTutor ? 'text-emerald-400' : 'text-yellow-400';

  return (
    // FIX: Ensure the container is a column on mobile and a row on desktop
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-gray-50 overflow-x-hidden">
      
      {/* DESKTOP SIDEBAR */}
      <aside className={`hidden lg:flex w-64 ${navBg} text-white flex-col h-screen sticky top-0`}>
        <div className="p-8 font-black italic uppercase tracking-tighter">
          Dreambox <span className={accent}>{isTutor ? 'Faculty' : 'Pilot'}</span>
        </div>
        <nav className="flex-1 px-4">
           {/* Navigation links go here */}
        </nav>
        <button onClick={() => { localStorage.clear(); router.push('/'); }} className="p-8 text-[10px] font-black uppercase text-red-400 text-left">
          🚪 Logout
        </button>
      </aside>

      {/* MAIN CONTENT AREA - FIXING THE VISIBILITY */}
      <main className="flex-1 w-full min-h-screen relative bg-white pb-24 lg:pb-0 lg:rounded-l-[3rem] shadow-2xl">
        <div className="w-full h-full min-h-[100vh]">
          {children}
        </div>
      </main>

      {/* MOBILE BOTTOM NAV */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 z-[100] ${navBg} border-t border-white/10 px-6 py-4 flex justify-around items-center shadow-2xl`}>
         <Link href={isTutor ? "/tutor" : "/student"} className="flex flex-col items-center gap-1">
           <span className="text-xl">{isTutor ? '🏠' : '🚀'}</span>
           <span className={`text-[8px] font-black uppercase ${accent}`}>Home</span>
         </Link>
         <button onClick={() => { localStorage.clear(); router.push('/'); }} className="flex flex-col items-center gap-1 text-red-400">
           <span className="text-xl">🚪</span>
           <span className="text-[8px] font-black uppercase">Exit</span>
         </button>
      </nav>
    </div>
  );
}