"use client";

import React, { useState } from 'react';
import { 
  Users, Building2, BookOpen, GraduationCap, DollarSign, 
  UserCheck, Plus, Search, Filter, ArrowUpRight, MoreVertical 
} from 'lucide-react';

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'schools' | 'instructors'>('overview');

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* ADMIN SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0 border-r border-slate-800">
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-white">
            D
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight block leading-none">Dreambox</span>
            <span className="text-[10px] text-indigo-400 font-semibold tracking-wider uppercase">Super Admin</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 text-xs font-semibold">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Users className="w-4 h-4" /> Platform Overview
          </button>

          <button 
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${activeTab === 'leads' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <UserCheck className="w-4 h-4" /> Trial Requests & Leads
          </button>

          <button 
            onClick={() => setActiveTab('schools')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${activeTab === 'schools' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Building2 className="w-4 h-4" /> Partner Schools & Clubs
          </button>

          <button 
            onClick={() => setActiveTab('instructors')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${activeTab === 'instructors' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <GraduationCap className="w-4 h-4" /> Instructors & Staff
          </button>

          <a href="#" className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
            <BookOpen className="w-4 h-4" /> Curriculum Manager
          </a>
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-400">
          Logged in as <strong className="text-white block">Super Admin</strong>
        </div>
      </aside>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black text-slate-900 capitalize">
              {activeTab} Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search students, schools, leads..." 
                className="pl-9 pr-4 py-2 text-xs bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 w-64"
              />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm">
              <Plus className="w-4 h-4" /> Add New School / Cohort
            </button>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <main className="flex-1 overflow-y-auto p-8 space-y-8">
          
          {/* TOP METRICS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricWidget title="Total Enrolled Kids" count="342" change="+12% this month" icon={Users} color="bg-indigo-500" />
            <MetricWidget title="Partner Schools" count="18" change="Active Club Programs" icon={Building2} color="bg-orange-500" />
            <MetricWidget title="Pending Trial Leads" count="24" change="Requires Callback" icon={UserCheck} color="bg-amber-500" />
            <MetricWidget title="Active Instructors" count="12" change="Assigned across cohorts" icon={GraduationCap} color="bg-emerald-500" />
          </div>

          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT 2 COLUMNS: LEADS & ENROLLMENT TABLE */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-base text-slate-900">Recent Trial Consultation Requests</h3>
                  <button className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1">
                    View All Leads <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] tracking-wider">
                      <tr>
                        <th className="py-3 px-3">Parent Name</th>
                        <th className="py-3 px-3">Contact</th>
                        <th className="py-3 px-3">Interested Course</th>
                        <th className="py-3 px-3">Status</th>
                        <th className="py-3 px-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-3 px-3 font-semibold text-slate-800">Aisha Bello</td>
                        <td className="py-3 px-3 text-slate-600">+234 803 123 4567</td>
                        <td className="py-3 px-3 font-medium text-indigo-600">Lego Robotics</td>
                        <td className="py-3 px-3">
                          <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-[10px] font-bold">New</span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-lg">Assign</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-slate-800">Emeka Okafor</td>
                        <td className="py-3 px-3 text-slate-600">+234 802 987 6543</td>
                        <td className="py-3 px-3 font-medium text-indigo-600">Python Coding</td>
                        <td className="py-3 px-3">
                          <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full text-[10px] font-bold">Contacted</span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-lg">Convert</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: ACTIVE SCHOOL CLUBS LIST */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-extrabold text-base text-slate-900">Active After-School Clubs</h3>
                <div className="space-y-3 text-xs">
                  <ClubItem school="Chrisland School, Ikeja" club="Lego & Robotics" instructor="Instructor Alex" students={24} day="Tuesdays (2:30 PM)" />
                  <ClubItem school="Corona Secondary, Lekki" club="Python Coding" instructor="Instructor Sarah" students={18} day="Thursdays (3:00 PM)" />
                  <ClubItem school="Greensprings School" club="Scratch & STEM" instructor="Instructor David" students={30} day="Fridays (2:00 PM)" />
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>

    </div>
  );
}

function MetricWidget({ title, count, change, icon: Icon, color }: any) {
  return (
    <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{title}</p>
        <p className="text-2xl font-black text-slate-900 mt-1">{count}</p>
        <p className="text-[11px] font-medium text-slate-500 mt-0.5">{change}</p>
      </div>
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white shadow-md`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
}

function ClubItem({ school, club, instructor, students, day }: any) {
  return (
    <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
      <div className="flex justify-between items-start">
        <h4 className="font-extrabold text-slate-900">{school}</h4>
        <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full">{students} Kids</span>
      </div>
      <p className="text-slate-600 text-[11px]"><strong>Club:</strong> {club} • {instructor}</p>
      <p className="text-slate-400 text-[10px]">{day}</p>
    </div>
  );
}