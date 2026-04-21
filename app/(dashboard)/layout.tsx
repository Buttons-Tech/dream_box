"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface RoleStyle { bg: string; accent: string; label: string; icon: string; }

const roleConfig: Record<string, RoleStyle> = {
  student: { bg: 'bg-[#1a1a2e]', accent: 'text-yellow-400', label: 'Pilot', icon: '🚀' },
  tutor: { bg: 'bg-[#064e3b]', accent: 'text-emerald-400', label: 'Faculty', icon: '👨‍🏫' },
};

export default function UnifiedDashboardLayout({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const userJson = localStorage.getItem('dbx_user');
    if (!userJson) { router.push('/'); return; }
    const user = JSON.parse(userJson);
    setRole(user.role || 'student');
  }, [router]);

  const current = roleConfig[role as string] || roleConfig.student;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* DESKTOP SIDEBAR (Hidden on Mobile) */}
      <aside className={`hidden lg:flex w-64 ${current.bg} text-white flex-col h-screen sticky top-0`}>
        <div className="p-8 font-black italic uppercase tracking-tighter">
          Dreambox <span className={current.accent}>{current.label}</span>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <NavLinks role={role} accent={current.accent} isMobile={false} />
        </nav>
        <button onClick={() => { localStorage.clear(); router.push('/'); }} className="p-8 text-[10px] font-black uppercase text-red-400 text-left">
          🚪 Logout
        </button>
      </aside>

      {/* MOBILE BOTTOM NAV (Visible only on Mobile) */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 z-[100] ${current.bg} border-t border-white/10 px-6 py-3 flex justify-between items-center shadow-2xl`}>
        <NavLinks role={role} accent={current.accent} isMobile={true} />
        <button onClick={() => { localStorage.clear(); router.push('/'); }} className="flex flex-col items-center gap-1 text-red-400">
           <span className="text-xl">🚪</span>
           <span className="text-[8px] font-black uppercase">Exit</span>
        </button>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 pb-24 lg:pb-0 lg:rounded-l-[3rem] bg-white overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}

function NavLinks({ role, accent, isMobile }: { role: string | null, accent: string, isMobile: boolean }) {
  const links = role === 'tutor' 
    ? [{ label: 'Home', icon: '🏠', href: '/tutor' }, { label: 'Reports', icon: '📝', href: '/tutor/reports' }]
    : [{ label: 'Home', icon: '🚀', href: '/student' }, { label: 'Library', icon: '📚', href: '/student/library' }];

  return (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={`flex ${isMobile ? 'flex-col items-center gap-1' : 'items-center gap-4 p-4 rounded-xl'} transition-all`}>
          <span className="text-xl lg:text-base">{link.icon}</span>
          <span className={`text-[9px] lg:text-[10px] font-black uppercase tracking-widest ${accent}`}>
            {link.label}
          </span>
        </Link>
      ))}
    </>
  );
}