"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Define the shape of our role-based styles
interface RoleStyle {
  bg: string;
  accent: string;
  label: string;
  icon: string;
}

// Map roles to their specific styles
const roleConfig: Record<string, RoleStyle> = {
  student: { bg: 'bg-[#1a1a2e]', accent: 'text-yellow-400', label: 'Pilot', icon: '🚀' },
  tutor: { bg: 'bg-[#064e3b]', accent: 'text-emerald-400', label: 'Faculty', icon: '👨‍🏫' },
  admin: { bg: 'bg-[#1e1b4b]', accent: 'text-pink-400', label: 'Command', icon: '🛡️' },
  club: { bg: 'bg-[#431407]', accent: 'text-orange-400', label: 'Partner', icon: '🏫' }
};

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

  const current = roleConfig[role as string] || roleConfig.student;

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className={`w-64 ${current.bg} text-white flex flex-col h-screen sticky top-0 transition-colors duration-500`}>
        <div className="p-8">
          <h1 className="text-xl font-black italic uppercase tracking-tighter">
            Dreambox <span className={current.accent}>{current.label}</span>
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {role === 'student' && <StudentLinks accent={current.accent} />}
          {role === 'tutor' && <TutorLinks accent={current.accent} />}
        </nav>

        <div className="p-4 mt-auto border-t border-white/5">
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-6 py-4 text-[10px] font-black uppercase text-red-400 hover:bg-red-50/5 rounded-xl transition-all">
            🚪 Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-white lg:rounded-l-[3rem] shadow-inner z-10 relative">
        {children}
      </main>
    </div>
  );
}

// Simple link placeholders for now
function StudentLinks({ accent }: { accent: string }) {
  return <button className={`w-full text-left p-4 text-[10px] font-black uppercase ${accent}`}>Mission Control</button>;
}
function TutorLinks({ accent }: { accent: string }) {
  return <button className={`w-full text-left p-4 text-[10px] font-black uppercase ${accent}`}>Faculty Suite</button>;
}