"use client";
import React, { useEffect, useState } from 'react';
import ReportModal from '@/app/Components/ReportModal';

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

interface Student {
  _id: string;
  fullName: string;
}

// --- HELPER COMPONENTS (Defined before the main component to avoid "not found" errors) ---

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

// --- MAIN COMPONENT ---
export default function TutorDashboard() {
  const [tutorData, setTutorData] = useState<TutorData | null>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string>("");

  useEffect(() => {
    const userJson = localStorage.getItem('dbx_user');
    const token = localStorage.getItem('dbx_token');

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

    const fetchStudents = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutor/students`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (Array.isArray(data)) setStudents(data);
      } catch (err) {
        console.error("Could not load students:", err);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 space-y-8">
        
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
          <div className="absolute right-0 bottom-0 opacity-10 text-9xl font-black italic -mb-10 -mr-10 select-none">
            FACULTY
          </div> 
        </section>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatTile label="Active Classes" value="4" color="text-emerald-600" />
          <StatTile label="Assigned Students" value={students.length.toString()} color="text-blue-600" />
          <StatTile label="Hours Logged" value="24h" color="text-purple-600" />
          <StatTile label="Resources" value="18" color="text-orange-600" />
        </div>

        <section className="bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
            Live Lab Schedule
          </h2>
          <div className="space-y-4">
            <SessionCard title="IGCSE English Masterclass" time="Today • 4:00 PM" students="8" />
            <SessionCard title="Introduction to Robotics" time="Tomorrow • 10:00 AM" students="5" />
          </div>
        </section>

        <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                Academic Progress Reports
              </h2>
              <p className="text-gray-900 font-bold text-sm mt-1">Manage student evolution and feedback.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              <select 
                value={selectedStudentId}
                onChange={(e) => setSelectedStudentId(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-900 text-xs rounded-xl block p-4 font-bold outline-none"
              >
                <option value="">Select a Student</option>
                {students.map((s) => (
                  <option key={s._id} value={s._id}>{s.fullName}</option>
                ))}
              </select>

              <button 
                disabled={!selectedStudentId}
                onClick={() => setIsReportModalOpen(true)}
                className={`w-full md:w-auto px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 ${
                  selectedStudentId ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <span className="text-lg">+</span> Create New Report
              </button>
            </div>
          </div>
        </section>
      </div>

      <ReportModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
        studentId={selectedStudentId} 
      />
    </div>
  );
}