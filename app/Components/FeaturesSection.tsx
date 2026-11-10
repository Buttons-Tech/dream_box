import React from 'react';
import { Code2, BrainCircuit, GraduationCap, TrendingUp, Trophy } from 'lucide-react';

export default function FeaturesSection() {
  const benefits = [
    {
      step: "1",
      title: "Learn to Code & Build",
      description: "Instead of just playing video games, kids learn to program their own games, animations, and robotics projects from day one.",
      icon: Code2,
      badgeColor: "bg-indigo-100 text-indigo-700",
      accentBg: "bg-indigo-50/50",
    },
    {
      step: "2",
      title: "Develop Logic & Intellect",
      description: "By solving coding puzzles and constructing circuits, students master algorithmic thinking, creative logic, and spatial reasoning.",
      icon: BrainCircuit,
      badgeColor: "bg-purple-100 text-purple-700",
      accentBg: "bg-purple-50/50",
    },
    {
      step: "3",
      title: "Boost Academic Confidence",
      description: "Our practical approach to Mathematics, Science, and English reinforces core school subjects, making complex concepts easy to grasp.",
      icon: GraduationCap,
      badgeColor: "bg-emerald-100 text-emerald-700",
      accentBg: "bg-emerald-50/50",
    },
    {
      step: "4",
      title: "Elevate School Performance",
      description: "Hands-on STEM learning instills discipline and problem-solving habits that directly translate into higher grades and classroom success.",
      icon: TrendingUp,
      badgeColor: "bg-sky-100 text-sky-700",
      accentBg: "bg-sky-50/50",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
            How Dreambox Develops Your Child
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            A holistic STEM and academic approach designed to nurture young minds from multiple angles.
          </p>
        </div>

        {/* 4 GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className={`relative p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all ${item.accentBg} flex flex-col sm:flex-row gap-6 items-start`}
              >
                {/* NUMBER BADGE */}
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-base shrink-0 ${item.badgeColor}`}>
                  {item.step}
                </div>

                {/* CONTENT */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* ICON DECORATION */}
                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 items-center justify-center text-slate-700 shrink-0">
                  <IconComponent className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM FEATURE HIGHLIGHT BANNER */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Preparing Children for High-Demand Future Careers
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Software engineering, robotics design, and data science are shaping tomorrow. We help your child take their first step early.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}