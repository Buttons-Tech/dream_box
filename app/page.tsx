'use client';

import React, { useState } from 'react';

// --- Mock Data ---
const AGE_GROUPS = [
  { id: 'toddlers', title: 'Toddlers (Ages 2–5)', desc: 'Lego Robotics, Tactile Puzzles & Spatial Play', icon: '🧩', bg: 'bg-amber-100 text-amber-800' },
  { id: 'primary', title: 'Primary (Ages 6–10)', desc: 'Block Coding, Scratch, Basic Dance & Keyboards', icon: '🚀', bg: 'bg-purple-100 text-purple-800' },
  { id: 'secondary', title: 'Secondary (Ages 11–18)', desc: 'AI, Python, Beat Production, Rap & Basketball', icon: '⚡', bg: 'bg-blue-100 text-blue-800' },
];

const STEM_SUBJECTS = [
  { name: 'Coding & Web', icon: '💻', tag: 'High Demand' },
  { name: 'Robotics & Lego', icon: '🤖', tag: 'Hands-on' },
  { name: 'Artificial Intelligence', icon: '🧠', tag: 'Next-Gen' },
  { name: 'Creative Digital Design', icon: '🎨', tag: 'Popular' },
];

const TALENT_SUBJECTS = [
  { name: 'Music & Beat Making', icon: '🎧', sub: 'Singing, Rapping, Production' },
  { name: 'Instruments', icon: '🎸', sub: 'Guitar & Keyboard' },
  { name: 'Dance & Expression', icon: '🕺', sub: 'Afrobeats & Hip-Hop' },
  { name: 'Basketball Academy', icon: '🏀', sub: 'Court Drills & Teamwork' },
];

export default function DreamboxApp() {
  const [activeTab, setActiveTab] = useState<'stem' | 'talent'>('stem');
  const [partnerModal, setPartnerModal] = useState(false);

  return (
    <div className="min-h-screen bg-dreambox-bg font-comic text-slate-800 pb-12">
      
      {/* 1. TOP OPAY-STYLE NAVBAR */}
      <header className="sticky top-0 z-50 bg-dreambox-purple px-4 py-3 text-white shadow-md">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-dreambox-yellow text-dreambox-purple font-black text-xl rounded-full flex items-center justify-center border-2 border-white shadow">
              DB
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-wide leading-none">Dreambox</h1>
              <p className="text-[10px] text-dreambox-yellow font-medium">Education & Clubs</p>
            </div>
          </div>
          <button 
            onClick={() => setPartnerModal(true)}
            className="bg-dreambox-yellow text-dreambox-purple text-xs font-bold px-3 py-1.5 rounded-full shadow hover:bg-dreambox-yellow-bright transition transform active:scale-95"
          >
            🏫 Partner School
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4 space-y-5">

        {/* 2. HERO OPAY-STYLE WALLET CARD */}
        <section className="bg-gradient-to-br from-dreambox-purple to-dreambox-purple-dark text-white p-5 rounded-opay shadow-lg relative overflow-hidden">
          {/* Cartoon background circles/accents */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-sm" />
          <div className="absolute right-8 top-2 text-4xl opacity-20">🤖</div>

          <div className="relative z-10 space-y-3">
            <span className="bg-dreambox-yellow text-dreambox-purple text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Weekend & School Clubs
            </span>
            <h2 className="text-2xl font-black leading-tight text-white">
              Unleash Your Child’s Genius 🌟
            </h2>
            <p className="text-xs text-purple-100">
              Coding, AI, Lego Robotics, Music & Sports for ages 2–18 across Nigeria.
            </p>
            
            <div className="pt-2 flex gap-2">
              <button className="flex-1 bg-dreambox-yellow text-dreambox-purple font-black py-2.5 rounded-xl text-xs shadow hover:bg-dreambox-yellow-bright transition">
                Enroll Student
              </button>
              <button className="flex-1 bg-white/20 text-white font-bold py-2.5 rounded-xl text-xs backdrop-blur-sm hover:bg-white/30 transition">
                Virtual Classes
              </button>
            </div>
          </div>
        </section>

        {/* 3. QUICK ACTIONS GRID (OPAY STYLE) */}
        <section className="bg-white p-4 rounded-opay shadow-sm border border-purple-50">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Quick Explorer</h3>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { label: 'Stem', icon: '💻', color: 'bg-purple-100' },
              { label: 'Robotics', icon: '🤖', color: 'bg-amber-100' },
              { label: 'Talents', icon: '🎤', color: 'bg-pink-100' },
              { label: 'Awards', icon: '🏆', color: 'bg-yellow-100' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 cursor-pointer group">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition`}>
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. ANNUAL COMPETITION BANNER */}
        <section className="bg-gradient-to-r from-amber-400 to-dreambox-yellow p-4 rounded-opay shadow-sm border-2 border-white flex items-center gap-3">
          <div className="text-4xl animate-bounce">🏆</div>
          <div className="flex-1">
            <span className="bg-dreambox-purple text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
              ANNUAL SHOWDOWN
            </span>
            <h4 className="font-extrabold text-slate-900 text-sm mt-1">Innovator of the Year</h4>
            <p className="text-[11px] text-slate-800 font-medium">
              Junior & Senior categories compete at the end of every year!
            </p>
          </div>
        </section>

        {/* 5. AGE GROUPS (INCLUSIVE OF 2-5 YEARS LEGO) */}
        <section className="space-y-2">
          <h3 className="text-sm font-extrabold text-dreambox-purple flex items-center gap-1">
            <span>🎨</span> Programs by Age Group
          </h3>
          <div className="space-y-2.5">
            {AGE_GROUPS.map((group) => (
              <div key={group.id} className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                <div className="text-3xl">{group.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-slate-800">{group.title}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${group.bg}`}>
                      Active
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{group.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SUBJECT TABS (STEM VS TALENTS) */}
        <section className="bg-white p-4 rounded-opay shadow-sm border border-purple-50">
          <div className="flex bg-slate-100 p-1 rounded-xl mb-4">
            <button
              onClick={() => setActiveTab('stem')}
              className={`flex-1 py-1.5 text-xs font-extrabold rounded-lg transition ${
                activeTab === 'stem' ? 'bg-dreambox-purple text-white shadow' : 'text-slate-500'
              }`}
            >
              🚀 STEM & Tech
            </button>
            <button
              onClick={() => setActiveTab('talent')}
              className={`flex-1 py-1.5 text-xs font-extrabold rounded-lg transition ${
                activeTab === 'talent' ? 'bg-dreambox-purple text-white shadow' : 'text-slate-500'
              }`}
            >
              🎸 Talent & Sports
            </button>
          </div>

          {activeTab === 'stem' ? (
            <div className="grid grid-cols-2 gap-2.5">
              {STEM_SUBJECTS.map((sub, i) => (
                <div key={i} className="bg-purple-50/60 p-3 rounded-xl border border-purple-100 flex flex-col justify-between">
                  <div className="text-2xl mb-1">{sub.icon}</div>
                  <div>
                    <span className="text-[9px] font-bold text-dreambox-purple bg-white px-1.5 py-0.5 rounded shadow-2xs">
                      {sub.tag}
                    </span>
                    <h5 className="font-extrabold text-xs text-slate-800 mt-1">{sub.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {TALENT_SUBJECTS.map((sub, i) => (
                <div key={i} className="bg-amber-50/60 p-3 rounded-xl border border-amber-100 flex items-center gap-3">
                  <div className="text-2xl">{sub.icon}</div>
                  <div>
                    <h5 className="font-extrabold text-xs text-slate-800">{sub.name}</h5>
                    <p className="text-[10px] text-slate-500">{sub.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 7. SCHOOL PARTNERSHIP CALL-TO-ACTION */}
        <section className="bg-dreambox-yellow p-5 rounded-opay text-slate-900 relative overflow-hidden shadow-sm">
          <div className="relative z-10 space-y-2">
            <h3 className="font-black text-base leading-snug">
              Are you a School Proprietor in Nigeria? 🇳🇬
            </h3>
            <p className="text-xs font-medium text-slate-800">
              Partner with Dreambox Education to bring weekly or weekend tech and talent clubs directly to your school campus.
            </p>
            <button 
              onClick={() => setPartnerModal(true)}
              className="w-full bg-dreambox-purple text-white font-extrabold py-2.5 rounded-xl text-xs shadow hover:bg-dreambox-purple-dark transition"
            >
              Request School Partnership
            </button>
          </div>
        </section>

      </main>

      {/* 8. SCHOOL PARTNER MODAL */}
      {partnerModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-opay max-w-sm w-full p-5 space-y-4 shadow-2xl relative">
            <button 
              onClick={() => setPartnerModal(false)}
              className="absolute top-4 right-4 text-slate-400 font-bold text-sm"
            >
              ✕
            </button>
            <div>
              <h3 className="font-black text-lg text-dreambox-purple">Partner With Us</h3>
              <p className="text-xs text-slate-500">Bring Dreambox Club to your school in Nigeria.</p>
            </div>
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Request Submitted!'); setPartnerModal(false); }}>
              <div>
                <label className="text-[10px] font-bold text-slate-600 block mb-1">School Name</label>
                <input required type="text" placeholder="e.g. Graceville Academy" className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-dreambox-purple" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-600 block mb-1">State in Nigeria</label>
                <input required type="text" placeholder="e.g. Lagos, Enugu, Abuja" className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-dreambox-purple" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-600 block mb-1">Phone Number / WhatsApp</label>
                <input required type="tel" placeholder="08012345678" className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-dreambox-purple" />
              </div>
              <button type="submit" className="w-full bg-dreambox-purple text-white font-black py-3 rounded-xl text-xs shadow">
                Submit Partnership Interest
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}