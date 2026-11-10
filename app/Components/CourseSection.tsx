import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Cpu, Code, BookOpen, Layers } from 'lucide-react';

export default function CourseSection() {
  const courses = [
    {
      title: "Junior Explorer",
      ageRange: "5–8 YRS",
      duration: "8 WEEKS",
      description: "Introductory STEM & creative problem solving. Children learn basic logic, cardboard prototyping, and Scratch visual coding.",
      stack: ["Lego Robotics", "Scratch Coding", "Basic Math"],
      bgColor: "bg-indigo-600",
      accentColor: "bg-indigo-500/30 text-indigo-100",
      btnColor: "bg-amber-400 text-slate-950 hover:bg-amber-300",
      icon: Layers,
    },
    {
      title: "Middle Innovator",
      ageRange: "8–11 YRS",
      duration: "12 WEEKS",
      description: "Hands-on robotics hardware and visual game development. Focuses on block coding, circuit logic, and science fundamentals.",
      stack: ["Lego Robotics", "Scratch Coding", "Science & Math"],
      bgColor: "bg-orange-500",
      accentColor: "bg-orange-400/30 text-orange-100",
      btnColor: "bg-slate-900 text-white hover:bg-slate-800",
      icon: Cpu,
    },
    {
      title: "Super Coder",
      ageRange: "11–13 YRS",
      duration: "12 WEEKS",
      description: "Transitioning from blocks to real syntax. Building games, software apps, and exploring core STEM & English communications.",
      stack: ["Python Coding", "Lego Robotics", "STEM & English"],
      bgColor: "bg-emerald-600",
      accentColor: "bg-emerald-500/30 text-emerald-100",
      btnColor: "bg-amber-400 text-slate-950 hover:bg-amber-300",
      icon: Code,
    },
    {
      title: "Tech Expert",
      ageRange: "13–15 YRS",
      duration: "16 WEEKS",
      description: "Advanced text-based programming, algorithm design, advanced mathematics, and real-world project builds.",
      stack: ["Python Coding", "Advanced Math", "Robotics Engineering"],
      bgColor: "bg-purple-700",
      accentColor: "bg-purple-500/30 text-purple-100",
      btnColor: "bg-slate-900 text-white hover:bg-slate-800",
      icon: BookOpen,
    },
  ];

  return (
    <section id="courses" className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
            Choose the Right Program for Your Child
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Tailored learning tracks spanning Lego Robotics, Scratch, Python, Mathematics, Science, and English.
          </p>
        </div>

        {/* 4 COURSE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => {
            const CourseIcon = course.icon;
            return (
              <div 
                key={idx}
                className={`${course.bgColor} rounded-3xl p-6 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}
              >
                {/* TOP BADGES: AGE & DURATION */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide backdrop-blur-md ${course.accentColor}`}>
                      {course.ageRange}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-white/80">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                  </div>

                  {/* COURSE TITLE & ICON */}
                  <div className="flex items-center justify-between pt-2">
                    <h3 className="text-xl font-black tracking-tight">{course.title}</h3>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <CourseIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-xs text-white/90 leading-relaxed">
                    {course.description}
                  </p>

                  {/* CURRICULUM TAGS */}
                  <div className="pt-2 space-y-1.5">
                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider">
                      Included Subjects:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.stack.map((item, i) => (
                        <span 
                          key={i} 
                          className="bg-black/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTTOM ACTION BUTTON */}
                <div className="pt-8">
                  <Link
                    href="#enroll"
                    className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all ${course.btnColor}`}
                  >
                    View Details & Enroll
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}