"use client";

import React, { useState } from 'react';
import { 
  Calendar, CheckCircle, Clock, BookOpen, MessageSquare, 
  Upload, Sparkles, Send, Award, FileText 
} from 'lucide-react';

export default function InstructorDashboard() {
  const [selectedCohort, setSelectedCohort] = useState('Corona Lekki - Lego Robotics');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* INSTRUCTOR TOP BANNER */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-500/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Instructor Workspace
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">Welcome back, Instructor Alex!</h1>
            <p className="text-indigo-200 text-xs sm:text-sm mt-1">
              You have 2 club sessions scheduled for today.
            </p>
          </div>

          <button className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-3 rounded-2xl text-xs flex items-center gap-2 shadow-md transition-all">
            <MessageSquare className="w-4 h-4" /> Broadcast Notice to Parents
          </button>
        </div>

        {/* MAIN DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: TODAY'S CLASSES & ATTENDANCE */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* TODAY'S SCHEDULE */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" /> Today&apos;s Sessions
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] bg-indigo-600 text-white font-extrabold px-2.5 py-0.5 rounded-full">IN-SCHOOL CLUB</span>
                    <span className="text-xs text-indigo-900 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 2:30 PM
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Chrisland School Ikeja</h3>
                    <p className="text-xs text-slate-600">Lego Robotics • Module 3 (Sensors)</p>
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2 rounded-xl">
                    Take Attendance (24 Kids)
                  </button>
                </div>

                <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] bg-purple-600 text-white font-extrabold px-2.5 py-0.5 rounded-full">VIRTUAL COHORT</span>
                    <span className="text-xs text-purple-900 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 5:00 PM
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Python Junior Explorers</h3>
                    <p className="text-xs text-slate-600">Online Google Meet • Session 6</p>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-2 rounded-xl">
                    Launch Meet Link
                  </button>
                </div>
              </div>
            </div>

            {/* ASSIGNMENT / PROJECT REVIEW QUEUE */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" /> Student Project Submissions
                </h2>
                <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">3 Pending Review</span>
              </div>

              <div className="space-y-3">
                <SubmissionCard student="Kazi Junior" project="Scratch Maze Game" course="Scratch Coding" date="Today, 10:15 AM" />
                <SubmissionCard student="Tobi Adebayo" project="Cardboard Smart Crane" course="Lego Robotics" date="Yesterday" />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CURRICULUM SYLLABUS & QUICK NOTES */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" /> Active Curriculum Guide
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <h4 className="font-extrabold text-slate-900">Lego Robotics: Week 4</h4>
                  <p className="text-slate-600">Building ultrasonic distance obstacle avoidance vehicles.</p>
                  <a href="#" className="text-indigo-600 font-bold text-[11px] block pt-1 hover:underline">Download Lesson Plan PDF →</a>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <h4 className="font-extrabold text-slate-900">Python Coding: Week 6</h4>
                  <p className="text-slate-600">Intro to Loops and Conditional Logic (`if/else`).</p>
                  <a href="#" className="text-indigo-600 font-bold text-[11px] block pt-1 hover:underline">Download Exercise Files →</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function SubmissionCard({ student, project, course, date }: any) {
  return (
    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
      <div>
        <h4 className="font-extrabold text-slate-900 text-sm">{student}</h4>
        <p className="text-xs text-indigo-600 font-semibold">{project}</p>
        <p className="text-[10px] text-slate-400">{course} • {date}</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-emerald-700">
          Grade & Badge
        </button>
      </div>
    </div>
  );
}