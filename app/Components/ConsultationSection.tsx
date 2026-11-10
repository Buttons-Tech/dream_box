"use client";

import React, { useState } from 'react';
import { Send, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childAge: '',
    selectedCourse: 'Lego Robotics',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to your NestJS backend or API route here
    setSubmitted(true);
  };

  return (
    <section id="enroll" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* MAIN CONTAINER */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          
          {/* BACKGROUND GLOW */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* LEFT COLUMN: TEXT CONTENT & VALUE PROP */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-300/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                FREE TRIAL LESSON AVAILABLE
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                Not sure which course fits your child best?
              </h2>

              <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
                Leave your details for a free consultation! We’ll guide you through our Lego Robotics, Scratch, Python, Mathematics, and Science programs and schedule a free trial lesson.
              </p>

              <div className="flex items-center gap-3 pt-2 text-indigo-200 text-xs sm:text-sm">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Average callback time: <strong>Within 15 minutes</strong></span>
              </div>
            </div>

            {/* RIGHT COLUMN: LEAD CAPTURE FORM */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">Request Received!</h3>
                    <p className="text-sm text-gray-600 max-w-sm mx-auto">
                      Thank you! One of our Dreambox learning advisors will contact you shortly to schedule your free trial lesson.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-indigo-600 hover:underline pt-2"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                      Book a Free Consultation
                    </h3>

                    {/* PARENT NAME */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Parent Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Johnson"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                      />
                    </div>

                    {/* PHONE NUMBER */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number (WhatsApp)
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                      />
                    </div>

                    {/* PREFERRED SUBJECT */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Interested Course
                      </label>
                      <select
                        value={formData.selectedCourse}
                        onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all text-gray-700"
                      >
                        <option value="Lego Robotics">Lego Robotics</option>
                        <option value="Scratch Coding">Scratch Coding</option>
                        <option value="Python Coding">Python Coding</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                      </select>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl active:scale-98 flex items-center justify-center gap-2 text-sm uppercase tracking-wider pt-3"
                    >
                      <Send className="w-4 h-4" />
                      Get Free Consultation
                    </button>

                    <p className="text-[10px] text-gray-400 text-center pt-1">
                      By submitting, you agree to receive a callback or message regarding Dreambox courses.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}