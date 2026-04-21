"use client";
import React from 'react';
// import Image from 'next/image';

// TypeScript Interfaces to prevent build errors
interface StatProps {
  label: string;
  score: number;
  total: number;
  color: string;
}

interface VictoriaReport {
  fullName: string;
  subject: string;
  month: string;
  ageGroup: string;
  scores: {
    quiz: number;
    practical: number;
    presentation: number;
  };
  focus: string[];
  projects: { name: string; type: string; icon: string }[];
  remarks: string;
  futurePath: string;
}

const VictoriaReportPage = () => {
  const report: VictoriaReport = {
    fullName: "Victoria",
    subject: "Game Design & AI Exploration",
    month: "MARCH 2026",
    ageGroup: "Junior Creator",
    scores: {
      quiz: 7,
      practical: 8,
      presentation: 5
    },
    focus: [
      "Character Concept Art",
      "Emotional Storytelling",
      "AI Asset Generation",
      "Color Theory & UI",
      "Visual Programming",
      "Creative Planning"
    ],
    projects: [
      { name: "Avatar Creator", type: "Character Design", icon: "🎭" },
      { name: "AI Dreamscape", type: "Environment", icon: "☁️" },
      { name: "Mood-Based Game", type: "Logic", icon: "🌈" }
    ],
    remarks: "Victoria is a deeply intuitive and emotional learner. She excels when she connects personally with the material. We prioritize her mood and creative flow during sessions, which has led to beautiful character designs and original concepts.",
    futurePath: "To reach the next level, we are integrating more AI-driven coding projects. This will help Victoria bridge the gap between her love for design and technical execution."
  };

  return (
    <div className="min-h-screen bg-[#0a0510] text-white p-6 md:p-12 font-sans selection:bg-pink-500">
      
      {/* --- CREATIVE HEADER --- */}
      <div className="max-w-5xl mx-auto flex justify-between items-end mb-12 border-b border-pink-500/20 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-pink-500 rounded-full animate-ping"></span>
            <h1 className="text-[10px] font-black text-pink-400 uppercase tracking-[0.4em]">Creative Intelligence Report</h1>
          </div>
          <h2 className="text-5xl font-black italic tracking-tighter uppercase">
            VICTORIA<span className="text-pink-500 font-light text-3xl">.studio</span>
          </h2>
        </div>
        <div className="text-right hidden md:block">
           <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Dreambox Junior Academy</p>
           <p className="font-bold text-sm italic text-gray-300">{report.month}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT: DESIGNER BIO --- */}
        <div className="space-y-6">
          <div className="p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-[2.5rem] border border-white/5 backdrop-blur-xl text-center">
             <div className="w-24 h-24 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-3xl mx-auto mb-6 flex items-center justify-center text-5xl shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                🎨
             </div>
             <h3 className="text-2xl font-black italic uppercase tracking-tight">{report.fullName}</h3>
             <p className="text-pink-400 text-[10px] font-bold uppercase mt-2">Specialization: Character Art & AI</p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <StatBox label="Quiz" score={report.scores.quiz} total={10} color="bg-pink-500" />
            <StatBox label="Design" score={report.scores.practical} total={10} color="bg-purple-500" />
            <StatBox label="Talk" score={report.scores.presentation} total={10} color="bg-orange-500" />
          </div>
        </div>

        {/* --- RIGHT: CREATIVE JOURNEY --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* REMARKS SECTION */}
          <div className="p-8 bg-white/5 rounded-[2.5rem] border-l-4 border-pink-500">
             <h4 className="text-[10px] font-black text-pink-400 uppercase mb-4 tracking-widest italic">The Emotional Connection</h4>
             <p className="text-gray-300 leading-relaxed italic text-lg font-light">
               &quot;{report.remarks}&quot;
             </p>
          </div>

          {/* DUAL GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SKILLS BOX */}
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase mb-4 tracking-widest">Mastered Tools</h4>
              <div className="flex flex-wrap gap-2">
                {report.focus.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-pink-200 border border-white/10 italic">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* FUTURE FOCUS */}
            <div className="p-6 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-3xl border border-pink-500/20">
               <h4 className="text-[10px] font-bold text-pink-400 uppercase mb-4 tracking-widest">Future Phase: AI Integration</h4>
               <p className="text-xs text-gray-400 leading-relaxed">
                 {report.futurePath}
               </p>
            </div>
          </div>

          {/* PROJECT SHOWCASE */}
          <div className="pt-6">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase mb-6 tracking-widest text-center italic">Project Portfolio</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {report.projects.map((p, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-[2rem] border border-white/5 text-center group hover:bg-pink-500/5 transition duration-500">
                   <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-500">{p.icon}</div>
                   <h5 className="text-xs font-black uppercase text-pink-300 mb-1">{p.name}</h5>
                   <p className="text-[9px] text-gray-500 font-mono italic">{p.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center mt-12 py-6 border-t border-white/5">
         <p className="text-[9px] text-gray-700 font-mono uppercase tracking-[0.5em]">Victoria.Studio System | Powered by Dreambox AI</p>
      </div>
    </div>
  );
};

// Simplified StatBox for Victoria's cleaner look
const StatBox = ({ label, score, total, color }: StatProps) => (
  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
    <p className="text-[9px] font-black text-gray-500 uppercase mb-2">{label}</p>
    <div className="text-xl font-black italic">{score}<span className="text-[10px] opacity-40">/{total}</span></div>
    <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
       <div className={`h-full ${color}`} style={{ width: `${(score/total)*100}%` }}></div>
    </div>
  </div>
);

export default VictoriaReportPage;