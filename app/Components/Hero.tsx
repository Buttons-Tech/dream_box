import Link from 'next/link';
import { Search, GraduationCap, ArrowRight, Zap, Code, Brain } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#FDFCFE] pt-20 pb-32 overflow-hidden" style={{backgroundImage: "url('/v2/white-sheet.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-purple-50 mb-8">
          <Zap size={16} className="text-orange-400 fill-orange-400" />
          <span className="text-sm font-bold text-slate-600">Now Enrolling in Nigeria, US, UK and Canada</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
          <span className="text-[#6347D1]">DREAMBOX</span> <br />
           ACADEMY<br />
          
        </h1>
        
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Global School for Limitless Learning
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* THE MAIN ENTRY POINT */}
          <Link href="/tutors" className="group w-full sm:w-auto bg-[#6347D1] text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-purple-200 hover:bg-[#523bb3] transition-all flex items-center justify-center gap-3">
            Find a Tutor <Search size={20} />
          </Link>

          <Link href="/signup/parent" className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
            Enroll Now <ArrowRight size={20} />
          </Link>
        </div>

        {/* Quick Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
          <div className="flex items-center gap-2 font-bold text-xl"><GraduationCap /> Verified Mentors</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Code /> 1-on-1 Coding</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Brain /> Personalized Growth</div>
        </div>
      </div>
    </section>
  );
}