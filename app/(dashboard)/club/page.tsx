"use client";
import React, { useEffect, useState } from 'react';

interface Student { _id: string; fullName: string; }

export default function SchoolAdminDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [tutorStatus, setTutorStatus] = useState<'pending' | 'assigned'>('pending');
  const [assignedTutor, setAssignedTutor] = useState<string | null>(null);
  const schoolName = "Little Treasures"; 

  const handleRequestTutor = async () => {
    // POST to /clubs/request-tutor
    alert("Request sent to Dreambox Admin. We will assign a top-tier tutor shortly.");
  };

  return (
    <div className="w-full min-h-screen bg-white pb-32">
      <div className="max-w-7xl mx-auto px-4 pt-8 space-y-6">
        
        {/* SCHOOL HEADER */}
        <section className="bg-[#431407] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">Partner Institution</span>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase mt-2">{schoolName}</h1>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase border border-white/10">Leggo Club</span>
              <span className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase border border-white/10">Thursdays</span>
            </div>
          </div>
        </section>

        {/* TUTOR ASSIGNMENT STATUS */}
        <section className="bg-white rounded-[2.5rem] p-8 border-2 border-dashed border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${tutorStatus === 'assigned' ? 'bg-emerald-100' : 'bg-orange-100'}`}>
              {tutorStatus === 'assigned' ? '✅' : '⏳'}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-gray-400">Tutor Status</p>
              <h3 className="font-black text-gray-900 uppercase italic">
                {tutorStatus === 'assigned' ? `Assigned: ${assignedTutor}` : 'Awaiting Assignment'}
              </h3>
            </div>
          </div>
          
          {tutorStatus === 'pending' && (
            <button 
              onClick={handleRequestTutor}
              className="w-full md:w-auto bg-gray-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-colors"
            >
              Request New Tutor
            </button>
          )}
        </section>

        {/* ROSTER MANAGEMENT */}
        <section className="bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">Student Roster</h2>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest">+ Add Child</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.length > 0 ? (
              students.map(s => (
                <div key={s._id} className="p-4 bg-white rounded-2xl border border-gray-100 font-bold text-sm text-gray-800 uppercase italic">
                  {s.fullName}
                </div>
              ))
            ) : (
              <div className="col-span-full py-10 text-center text-gray-400 text-xs font-bold uppercase tracking-widest bg-white rounded-3xl border-2 border-dashed border-gray-100">
                Register children to build your club roster
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}