"use client";

import React from 'react';
import { 
  Sparkles, Play, Award, Rocket, Code2, Cpu, Video, Upload, Trophy, CheckCircle 
} from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-indigo-950 text-white font-sans p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* GAMIFIED WELCOME HERO */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3">
                <Rocket className="w-4 h-4" /> Level 2 Coder
              </div>
              <h1 className="text-3xl sm:text-4xl font-black">Welcome back, Richi! 🚀</h1>
              <p className="text-indigo-100 text-xs sm:text-sm mt-1">Ready to build your next robot today?</p>
            </div>

            {/* BADGE STATS */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
              <div className="w-10 h-10 bg-amber-400 text-slate-950 font-black rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-indigo-200">Badges Earned</p>
                <p className="text-lg font-black text-white">4 Badges</p>
              </div>
            </div>
          </div>
        </div>

        {/* STUDENT COURSES GRID */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> My Learning Missions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* COURSE CARD 1 */}
            <div className="bg-indigo-900/60 border border-indigo-700/50 rounded-3xl p-6 space-y-4 relative overflow-hidden group hover:border-amber-400 transition-all">
              <div className="flex items-center justify-between">
                <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase">In-School Club</span>
                <Cpu className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold">Lego Robotics</h3>
                <p className="text-xs text-indigo-200 mt-1">Building Obstacle Avoidance Cars</p>
              </div>
              <button className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs py-3 rounded-2xl flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" /> Open Lesson Guide
              </button>
            </div>

            {/* COURSE CARD 2 */}
            <div className="bg-indigo-900/60 border border-indigo-700/50 rounded-3xl p-6 space-y-4 relative overflow-hidden group hover:border-amber-400 transition-all">
              <div className="flex items-center justify-between">
                <span className="bg-purple-500 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase">Virtual Class</span>
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold">Scratch Game Coding</h3>
                <p className="text-xs text-indigo-200 mt-1">Maze Game & Animations</p>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black text-xs py-3 rounded-2xl flex items-center justify-center gap-2">
                <Video className="w-4 h-4" /> Join Live Google Meet
              </button>
            </div>

            {/* UPLOAD PROJECT CARD */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 border border-indigo-500/30 rounded-3xl p-6 space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-amber-400">Upload Homework / Project</h3>
                <p className="text-xs text-indigo-200 mt-1">Share your Scratch project link or cardboard robot photo with Instructor Alex!</p>
              </div>
              <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs py-3 rounded-2xl flex items-center justify-center gap-2">
                <Upload className="w-4 h-4" /> Submit Project
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}