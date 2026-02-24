"use client";
import React, { useEffect, useState } from 'react';
import { CheckCircle, Zap, Code, BookOpen, Brain, Star } from 'lucide-react';

interface Tutor {
  _id: string;
  firstName: string;
  lastName: string;
  expertise: string[];
  bio: string;
  hourlyRate: number;
}

const SUBJECTS = ["All", "Coding", "Python", "C++", "Javascript", "Maths", "English", "Special Needs"];

export default function PublicTutorDirectory() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [activeSubject, setActiveSubject] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await fetch('/api/tutors?status=approved');
        const data = await res.json();
        setTutors(data);
      } catch (error: unknown) {
        console.error("Error fetching tutors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);

  const filteredTutors = tutors.filter(t => 
    activeSubject === "All" || t.expertise.some(skill => skill === activeSubject)
  );

  return (
    <div className="min-h-screen bg-[#FDFCFE] p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Subject Toggle */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
            Find an Expert <span className="text-[#6347D1]">Mentor</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 bg-white p-3 rounded-[2.5rem] shadow-xl border border-slate-100 inline-flex mx-auto">
            {SUBJECTS.map((subject) => (
              <button
                key={subject}
                onClick={() => setActiveSubject(subject)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeSubject === subject 
                  ? "bg-[#6347D1] text-white shadow-lg scale-105" 
                  : "bg-transparent text-slate-500 hover:bg-slate-50"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </header>

        {loading ? (
          <div className="text-center font-bold text-slate-400 animate-pulse">Scanning our network of experts...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutors.map((tutor) => (
              <div key={tutor._id} className="bg-white rounded-[3rem] p-8 shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-[#6347D1]">
                    {tutor.expertise.includes("Coding") ? <Code size={32} /> : <BookOpen size={32} />}
                  </div>
                  <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1">
                    <CheckCircle size={12} /> Verified Expert
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-800 mb-2">
                  {tutor.firstName} {tutor.lastName[0]}.
                </h3>

                <div className="flex gap-2 mb-6 flex-wrap">
                  {tutor.expertise.map((skill, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded-md uppercase">
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-slate-500 text-sm mb-8 leading-relaxed italic">
                  &ldquo;Passionate about teaching {tutor.expertise[0]} and helping students achieve their academic goals through personalized mentorship.&rdquo;
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Hourly Rate</p>
                    <span className="text-2xl font-black text-slate-900">₦{tutor.hourlyRate?.toLocaleString() || "15,000"}</span>
                  </div>
                  <button 
                    onClick={() => window.location.href = `/signup/parent?tutor=${tutor._id}`}
                    className="bg-[#6347D1] text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-[#523bb3] transition-all shadow-lg shadow-purple-100"
                  >
                    Select Mentor
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredTutors.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] shadow-inner border border-dashed border-slate-200">
            <Brain size={48} className="mx-auto text-slate-300 mb-4" />
            <p className="text-slate-500 font-bold text-xl">We are currently onboarding {activeSubject} tutors.</p>
            <p className="text-slate-400 text-sm">Check back in 24 hours or contact support.</p>
          </div>
        )}
      </div>
    </div>
  );
}