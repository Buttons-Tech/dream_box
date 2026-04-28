"use client";
import React, { useEffect, useState } from 'react';

interface Student { _id: string; fullName: string; }
interface ClubData {
  schoolName: string;
  subject: string;
  schedule: string;
  tutorName?: string;
  status: 'pending' | 'assigned';
}

export default function SchoolAdminDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [club, setClub] = useState<ClubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      // 1. Get the logged-in admin from localStorage
      const userJson = localStorage.getItem('dbx_user');
      if (!userJson) return;
      const user = JSON.parse(userJson);

      try {
        // 2. Fetch Club Details (Subject, Schedule, Tutor)
        const clubRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clubs/admin/${user._id}`);
        const clubData = await clubRes.json();
        setClub(clubData);

        // 3. Fetch Student Roster using the school name from the club data
        const rosterRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/school/${clubData.schoolName}`);
        const rosterData = await rosterRes.json();
        setStudents(rosterData);
      } catch (error) {
        console.error("Database fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleRequestTutor = async () => {
    // This sends the request for the specific club ID
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clubs/request-tutor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schoolName: club?.schoolName })
    });
    if (res.ok) alert("Request sent to Dreambox Admin!");
  };

  if (loading) return <div className="p-20 text-center font-black uppercase text-gray-300 animate-pulse">Syncing with Lab...</div>;

  return (
    <div className="w-full min-h-screen bg-white pb-32">
      <div className="max-w-7xl mx-auto px-4 pt-8 space-y-6">
        
        {/* DYNAMIC SCHOOL HEADER */}
        <section className="bg-[#431407] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">Partner Institution</span>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase mt-2">
              {club?.schoolName || "Loading..."}
            </h1>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase border border-white/10 italic">
                {club?.subject || 'STEM Club'}
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase border border-white/10">
                {club?.schedule || 'Flexible Schedule'}
              </span>
            </div>
          </div>
        </section>

        {/* DYNAMIC TUTOR STATUS */}
        <section className="bg-white rounded-[2.5rem] p-8 border-2 border-dashed border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${club?.status === 'assigned' ? 'bg-emerald-100' : 'bg-orange-100'}`}>
              {club?.status === 'assigned' ? '✅' : '⏳'}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-gray-400">Current Instructor</p>
              <h3 className="font-black text-gray-900 uppercase italic">
                {club?.status === 'assigned' ? `Assigned: ${club?.tutorName}` : 'Awaiting Assignment'}
              </h3>
            </div>
          </div>
          
          {club?.status !== 'assigned' && (
            <button 
              onClick={handleRequestTutor}
              className="w-full md:w-auto bg-gray-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-colors"
            >
              Request Assigned Tutor
            </button>
          )}
        </section>

        {/* DYNAMIC ROSTER MANAGEMENT */}
        <section className="bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">Registered Students ({students.length})</h2>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-100">
              + Register Child
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.length > 0 ? (
              students.map(s => (
                <div key={s._id} className="p-5 bg-white rounded-2xl border border-gray-100 font-bold text-sm text-gray-800 uppercase italic flex justify-between items-center">
                  {s.fullName}
                  <span className="text-emerald-500">✓</span>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] bg-white rounded-[2rem] border-2 border-dashed border-gray-100">
                Your roster is empty. <br /> Start adding children for the new term.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}