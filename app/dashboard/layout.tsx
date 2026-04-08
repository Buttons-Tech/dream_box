"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Mission Control', href: '/dashboard', icon: '🏠' },
    { name: 'My Classes', href: '/dashboard/classes', icon: '📚' },
    { name: 'Performance Reports', href: '/dashboard/reports', icon: '📊' },
    { name: 'Account Profile', href: '/dashboard/profile', icon: '👤' },
  ];

  return (
    <div className="flex min-h-screen bg-[#fcfcfd]">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col fixed h-full">
        <div className="p-8">
          <h1 className="text-xl font-black italic tracking-tighter text-purple-700">DREAMBOX</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
                  isActive 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
                  : 'text-gray-400 hover:bg-gray-50'
                }`}
              >
                <span>{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-gray-50">
          <button className="w-full p-4 bg-red-50 text-red-600 rounded-2xl text-xs font-black uppercase tracking-widest">
            Eject Pilot
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-64 min-h-screen">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
           <h2 className="font-bold text-gray-800 uppercase tracking-widest text-xs">
             Sector: {pathname.split('/').pop() || 'Overview'}
           </h2>
           <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs font-black text-gray-900 leading-none">Cadet Victor</p>
                <p className="text-[10px] text-green-500 font-bold uppercase">Online</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center">🚀</div>
           </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}