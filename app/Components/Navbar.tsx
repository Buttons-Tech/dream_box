"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const coursesList = [
    { name: "Lego Robotics", category: "After-School / STEM" },
    { name: "Scratch Coding", category: "Visual Programming" },
    { name: "Python Coding", category: "Text-based Code" },
    { name: "Mathematics", category: "Core Academic" },
    { name: "Science", category: "STEM Explorer" },
    { name: "English", category: "Language Arts" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. BRAND LOGO */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 text-2xl font-black text-indigo-950 tracking-tight">
              <span className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
                <Sparkles className="w-5 h-5" />
              </span>
              Dreambox<span className="text-indigo-600">.</span>
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700">
            {/* Courses Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors py-2">
                Courses & Programs
                <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180 text-indigo-600' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isCoursesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Our Curriculum
                  </div>
                  {coursesList.map((course, idx) => (
                    <Link
                      key={idx}
                      href={`/courses#${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-3 py-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors group/item"
                    >
                      <div className="text-sm font-semibold text-gray-800 group-hover/item:text-indigo-600">
                        {course.name}
                      </div>
                      <div className="text-xs text-gray-400">{course.category}</div>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-gray-100 px-3 py-1">
                    <span className="text-xs font-medium text-indigo-600">More courses coming soon...</span>
                  </div>
                </div>
              )}
            </div>

            <Link href="#how-it-works" className="hover:text-indigo-600 transition-colors">
              How It Works
            </Link>
            <Link href="#after-school" className="hover:text-indigo-600 transition-colors">
              After-School Clubs
            </Link>
            <Link href="#student-projects" className="hover:text-indigo-600 transition-colors">
              Student Projects
            </Link>
            <Link href="#faq" className="hover:text-indigo-600 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* 3. RIGHT CALL TO ACTION & CONTACT */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+2348000000000" 
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Phone className="w-4 h-4" />
              </span>
              +234 800 000 0000
            </a>
            
            <Link 
              href="#enroll" 
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-5 py-2.5 rounded-full text-sm shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Free Trial
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-4 pt-2 pb-6 space-y-3">
          <div className="font-semibold text-xs text-gray-400 uppercase px-2">Courses</div>
          <div className="grid grid-cols-2 gap-2 px-2">
            {coursesList.map((c, i) => (
              <span key={i} className="text-sm text-gray-700 py-1">{c.name}</span>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-3 space-y-2">
            <Link href="#how-it-works" className="block px-2 py-1 text-gray-700 font-medium">How It Works</Link>
            <Link href="#after-school" className="block px-2 py-1 text-gray-700 font-medium">After-School Clubs</Link>
            <Link href="#faq" className="block px-2 py-1 text-gray-700 font-medium">FAQ</Link>
          </div>
          <div className="pt-2">
            <Link 
              href="#enroll" 
              className="block w-full text-center bg-amber-400 text-slate-900 font-bold py-3 rounded-full text-sm"
            >
              Book Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}