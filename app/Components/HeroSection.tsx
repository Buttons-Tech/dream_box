import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full bg-slate-50 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* MAIN PURPLE HERO CONTAINER */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          
          {/* BACKGROUND DECORATIVE ELEMENTS */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* LEFT COLUMN: TEXT CONTENT & CTAS */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* ONLINE & IN-SCHOOL BADGE */}
              <div className="inline-flex items-center gap-2 bg-indigo-500/40 backdrop-blur-md border border-indigo-300/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-indigo-100">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE VIRTUAL LESSONS & AFTER-SCHOOL CLUBS
              </div>

              {/* MAIN HERO TITLE */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Empowering Kids Ages 5–15 with STEM, Coding & Robotics
              </h1>

              <p className="text-indigo-100 text-base sm:text-lg max-w-2xl leading-relaxed">
                From <span className="font-semibold text-amber-300">Lego Robotics</span> and <span className="font-semibold text-amber-300">Scratch & Python Coding</span> to core Mathematics, Science & English. Hands-on learning built for young minds.
              </p>

              {/* TWO BULLET POINTS FROM DESIGN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-indigo-50">
                    <strong className="block text-white">First Code in Lesson 1</strong>
                    Kids build real projects from their very first class.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-indigo-50">
                    <strong className="block text-white">Small Group Sizes</strong>
                    Personalized attention in small virtual or club cohorts.
                  </p>
                </div>
              </div>

              {/* PRIMARY CTA & ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="#free-trial"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base px-8 py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Try a Free Class
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="#courses"
                  className="bg-indigo-900/50 hover:bg-indigo-900/80 text-white font-semibold text-base px-6 py-4 rounded-2xl border border-indigo-400/30 backdrop-blur-sm transition-all"
                >
                  Explore All Courses
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN: HERO IMAGE SHOWCASE WITH SPEECH BUBBLE */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* BACKDROP LIGHT RING */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-indigo-500/30 absolute inset-0 m-auto blur-2xl" />

              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-indigo-950">
                {/* HERO ILLUSTRATION / PHOTO PLACEHOLDER */}
                <Image
                  src="/images/hero-student.jpg" 
                  alt="Student coding and building robotics with Dreambox"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* SPEECH BUBBLE BADGE (from design reference) */}
              <div className="absolute -top-4 -right-2 sm:right-2 bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm py-2.5 px-4 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 animate-bounce">
                <Sparkles className="w-4 h-4 text-indigo-950" />
                <span>Join Dreambox Today! 🚀</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}