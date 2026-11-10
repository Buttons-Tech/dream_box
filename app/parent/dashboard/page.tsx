"use client";

import React, { useState } from 'react';
import { 
  Users, CreditCard, Calendar, Bell, Download, ExternalLink, 
  Sparkles, BookOpen, CheckCircle, Clock, AlertCircle, ChevronRight 
} from 'lucide-react';

export default function ParentDashboard() {
  const [selectedChild, setSelectedChild] = useState('Richi Hassan');

  const children = [
    { name: 'Richi Hassan', age: 7, school: 'Chrisland School Ikeja', club: 'Lego Robotics' },
    { name: 'Mark Hassan', age: 11, school: 'Virtual Cohort', club: 'Python Coding' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER BAR & MULTI-CHILD SWITCHER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-slate-900">Parent Portal</h1>
            <p className="text-slate-500 text-xs mt-0.5">Track your children&apos;s STEM journey and school club activities.</p>
          </div>

          {/* CHILD SELECTOR DROPDOWN */}
          <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-2xl">
            <span className="text-xs font-bold text-slate-500 pl-3">Active Child:</span>
            {children.map((child) => (
              <button
                key={child.name}
                onClick={() => setSelectedChild(child.name)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedChild === child.name
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {child.name}
              </button>
            ))}
          </div>
        </div>

        {/* METRIC SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Course</p>
              <p className="text-lg font-black text-slate-900 mt-1">Lego Robotics</p>
              <p className="text-[11px] text-indigo-600 font-semibold">Chrisland School Club</p>
            </div>
            <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Club Schedule</p>
              <p className="text-lg font-black text-slate-900 mt-1">Tuesdays</p>
              <p className="text-[11px] text-slate-500">2:30 PM – 3:30 PM</p>
            </div>
            <div className="w-10 h-10 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pending Term Fees</p>
              <p className="text-lg font-black text-slate-900 mt-1">₦45,000</p>
              <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">Due Next Week</span>
            </div>
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Projects Built</p>
              <p className="text-lg font-black text-slate-900 mt-1">6 Completed</p>
              <p className="text-[11px] text-emerald-600 font-semibold">+2 Badges Earned</p>
            </div>
            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* MAIN BODY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: NOTICES & PAYMENT LEDGER */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* SCHOOL & CLUB ANNOUNCEMENT BOARD */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-indigo-600" /> Club Notices & Instructor Updates
                </h2>
                <span className="text-xs font-bold text-indigo-600">Updated 2h ago</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-extrabold text-indigo-900">Instructor Alex (Chrisland Club)</span>
                    <span className="text-slate-400">Today, 9:00 AM</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    &quot;Parents, please remind the kids to bring their cardboard prototype boxes for our obstacle sensor build session this Tuesday!&quot;
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-extrabold text-slate-900">Dreambox Operations</span>
                    <span className="text-slate-400">Nov 5, 2026</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    End of Term Robotics Exhibition registration is now open. Click to register your child for presentation day.
                  </p>
                </div>
              </div>
            </div>

            {/* BILLING & EXPENSE TABLE WITH PAY BUTTON */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-extrabold text-slate-900">Fee Ledger & Receipts</h2>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm">
                  <CreditCard className="w-4 h-4" /> Pay Outstanding Fee
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-3">Description</th>
                      <th className="py-3 px-3">Amount</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3">Date</th>
                      <th className="py-3 px-3 text-right">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-800">Term 1 Lego Robotics Kit Fee</td>
                      <td className="py-3 px-3 font-bold text-slate-900">₦45,000</td>
                      <td className="py-3 px-3">
                        <span className="bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold">Unpaid</span>
                      </td>
                      <td className="py-3 px-3 text-slate-500">10/11/2026</td>
                      <td className="py-3 px-3 text-right">
                        <button className="text-indigo-600 hover:underline font-bold">Invoice PDF</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-800">Registration & Starter Kit</td>
                      <td className="py-3 px-3 font-bold text-slate-900">₦15,000</td>
                      <td className="py-3 px-3">
                        <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full text-[10px] font-bold">Paid</span>
                      </td>
                      <td className="py-3 px-3 text-slate-500">15/09/2026</td>
                      <td className="py-3 px-3 text-right">
                        <button className="text-indigo-600 hover:underline font-bold flex items-center gap-1 justify-end">
                          <Download className="w-3 h-3" /> Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CHILD PROGRESS REPORT CARD */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-extrabold text-slate-900">Child Progress Card</h2>
              <div className="flex items-center gap-4 border-b pb-4">
                <div className="w-14 h-14 bg-indigo-600 text-white font-black text-2xl rounded-2xl flex items-center justify-center">
                  {selectedChild.charAt(0)}
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">{selectedChild}</h3>
                  <p className="text-xs text-slate-500">Class 3 • Chrisland Ikeja</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>Curriculum Completion</span>
                    <span className="text-indigo-600">65%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[65%]" />
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <p className="font-bold text-slate-700">Recent Instructor Remarks:</p>
                  <p className="text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 italic">
                    &quot;Richi shows great understanding of motor assembly and logic control.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}