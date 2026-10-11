'use client';
import { useState } from 'react';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-amber-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center shadow-md transform -rotate-3 hover:rotate-0 transition-transform">
              <span className="text-2xl font-black text-amber-950">📦</span>
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">Dream<span className="text-amber-500">box</span></span>
              <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase">Build Your Dreams</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 font-bold text-slate-600">
            <a href="#courses" className="hover:text-amber-500 transition-colors">Courses</a>
            <a href="#robotics" className="hover:text-amber-500 transition-colors">Lego Lab</a>
            <a href="#partners" className="hover:text-amber-500 transition-colors">Schools</a>
            <a href="#talents" className="hover:text-amber-500 transition-colors text-amber-600">✨ Egan Got Talents</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => onOpenAuth('login')}
              className="px-5 py-2.5 text-slate-700 font-bold hover:text-amber-600 transition-colors"
            >
              Log In
            </button>
            <button 
              onClick={() => onOpenAuth('signup')}
              className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-black px-6 py-3 rounded-2xl shadow-[0_4px_0_0_#d97706] active:translate-y-1 active:shadow-none transition-all"
            >
              Get Started 🚀
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-amber-100 text-amber-900 font-bold"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-4 border-amber-200 px-4 pt-2 pb-6 space-y-3">
          <a href="#courses" className="block py-2 font-bold text-slate-700" onClick={() => setIsOpen(false)}>Courses</a>
          <a href="#robotics" className="block py-2 font-bold text-slate-700" onClick={() => setIsOpen(false)}>Lego Lab</a>
          <a href="#partners" className="block py-2 font-bold text-slate-700" onClick={() => setIsOpen(false)}>Schools</a>
          <a href="#talents" className="block py-2 font-bold text-amber-600" onClick={() => setIsOpen(false)}>✨ Egan Got Talents</a>
          <div className="pt-4 flex flex-col space-y-2">
            <button onClick={() => { onOpenAuth('login'); setIsOpen(false); }} className="w-full py-3 font-bold text-slate-700 bg-slate-100 rounded-xl">Log In</button>
            <button onClick={() => { onOpenAuth('signup'); setIsOpen(false); }} className="w-full py-3 font-black text-amber-950 bg-amber-400 rounded-xl shadow-[0_4px_0_0_#d97706]">Get Started 🚀</button>
          </div>
        </div>
      )}
    </nav>
  );
}