"use client";
import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Users, 
  ChevronRight, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

const SchoolSignup: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F7FF] p-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl text-center max-w-md border border-indigo-50">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Application Sent!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
{`            Thank you for choosing Dreambox. Our partnership team will review your school's details and contact you within 48 hours.
`}          </p>
          <Link href="/" className="w-full">
          <button className="w-full bg-[#6347D1] text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100">
            Return to Home
          </button>
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Indicator (Desktop Only) */}
        <div className="md:w-1/3 bg-[#6347D1] p-10 text-white flex flex-col justify-between">
          <div>
            <div className="bg-pink-500 w-10 h-10 rounded-xl flex items-center justify-center mb-12 shadow-lg">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div className="space-y-8">
              <div className={`flex items-center gap-4 ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">1</div>
                <span className="font-bold text-sm">School Details</span>
              </div>
              <div className={`flex items-center gap-4 ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">2</div>
                <span className="font-bold text-sm">Logistics</span>
              </div>
              <div className={`flex items-center gap-4 ${step >= 3 ? 'opacity-100' : 'opacity-40'}`}>
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">3</div>
                <span className="font-bold text-sm">Contact Person</span>
              </div>
            </div>
          </div>
          <p className="text-[10px] uppercase font-black tracking-widest opacity-60">School Club Partnership</p>
        </div>

        {/* Right Form Area */}
        <div className="md:w-2/3 p-10 md:p-14">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-2xl font-black text-slate-900 mb-2">School Identity</h3>
              <p className="text-gray-400 text-sm mb-8">Tell us about your institution.</p>
              
              <div className="space-y-4">
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                  <input type="text" placeholder="Official School Name" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-purple-400 transition-all outline-none" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                  <select className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-purple-400 transition-all outline-none appearance-none">
                    <option>Select Region</option>
                    <option>Nigeria</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                  </select>
                </div>
                <input type="text" placeholder="Street Address" className="w-full px-4 py-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-purple-400 transition-all outline-none" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Logistics & Interest</h3>
              <p className="text-gray-400 text-sm mb-8">Help us plan the club capacity.</p>
              
              <div className="space-y-4">
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                  <input type="number" placeholder="Estimated Number of Students" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <p className="text-xs font-bold text-gray-400 ml-2">INTERESTED PROGRAMS</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Coding', 'Robotics', 'Math/Eng', 'Special Needs'].map((item) => (
                    <label key={item} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-purple-50 transition-colors">
                      <input type="checkbox" className="rounded text-[#6347D1] focus:ring-[#6347D1]" />
                      <span className="text-xs font-medium text-gray-600">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Final Step</h3>
              <p className="text-gray-400 text-sm mb-8">Who should we speak with?</p>
              
              <div className="space-y-4">
                <input type="text" placeholder="Admin/Principal Name" className="w-full px-4 py-4 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-400" />
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                  <input type="email" placeholder="Official Email Address" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                  <input type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-12 flex justify-between gap-4">
            {step > 1 && (
              <button 
                onClick={prevStep}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold text-gray-400 hover:text-gray-600 transition-all"
              >
                <ArrowLeft size={16} /> Back
              </button>
            )}
            <button 
              onClick={step === 3 ? () => setIsSubmitted(true) : nextStep}
              className={`flex-1 flex items-center justify-center gap-2 bg-[#6347D1] text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-[#5239b5] transition-all ${step === 1 ? 'ml-auto' : ''}`}
            >
              {step === 3 ? 'Submit Application' : 'Continue'} <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolSignup;