"use client";
import React, { useState, useEffect } from 'react';

interface User {
  _id: string;
  fullName: string;
  email: string;
}

export default function AdminCoordinator() {
  const [tutors, setTutors] = useState<User[]>([]);
  const [students, setStudents] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State for the assignment form
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [isAssigning, setIsAssigning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('dbx_token');
      try {
        // We call both endpoints at the same time
        const [tutorRes, studentRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/users?role=tutor`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/users?role=student`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        const tutorData = await tutorRes.json();
        const studentData = await studentRes.json();

        if (Array.isArray(tutorData)) setTutors(tutorData);
        if (Array.isArray(studentData)) setStudents(studentData);
      } catch (error) {
        console.error("Error fetching rosters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAssignment = async () => {
    if (!selectedTutor || !selectedStudent) {
      return alert("Please select both a tutor and a student.");
    }

    setIsAssigning(true);
    const token = localStorage.getItem('dbx_token');
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/assign-student`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ tutorId: selectedTutor, studentId: selectedStudent })
      });

      if (res.ok) {
        alert("Success: Student is now assigned to the Tutor!");
        setSelectedStudent(""); // Reset selection
      } else {
        alert("Failed to create link. Check backend logic.");
      }
    } catch (err) {
      alert("Network error." + err);
    } finally {
      setIsAssigning(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <header className="mb-12">
        <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          Admin Portal 2026
        </span>
        <h1 className="text-4xl md:text-5xl font-black italic uppercase text-gray-900 mt-2">
          Coordinator <span className="text-purple-700">Panel</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ASSIGNMENT CONTROL CARD */}
        <section className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-purple-900/5 border border-purple-50">
          <h2 className="font-black uppercase italic text-xl mb-8 text-gray-800">Assign Student to Faculty</h2>
          
          <div className="space-y-8">
            {/* TUTOR SELECTION */}
            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-3 ml-2">1. Select Academic Tutor</label>
              <select 
                value={selectedTutor}
                onChange={(e) => setSelectedTutor(e.target.value)}
                className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-purple-500 outline-none font-bold text-sm transition-all appearance-none"
              >
                <option value="">{loading ? "Loading Faculty..." : "Choose a Tutor..."}</option>
                {tutors.map((tutor) => (
                  <option key={tutor._id} value={tutor._id}>{tutor.fullName} ({tutor.email})</option>
                ))}
              </select>
            </div>

            {/* STUDENT SELECTION */}
            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-3 ml-2">2. Select Student</label>
              <select 
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
                className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-purple-500 outline-none font-bold text-sm transition-all appearance-none"
              >
                <option value="">{loading ? "Loading Students..." : "Choose a Student..."}</option>
                {students.map((student) => (
                  <option key={student._id} value={student._id}>{student.fullName}</option>
                ))}
              </select>
            </div>

            <button 
              onClick={handleAssignment}
              disabled={isAssigning || loading}
              className="w-full bg-purple-700 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-purple-800 transition-all shadow-lg shadow-purple-200 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isAssigning ? "Processing Link..." : "Confirm Assignment"}
            </button>
          </div>
        </section>

        {/* ROSTER OVERVIEW (SIDEBAR) */}
        <aside className="space-y-6">
          <div className="bg-purple-900 p-8 rounded-[2.5rem] text-white shadow-lg">
            <h3 className="text-[10px] font-black uppercase opacity-60 mb-4">Quick Stats</h3>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-4xl font-black italic">{tutors.length}</p>
                <p className="text-[9px] font-bold uppercase">Tutors</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-black italic">{students.length}</p>
                <p className="text-[9px] font-bold uppercase">Students</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400 p-8 rounded-[2.5rem] text-purple-950 shadow-lg">
            <h3 className="text-[10px] font-black uppercase opacity-80 mb-2">Notice</h3>
            <p className="text-sm font-bold leading-tight">
              Assignments made here instantly update the Tutor&apos;s dropdown roster.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}