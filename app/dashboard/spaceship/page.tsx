"use client";
import React, { useEffect, useState } from 'react';

export default function SpaceshipDashboard() {
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [pilotName, setPilotName] = useState("");

  useEffect(() => {
    const id = localStorage.getItem('pilot_id');
    const name = localStorage.getItem('pilot_name');
    setPilotName(name || "Unknown Pilot");

    const checkStatus = async () => {
      try {
        const res = await fetch(`https://dreambox-server.onrender.com/users/${id}`);
        const data = await res.json();
        if (data.isRegistrationPaid) setIsActivated(true);
      } catch (err) {
        console.log("📡 Scanning..." + err);
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
    const interval = setInterval(() => { if (!isActivated) checkStatus(); }, 5000);
    return () => clearInterval(interval);
  }, [isActivated]);

  if (loading) return (
    <div className="min-h-screen bg-[#02020a] flex items-center justify-center font-mono text-purple-500">
      <div className="animate-pulse">INITIALIZING NEURAL LINK...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#02020a] text-white p-6 md:p-10 font-sans selection:bg-purple-500">
      
      {/* --- TOP NAV / HUD --- */}
      <div className="flex justify-between items-center mb-10 border-b border-purple-500/20 pb-6">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter">
            DREAMBOX<span className="text-purple-500 font-light">OS</span>
          </h1>
          <p className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.3em]">Sector: Lagos-Orbit-01</p>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-gray-500 uppercase">System Time</div>
          <div className="font-mono text-purple-400">{new Date().toLocaleTimeString()}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN: PILOT STATS --- */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900/40 to-transparent p-8 rounded-[2rem] border border-purple-500/20 backdrop-blur-sm">
            <div className="w-20 h-20 bg-purple-600 rounded-2xl mb-4 flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              🧑‍🚀
            </div>
            <h2 className="text-2xl font-black uppercase italic">{pilotName}</h2>
            <p className="text-purple-400 text-xs font-mono mb-4 italic">RANK: CADET (LEVEL 1)</p>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
               <div className="h-full bg-purple-500 w-[10%] animate-pulse"></div>
            </div>
            <p className="text-[9px] mt-2 text-gray-500 uppercase">Energy Level: 10%</p>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest">Active Comms</h3>
            <div className="text-xs text-green-400 font-mono bg-green-500/5 p-3 rounded-lg border border-green-500/20">
              Welcome to the academy! Complete your activation to unlock the Coding Lab.
            </div>
          </div>
        </div>

        {/* --- MAIN COLUMN: MISSIONS --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* HEADER AREA */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black italic uppercase">Mission Manifest</h3>
            {!isActivated && (
              <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 text-[10px] font-black rounded-full animate-pulse">
                WAITING FOR COMMAND HQ
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SUBJECT CARD: CODING */}
            <SubjectCard 
              title="Coding Lab" 
              icon="💻" 
              desc="Learn Python and build your first game logic."
              locked={!isActivated}
            />
            {/* SUBJECT CARD: ROBOTICS */}
            <SubjectCard 
              title="Robotics Wing" 
              icon="🤖" 
              desc="Understand circuits, sensors, and drone flight."
              locked={!isActivated}
            />
            {/* SUBJECT CARD: MATH */}
            <SubjectCard 
              title="Hyper-Math" 
              icon="📐" 
              desc="Master equations to calculate warp speed."
              locked={!isActivated}
            />
            {/* SUBJECT CARD: DESIGN */}
            <SubjectCard 
              title="UI/UX Galaxy" 
              icon="🎨" 
              desc="Design the interfaces of the future."
              locked={!isActivated}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for clean code
function SubjectCard({ title, icon, desc, locked }: { title: string, icon: string, desc: string, locked: boolean }) {
  return (
    <div className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 ${
      locked 
      ? 'bg-gray-900/20 border-white/5 grayscale pointer-events-none' 
      : 'bg-purple-900/20 border-purple-500/30 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] cursor-pointer translate-y-0 hover:-translate-y-2'
    }`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-black italic uppercase mb-2">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      
      {locked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-[2.5rem] backdrop-blur-[2px]">
          <div className="bg-black/80 px-4 py-2 rounded-xl border border-white/10 text-[10px] font-black tracking-widest text-white flex items-center gap-2">
            <span>🔒 LOCKED</span>
          </div>
        </div>
      )}
    </div>
  );
}