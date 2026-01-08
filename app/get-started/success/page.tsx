"use client";
import React from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import successAnim from '@/public/animations/Success.json'; // Path to your json
import { Home, User, ArrowRight } from 'lucide-react';

const SignupSuccess = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-[3rem] p-12 shadow-xl border border-indigo-50 text-center relative overflow-hidden">
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16"></div>

        {/* Lottie Animation Container */}
        <div className="w-48 h-48 mx-auto mb-6">
          <Lottie animationData={successAnim} loop={false} />
        </div>

        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
          You're all set!
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          Your application to join the <span className="text-[#6347D1] font-bold">Dreambox Faculty</span> has been received. 
          Our team in Lagos will review your credentials and get back to you via email.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="flex-1">
            <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-100 text-slate-700 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
              <Home size={18} /> Back to Home
            </button>
          </Link>
          
          <Link href="/dashboard" className="flex-1">
            <button className="w-full flex items-center justify-center gap-2 bg-[#6347D1] text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-[#5239b5] transition-all group">
              <User size={18} /> View Profile <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-50">
          <p className="text-xs text-gray-400 font-medium">
            Need help? Contact our support at <span className="text-[#6347D1]">careers@dreambox.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;