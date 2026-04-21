"use client";
import React from 'react';
import Image from 'next/image';

interface StatProps {
  label: string;
  score: number;
  total: number;
  color: string;
  text: string;
}

const DreamboxReportPage = () => {
  // Mock data based on your notes for Victor
  const report = {
    fullName: "Victor Bosco",
    subject: "Coding Academy",
    month: "MARCH 2026",
    schedule: "Tue & Thu (9pm - 9:45pm)",
    favCharacter: "Iron Man",
    platform: "Scratch & Code.org",
    // We can show progress bars for scores (out of 10)
    scores: {
      quiz: 9,
      practical: 6,
      presentation: 10
    },
    // Mastered Skills List
    skills: [
      "Loops (Temporary, Permanent)",
      "Events & Logic",
      "If/Else Statements",
      "Sensing (Color, Sprite)",
      "Game Design Fundamentals",
      "Broadcast Messages"
    ],
    // Completed Projects (With actual placeholders)
    projects: [
      { name: "Virtual Town", icon: "🏙️", img: "/projects/town.jpeg" },
      { name: "Music Game", icon: "🎹", img: "/projects/music.png" },
      { name: "Coin Collector", icon: "🪙", img: "/projects/coin.jpg" }
    ],
    // The comments from the tutor
    comments: {
      main: "Victor showed a positive attitude all through this month. He completed all tasks successfully and showed great creativity when designing his games. He demonstrated strong conceptual knowledge and independent thinking.",
      toDo: "He would be taught to ask better questions and come up with intelligent guesses.",
    }
  };

  return (
    <div className="min-h-screen bg-[#02020a] text-white p-6 font-sans selection:bg-red-500">
      
      {/* --- HUD HEADER --- */}
      <div className="flex justify-between items-center mb-10 border-b border-red-500/20 pb-6">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
            DREAMBOX<span className="text-red-600 font-light"> REPORT</span>
          </h1>
          <p className="text-[10px] font-mono text-red-400 uppercase tracking-[0.3em]">Issue 003 | Authorization: Stark-Industries-Cleared</p>
        </div>
        <div className="text-right flex items-center gap-4">
           <Image src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="Overlay" width={50} height={50} className="opacity-10" />
           <div className="bg-red-600 p-2 rounded-xl text-3xl shadow-[0_0_20px_red]">🧑‍🚀</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* --- PILOT SUMMARY BOX --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-red-900/40 via-transparent to-transparent rounded-[3rem] border-2 border-dashed border-red-500/20 backdrop-blur-sm relative overflow-hidden">
          {/* Iron Man Context */}
          <div className="space-y-3">
             <span className="text-xs bg-red-600 text-white font-black px-4 py-1 rounded-full animate-pulse shadow-[0_0_10px_red] uppercase tracking-wider">Avenger Class: A-1</span>
             <h2 className="text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-white">{report.fullName.split(' ')[0]}</h2>
             <p className="text-gray-400 text-sm font-mono tracking-wide">{report.subject} | {report.schedule}</p>
          </div>
          
          {/* Circular Stats (Mockup with clean Tailwind) */}
          <div className="flex justify-around md:col-span-2 items-center text-center">
            <StatCircle label="Quiz" score={report.scores.quiz} total={10} color="border-cyan-400" text="text-cyan-400" />
            <StatCircle label="Practical" score={report.scores.practical} total={10} color="border-purple-400" text="text-purple-400" />
            <StatCircle label="Speech" score={report.scores.presentation} total={10} color="border-yellow-400" text="text-yellow-400" />
          </div>
          
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        </div>

        {/* --- DUAL GRID (Skills & Comms) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT: MASTERED SKILLS */}
          <div className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 space-y-5">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">Mastered Skills Matrix</h3>
            <div className="space-y-3">
              {report.skills.map((skill, i) => (
                <div key={i} className="p-4 bg-gray-950 border border-white/5 rounded-2xl text-xs font-mono text-cyan-400 flex items-center justify-between">
                   <span>{skill}</span>
                   <span className="text-xs opacity-50">#verified</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: TUTOR COMMENTS */}
          <div className="space-y-6">
            <div className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 border-l-4 border-l-red-500">
               <h3 className="text-xs font-bold text-red-400 uppercase mb-4 tracking-[0.3em]">{`Commander's Remarks`}</h3>
               <p className="text-sm text-gray-300 leading-relaxed italic">&quot;{report.comments.main}&quot;</p>
            </div>
            <div className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 border-l-4 border-l-yellow-500">
               <h3 className="text-xs font-bold text-yellow-500 uppercase mb-4 tracking-[0.3em]">Next Phase Objectives</h3>
               <p className="text-sm text-gray-300 leading-relaxed italic">&quot;{report.comments.toDo}&quot;</p>
            </div>
          </div>
        </div>

        {/* --- COMPLETED PROJECTS (The Visual Part) --- */}
        <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5">
           <h3 className="text-xs font-bold text-gray-500 uppercase mb-6 tracking-[0.3em] text-center">Completed Mission Projects</h3>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             {report.projects.map((p, i) => (
                <div key={i} className="group relative aspect-[4/3] rounded-[2rem] border border-white/10 overflow-hidden bg-gray-950 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition duration-500">
                    {/* Placeholder for real project screenshot */}
                    <Image 
                      src={p.img} // Replace with actual project images
                      alt={p.name}
                      fill
                      className="object-cover opacity-60 group-hover:scale-110 transition duration-1000 group-hover:opacity-100"
                    />
                    
                    {/* Project Label Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black to-transparent flex items-center gap-3">
                        <span className="text-2xl">{p.icon}</span>
                        <div>
                           <span className="text-[10px] text-gray-400 uppercase font-mono tracking-widest">Project 0{i+1}</span>
                           <h4 className="text-sm font-black italic uppercase text-red-400">{p.name}</h4>
                        </div>
                    </div>
                </div>
             ))}
           </div>
        </div>
        
        {/* FOOTER */}
        <div className="p-6 text-center border-t border-white/5 mt-16">
            <p className="text-[10px] text-gray-700 font-mono uppercase tracking-[0.6em]">This is an authentic Dreambox OS Performance Record | Verify at hq.dreambox.com</p>
        </div>

      </div>
    </div>
  );
};

// Sub-component for clean status circles
function StatCircle({ label, score, total, color, text }: StatProps) {
  // const percentage = (score / total) * 100;
  return (
    <div className="space-y-3">
        <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center relative ${color}`}>
            <span className="text-3xl font-black italic">{score}<span className="text-xs text-gray-500">/{total}</span></span>
            {/* Simple visual completion circle using SVG could go here later */}
        </div>
        <p className={`text-[10px] font-black uppercase tracking-widest ${text}`}>{label}</p>
    </div>
  );
}

export default DreamboxReportPage;