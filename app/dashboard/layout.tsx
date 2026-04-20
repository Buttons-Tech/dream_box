"use client";
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [pilotName, setPilotName] = useState("Pilot");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem('pilot_name');
    const userJson = localStorage.getItem('dbx_user');

    if (name) {
      setPilotName(name.split(' ')[0]); 
    } else if (userJson) {
      try {
        const user = JSON.parse(userJson);
        setPilotName(user.fullName.split(' ')[0]);
      } catch (e) {
        console.error("Layout Sync Error" + e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      
      {/* 1. MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 2. RESPONSIVE SIDEBAR */}
      <aside className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-100 z-[110]
        w-64 transition-transform duration-300 ease-in-out flex flex-col p-6
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="mb-10 flex justify-between items-center">
          <h1 className="text-xl font-black italic uppercase tracking-tighter text-purple-700">Dreambox</h1>
          {/* Close button for mobile */}
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400">✕</button>
        </div>

        {/* PROFILE SECTION (Uniform with your previous code) */}
        <div className="mb-8 p-4 bg-purple-50 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-black shrink-0">
            {pilotName[0]}
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Active Pilot</p>
            <p className="text-sm font-black text-gray-800 truncate">{pilotName}</p>
          </div>
        </div>

        {/* NAVIGATION LINKS (Placeholder for your links) */}
        <nav className="flex-1 space-y-2">
           {/* Add your <Link> components here */}
        </nav>

        {/* LOGOUT (Bottom of Sidebar) */}
        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 p-4 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all group"
        >
          <span className="text-xl group-hover:rotate-12 transition-transform">🚪</span>
          <span className="text-xs font-black uppercase tracking-widest text-left">Logout</span>
        </button>
      </aside>

      {/* 3. MOBILE TOP BAR (Only visible on mobile) */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100 sticky top-0 z-[90]">
        <h1 className="font-black text-purple-700 italic text-sm uppercase">Dreambox</h1>
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 bg-purple-50 text-purple-700 rounded-xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {/* 4. MAIN CONTENT AREA (Pushed by sidebar on desktop) */}
      <main className="lg:ml-64 min-h-screen bg-white transition-all duration-300">
  <div className="p-4 md:p-8"> {/* Standard dashboard padding */}
    {children}
  </div>
</main>
    </div>
  );
}