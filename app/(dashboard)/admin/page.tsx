"use client";
import React, { useState, useEffect } from 'react';

// --- INTERFACES ---
interface User {
  _id: string;
  fullName: string;
  email: string;
  status?: string; 
  paymentDate?: string;
}

export default function AdminDashboard() {
  const [adminName, setAdminName] = useState("Admin");
  const [tutors, setTutors] = useState<User[]>([]);
  const [students, setStudents] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Financial Constant
  const MONTHLY_FEE = 100000; 

  // Assignment State
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [isAssigning, setIsAssigning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('dbx_token');
      const userJson = localStorage.getItem('dbx_user');
      
      if (userJson) setAdminName(JSON.parse(userJson).fullName || "Administrator");

      try {
        const [tutorRes, studentRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/users?role=tutor`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/users?role=student`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        setTutors(await tutorRes.json());
        setStudents(await studentRes.json());
      } catch (error) {
        console.error("Data Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Calculation for the co-founder's favorite tab
  const totalIncome = students.length * MONTHLY_FEE;

  return (
    <div className="min-h-screen bg-[#FDFCFE] pb-20">
      {/* 1. HEADER & REVENUE PILLS */}
      <header className="bg-white border-b border-purple-50 px-6 py-10 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500">Finance & Operations</span>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase text-gray-900 leading-tight">
                Welcome, <br />
                <span className="text-purple-700">{adminName.split(' ')[0]}</span>
              </h1>
            </div>

            {/* INCOME GENERATED TAB (The Co-founder's Feature) */}
            <div className="bg-purple-700 p-6 rounded-[2rem] text-white shadow-2xl shadow-purple-200 min-w-[280px]">
              <p className="text-[9px] font-black uppercase tracking-widest opacity-70">Total Monthly Income</p>
              <p className="text-4xl font-black italic mt-1">
                ₦{totalIncome.toLocaleString()}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-[9px] font-bold uppercase tracking-tighter">Live from {students.length} Students</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <StatPill label="Tutors" value={tutors.length} color="bg-gray-50 text-gray-700" />
            <StatPill label="Fee Per Child" value="₦100k" color="bg-yellow-50 text-yellow-700" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-12 space-y-12">
        
        {/* 2. ASSIGNMENT SPACE */}
        <section className="bg-purple-900 rounded-[3rem] p-8 md:p-12 text-white">
          <h2 className="text-2xl font-black italic uppercase mb-8">Tutor Coordination</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <select 
              value={selectedTutor}
              onChange={(e) => setSelectedTutor(e.target.value)}
              className="bg-purple-800 rounded-2xl p-4 font-bold text-sm text-white outline-none"
            >
              <option value="">Select Tutor...</option>
              {tutors.map(t => <option key={t._id} value={t._id}>{t.fullName}</option>)}
            </select>
            <select 
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="bg-purple-800 rounded-2xl p-4 font-bold text-sm text-white outline-none"
            >
              <option value="">Select Student...</option>
              {students.map(s => <option key={s._id} value={s._id}>{s.fullName}</option>)}
            </select>
            <button 
              onClick={() => {/* handleAssignment logic */}}
              className="bg-yellow-400 text-purple-950 p-4 rounded-2xl font-black uppercase text-[10px] tracking-widest"
            >
              Link Now
            </button>
          </div>
        </section>

        {/* 3. STUDENT REGISTRY WITH FINANCIALS */}
        <section>
          <h2 className="text-xl font-black italic uppercase text-gray-900 mb-6">Student Roster & Accounts</h2>
          <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-6 text-[9px] font-black uppercase text-gray-400 tracking-widest">Student</th>
                  <th className="p-6 text-[9px] font-black uppercase text-gray-400 tracking-widest">Monthly Contribution</th>
                  <th className="p-6 text-[9px] font-black uppercase text-gray-400 tracking-widest">Status</th>
                  <th className="p-6 text-[9px] font-black uppercase text-gray-400 tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {students.map((student) => (
                  <tr key={student._id} className="hover:bg-purple-50/30 transition-colors">
                    <td className="p-6">
                      <p className="font-black text-gray-900 text-sm italic uppercase">{student.fullName}</p>
                      <p className="text-[10px] font-bold text-gray-400">{student.email}</p>
                    </td>
                    <td className="p-6 font-black text-purple-700 text-sm">
                      ₦{MONTHLY_FEE.toLocaleString()}
                    </td>
                    <td className="p-6">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[9px] font-black uppercase">
                        Current
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <button className="text-[10px] font-black text-gray-400 hover:text-purple-700 uppercase">View Ledger</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatPill({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className={`${color} px-4 py-2 rounded-full flex items-center gap-2 border border-current`}>
      <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
      <span className="text-sm font-black italic">{value}</span>
    </div>
  );
}