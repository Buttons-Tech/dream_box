"use client";
import React, { useState, useEffect } from 'react';

export default function AdminCoordinator() {
  const [activeTab, setActiveTab] = useState<'assign' | 'users'>('assign');
  const [tutors, setTutors] = useState([]);
  const [students, setStudents] = useState([]);
  
  // State for the assignment form
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  const handleAssignment = async () => {
    const token = localStorage.getItem('dbx_token');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/assign-student`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify({ tutorId: selectedTutor, studentId: selectedStudent })
    });

    if (res.ok) alert("Student successfully assigned to Tutor!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-12">
        <span className="text-[10px] font-black uppercase tracking-widest text-purple-600">Control Center</span>
        <h1 className="text-4xl font-black italic uppercase text-gray-900">Dreambox <span className="text-purple-700">Admin</span></h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ASSIGNMENT TOOL */}
        <section className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-sm border border-purple-100">
          <h2 className="font-black uppercase italic text-xl mb-6">Coordinate Assignments</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Select Tutor</label>
              <select 
                onChange={(e) => setSelectedTutor(e.target.value)}
                className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none font-bold text-sm"
              >
                <option value="">Choose Faculty Member...</option>
                {/* Map your tutors here */}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Select Student</label>
              <select 
                onChange={(e) => setSelectedStudent(e.target.value)}
                className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none font-bold text-sm"
              >
                <option value="">Choose Student...</option>
                {/* Map your students here */}
              </select>
            </div>

            <button 
              onClick={handleAssignment}
              className="w-full bg-purple-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-purple-800 transition-all shadow-lg shadow-purple-100"
            >
              Link Student to Tutor
            </button>
          </div>
        </section>

        {/* QUICK STATS */}
        <aside className="space-y-4">
          <div className="bg-yellow-400 p-8 rounded-[2.5rem] text-purple-950">
            <p className="text-[10px] font-black uppercase">Pending Reports</p>
            <p className="text-5xl font-black italic">12</p>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-purple-100">
            <p className="text-[10px] font-black uppercase text-gray-400">Total Tutors</p>
            <p className="text-4xl font-black text-purple-700">24</p>
          </div>
        </aside>
      </div>
    </div>
  );
}