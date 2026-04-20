"use client";
import React, { useEffect, useState } from 'react';

// 1. Define the Blueprint (No more 'any' errors)
interface TutorData {
  fullName: string;
  specialization: string;
}

interface StatTileProps {
  label: string;
  value: string;
  color: string;
}

interface SessionCardProps {
  title: string;
  time: string;
  students: string;
}

export default function TutorDashboard() {
  const [tutorData, setTutorData] = useState<TutorData | null>(null);

  useEffect(() => {
    // 2. Actually using useEffect to sync the UI with the DB
    const userJson = localStorage.getItem('dbx_user');
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        setTutorData({
          fullName: user.fullName,
          specialization: user.specialization || "General Faculty"
        });
      } catch (e) {
        console.error("Tutor Sync Error:", e);
      }
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 pb-20 space-y-8">
      {/* HERO: The Faculty Banner */}
      <section className="bg-emerald-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Faculty Member</span>
           <h1 className="text-4xl md:text-5xl font-black italic uppercase mt-2">
             Welcome, Prof. <span className="text-yellow-400">{tutorData?.fullName?.split(' ')[0] || 'Tutor'}</span>
           </h1>
           <p className="mt-4 text-emerald-100 max-w-md font-medium">
             Your specialized track: <span className="font-bold underline">{tutorData?.specialization}</span>
           </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 text-9xl font-black italic -mb-10 -mr-10">FACULTY</div>
      </section>

      {/* STATS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatTile label="Active Classes" value="4" color="text-emerald-600" />
        <StatTile label="Assigned Students" value="12" color="text-blue-600" />
        <StatTile label="Hours Logged" value="24h" color="text-purple-600" />
        <StatTile label="Resources" value="18" color="text-orange-600" />
      </div>

      {/* SESSIONS FEED */}
      <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
        <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Upcoming Sessions</h2>
        <div className="space-y-4">
          <SessionCard title="IGCSE English Masterclass" time="Today • 4:00 PM" students="8" />
          <SessionCard title="Introduction to Robotics" time="Tomorrow • 10:00 AM" students="5" />
        </div>
      </section>
    </div>
  );
}

// Helper Components with Strict Types
function StatTile({ label, value, color }: StatTileProps) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-xl font-black uppercase truncate ${color}`}>{value}</p>
    </div>
  );
}

function SessionCard({ title, time, students }: SessionCardProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-emerald-400 transition-all cursor-pointer gap-4">
      <div>
        <h3 className="font-black text-gray-800 uppercase text-sm tracking-tight">{title}</h3>
        <p className="text-xs font-bold text-gray-500 mt-1">{time}</p>
      </div>
      <div className="text-left md:text-right">
        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">
          {students} Students
        </span>
      </div>
    </div>
  );
}