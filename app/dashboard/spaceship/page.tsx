"use client";
import React, { useEffect, useState } from 'react';

const SpaceshipDashboard = () => {
  const [pilotName, setPilotName] = useState('CREATOR');

  useEffect(() => {
    // Grab name from local storage or API for now
    const name = localStorage.getItem('child_name') || 'CREATOR';
    setPilotName(name.toUpperCase());
  }, []);

  return (
    <div className="min-h-screen bg-[#02020a] text-cyan-400 font-mono p-6 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Cockpit HUD Header */}
      <header className="relative z-10 flex justify-between items-end border-b-2 border-cyan-900/50 pb-4 mb-10">
        <div>
          <p className="text-[10px] text-purple-500 font-black tracking-[0.3em]">SYSTEM: DREAMBOX OS v2.0</p>
          <h1 className="text-4xl font-black text-white italic">WELCOME, PILOT {pilotName}</h1>
        </div>
        <div className="text-right">
          <div className="inline-block px-3 py-1 bg-red-900/20 border border-red-500 text-red-500 text-[10px] animate-pulse">
            COMMUNICATION OFFLINE
          </div>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <div className="relative z-10 grid grid-cols-12 gap-6 opacity-40 pointer-events-none grayscale">
        {/* Missions / Subjects */}
        <div className="col-span-8 border-2 border-cyan-500/20 bg-cyan-900/5 p-8 rounded-3xl h-[400px]">
          <h3 className="text-yellow-400 text-xs font-black mb-6 uppercase">Active Missions</h3>
          <div className="flex items-center justify-center h-full border-2 border-dashed border-cyan-500/10 rounded-2xl">
            <p className="text-cyan-900">ENCRYPTION ACTIVE - ACCESS DENIED</p>
          </div>
        </div>

        {/* Performance Radar */}
        <div className="col-span-4 border-2 border-purple-500/20 bg-purple-900/5 p-8 rounded-3xl h-[400px]">
          <h3 className="text-purple-400 text-xs font-black mb-6 uppercase">Performance Radar</h3>
          <div className="w-32 h-32 rounded-full border-4 border-purple-500/10 mx-auto mt-10"></div>
        </div>
      </div>

      {/* The Payment Overlay (The "Next Step" for the User) */}
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
        <div className="bg-[#0a0a1a] border-2 border-yellow-400 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(250,204,21,0.2)] text-center max-w-sm">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
             <span className="text-2xl text-black">⚡</span>
          </div>
          <h2 className="text-white text-2xl font-black mb-4 uppercase italic">Activate Your Spaceship</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Your profile has been created. To begin your first mission and access the curriculum, 
            activate your ship's core systems.
          </p>
          <button className="w-full bg-purple-700 text-white py-4 rounded-2xl font-black text-lg hover:bg-purple-800 transition">
            INITIALIZE CORE (₦20k)
          </button>
          <p 
            className="text-gray-500 text-xs mt-4 cursor-pointer hover:text-gray-300 transition"
            onClick={() => navigator.clipboard.writeText('9066596603')}
          >
            * Or Pay Into: 9066596603 (Moniepoint) - Paatee Nig Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpaceshipDashboard;