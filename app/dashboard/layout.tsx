"use client";
import React, { useEffect, useState } from 'react';
// ... your other imports (Sidebar, etc.)

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [pilotName, setPilotName] = useState("Pilot");

  useEffect(() => {
    // 1. Check for the name specifically
    const name = localStorage.getItem('pilot_name');
    const userJson = localStorage.getItem('dbx_user');

    if (name) {
      // Use the dedicated name key if it exists
      setPilotName(name.split(' ')[0]); 
    } else if (userJson) {
      // Fallback: Parse the full user object
      try {
        const user = JSON.parse(userJson);
        setPilotName(user.fullName.split(' ')[0]);
      } catch (e) {
        console.error("Layout Sync Error" + e);
      }
    }
  }, []);

  return (
    <div className="flex h-screen bg-[#fafafa]">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col p-6">
        <div className="mb-10">
          <h1 className="text-xl font-black italic uppercase tracking-tighter text-purple-700">Dreambox</h1>
        </div>

        {/* PROFILE SECTION IN SIDEBAR */}
        <div className="mb-8 p-4 bg-purple-50 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-black">
            {pilotName[0]}
          </div>
          <div>
            <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Active Pilot</p>
            <p className="text-sm font-black text-gray-800">{pilotName}</p>
          </div>
        </div>

        {/* ... rest of your nav links ... */}
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  );
}