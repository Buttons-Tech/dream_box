"use client";
import React, { useEffect, useState } from 'react';
import ReportModal from '@/app/Components/ReportModal'; // Ensure you have this file in your components folder

// --- TYPESCRIPT INTERFACES ---
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

// --- MAIN COMPONENT ---
export default function TutorDashboard() {
  const [tutorData, setTutorData] = useState<TutorData | null>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  useEffect(() => {
    // Sync UI with the logged-in user data
    const userJson = localStorage.getItem('dbx_user');
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        setTutorData({
          fullName: user.fullName || "Faculty Member",
          specialization: user.specialization || "IGCSE Specialist"
        });
      } catch (e) {
        console.error("Sync Error:", e);
      }
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 space-y-8">
        
        {/* HERO: The Faculty Banner */}
        <section className="bg-emerald-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-emerald-200/50">
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
              Academic Faculty 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase mt-2 leading-[0.9]">
              Welcome, Prof. <br />
              <span className="text-yellow-400">
                {tutorData?.fullName?.split(' ')[0] || 'Tutor'}
              </span>
            </h1>
            <p className="mt-6 text-emerald-100 max-w-md font-medium text-sm md:text-base border-l-2 border-emerald-500 pl-4">
              Currently Leading: <span className="font-bold text-white">{tutorData?.specialization}</span>
            </p>
          </div>
          {/* Decorative background text */}
          <div className="absolute right-0 bottom-0 opacity-10 text-9xl font-black italic -mb-10 -mr-10 select-none">
            FACULTY
          </div>
        </section>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatTile label="Active Classes" value="4" color="text-emerald-600" />
          <StatTile label="Assigned Students" value="12" color="text-blue-600" />
          <StatTile label="Hours Logged" value="24h" color="text-purple-600" />
          <StatTile label="Resources" value="18" color="text-orange-600" />
        </div>

        {/* UPCOMING SESSIONS */}
        <section className="bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
            Live Lab Schedule
          </h2>
          <div className="space-y-4">
            <SessionCard title="IGCSE English Masterclass" time="Today • 4:00 PM" students="8" />
            <SessionCard title="Introduction to Robotics" time="Tomorrow • 10:00 AM" students="5" />
          </div>
        </section>

        {/* REPORTS SECTION */}
        <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                Academic Progress Reports
              </h2>
              <p className="text-gray-900 font-bold text-sm mt-1">Manage student evolution and feedback.</p>
            </div>
            <button 
              onClick={() => setIsReportModalOpen(true)}
              className="w-full md:w-auto bg-emerald-600 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-2"
            >
              <span className="text-lg">+</span> Create New Report
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Example Report Card */}
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[8px] font-black text-emerald-600 uppercase bg-white px-2 py-1 rounded-md border border-emerald-100">
                Published
              </span>
              <p className="text-[9px] font-black text-emerald-700 uppercase tracking-widest">Monthly Evaluation</p>
              <h4 className="font-black text-gray-900 mt-2 text-lg italic uppercase">Student: Adaugo (IGCSE Prep)</h4>
              <p className="text-xs text-gray-600 mt-3 line-clamp-3 leading-relaxed font-medium">
                &quot;Subject is showing remarkable improvement in literary analysis. We are focusing on structured essay writing and critical evaluation of themes.&quot;
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-200"></div>
                <span className="text-[10px] font-black text-emerald-800 uppercase">View Details</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* MODAL COMPONENT */}
      <ReportModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
        studentId="sample-id" // This would be dynamic based on your selection
      />
    </div>
  );
}

// --- HELPER COMPONENTS ---

function StatTile({ label, value, color }: StatTileProps) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 group-hover:text-emerald-500 transition-colors">
        {label}
      </p>
      <p className={`text-2xl md:text-3xl font-black uppercase truncate ${color}`}>
        {value}
      </p>
    </div>
  );
}

function SessionCard({ title, time, students }: SessionCardProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-3xl border-2 border-transparent hover:border-emerald-500 shadow-sm hover:shadow-md transition-all gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-xl">
          📖
        </div>
        <div>
          <h3 className="font-black text-gray-900 uppercase text-sm tracking-tight">{title}</h3>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{time}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
          {students} Enrolled
        </span>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
          Enter Lab
        </button>
      </div>
    </div>
  );
}