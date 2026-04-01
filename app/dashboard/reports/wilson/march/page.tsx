"use client";
import React from 'react';

// Define the blueprint for the data to avoid TypeScript errors
interface StatProps {
  label: string;
  score: string;
  color: string;
}
interface WilsonReport {
  fullName: string;
  subject: string;
  curriculum: string;
  month: string;
  skills: string[]; // <--- THIS WAS MISSING
  summary: string;
  nextSteps: string;
  metrics: {
    consistency: string;
    curiosity: string;
    engagement: string;
  };
}

const WilsonReportPage = () => {
  const report : WilsonReport= {
    fullName: "Wilson",
    subject: "Mathematics (Year 8)",
    curriculum: "UK National Curriculum",
    month: "MARCH 2026",
    skills: [
      "Fundamental Concept Breakdown",
      "Multi-method Problem Solving",
      "Advanced Algebraic Equations",
      "Intelligent Inquiry & Logic",
      "Independent Study Discipline"
    ],
    summary: "Wilson has been exceptionally consistent in his grades, which is a direct reflection of his hard work. He has a unique ability to break down complex concepts to understand their fundamentals. He is currently working ahead of his school year group.",
    nextSteps: "As Wilson moves into his upcoming test phase, we are focusing on speed and accuracy under exam conditions. We wish him the best of luck!",
    metrics: {
      consistency: "Excellent",
      curiosity: "High",
      engagement: "Superior"
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 p-6 md:p-12 font-sans selection:bg-blue-100">
      
      {/* --- ACADEMIC HEADER --- */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b-2 border-slate-200 pb-8">
        <div>
          <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-2">Academic Performance Record</h1>
          <h2 className="text-4xl font-light text-slate-900">DREAMBOX<span className="font-bold">EDUCATION</span></h2>
        </div>
        <div className="mt-4 md:mt-0 px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-bold tracking-widest uppercase">
          Status: Advanced Tier
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* --- LEFT: STUDENT PROFILE --- */}
        <div className="space-y-8">
          <div className="p-8 bg-white shadow-sm border border-slate-100 rounded-[2rem]">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 font-serif italic">
              W
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{report.fullName}</h3>
            <p className="text-slate-500 text-sm mb-6">{report.subject}</p>
            <div className="pt-6 border-t border-slate-100 space-y-4">
               <div>
                 <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Region</p>
                 <p className="text-sm font-medium">United Kingdom (Year 8)</p>
               </div>
               <div>
                 <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Reporting Period</p>
                 <p className="text-sm font-medium">{report.month}</p>
               </div>
            </div>
          </div>

          <div className="p-8 bg-blue-600 text-white rounded-[2rem] shadow-lg shadow-blue-200">
             <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Test Readiness</h4>
             <p className="text-lg font-medium leading-relaxed italic">&quot;Wilson is currently performing ahead of his classmates.&quot;</p>
          </div>
        </div>

        {/* --- RIGHT: ANALYSIS --- */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* CONSISTENCY METRICS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <MetricCard label="Consistency" score={report.metrics.consistency} color="text-green-600" />
             <MetricCard label="Curiosity" score={report.metrics.curiosity} color="text-blue-600" />
             <MetricCard label="Engagement" score={report.metrics.engagement} color="text-indigo-600" />
          </div>

          {/* SUMMARY OF PROGRESS */}
          <div className="p-10 bg-white shadow-sm border border-slate-100 rounded-[3rem]">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">{`Tutor's Evaluation`}</h4>
            <p className="text-slate-700 leading-relaxed text-lg mb-8">
              {report.summary}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
               <div>
                 <h5 className="text-[10px] font-bold text-blue-600 uppercase mb-4 tracking-widest">Key Competencies</h5>
                 <ul className="space-y-3">
                   {report.skills.map((skill, i) => (
                     <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                       {skill}
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl">
                 <h5 className="text-[10px] font-bold text-slate-900 uppercase mb-3 tracking-widest font-mono">Closing Note</h5>
                 <p className="text-sm text-slate-500 italic leading-relaxed">
                   {report.nextSteps}
                 </p>
               </div>
            </div>
          </div>

          {/* FOOTER VERIFICATION */}
          <div className="text-center py-4">
             <p className="text-[9px] text-slate-400 font-mono uppercase tracking-[0.5em]">Digitally Certified Academic Record | Dreambox HQ</p>
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper Component for Wilson's clean metrics
function MetricCard({ label, score, color }: StatProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{label}</p>
      <p className={`text-xl font-bold ${color}`}>{score}</p>
    </div>
  );
}

export default WilsonReportPage;