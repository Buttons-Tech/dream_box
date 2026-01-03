"use client";
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Code, 
  Cpu, 
  BookOpen, 
  Brain, 
  Upload, 
  ChevronRight, 
  ArrowLeft,
  CheckCircle,
  Globe
} from 'lucide-react';

const TutorSignup: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Info Panel */}
        <div className="md:w-1/3 bg-[#6347D1] p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black mb-4">Join our Global Faculty.</h2>
            <p className="text-purple-100 text-sm leading-relaxed opacity-80">
              Impact students across 4 continents. We're looking for passionate experts in Tech, Academics, and Special Education.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl">
              <Globe size={18} className="text-pink-400" />
              <span className="text-xs font-bold">Remote & Hybrid roles</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl">
              <CheckCircle size={18} className="text-green-400" />
              <span className="text-xs font-bold">Competitive Global Pay</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-2/3 p-10 md:p-14">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-800">Professional Profile</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-400" />
                <input type="text" placeholder="Last Name" className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-400" />
              <select className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-400">
                <option>Current Country of Residence</option>
                <option>Nigeria</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-800">Select Your Expertise</h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">You can select multiple</p>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'coding', label: 'Coding (Python/Scratch)', icon: <Code size={16}/> },
                  { id: 'robotics', label: 'Robotics Engineering', icon: <Cpu size={16}/> },
                  { id: 'special', label: 'Special Needs (IEP)', icon: <Brain size={16}/> },
                  { id: 'math', label: 'Mathematics', icon: <BookOpen size={16}/> },
                  { id: 'english', label: 'English/Diction', icon: <GraduationCap size={16}/> },
                ].map((skill) => (
                  <button
                    key={skill.id}
                    onClick={() => toggleSkill(skill.id)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                      selectedSkills.includes(skill.id) 
                      ? 'border-[#6347D1] bg-indigo-50 text-[#6347D1]' 
                      : 'border-gray-100 text-gray-500 hover:border-gray-200'
                    }`}
                  >
                    {skill.icon}
                    <span className="text-xs font-bold">{skill.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-black text-slate-800 text-left">Credentials</h3>
              <div className="border-2 border-dashed border-gray-200 rounded-[2rem] p-12 hover:border-[#6347D1] transition-colors cursor-pointer group">
                <Upload className="mx-auto text-gray-300 group-hover:text-[#6347D1] mb-4" size={40} />
                <p className="text-sm font-bold text-slate-600">Upload CV / Portfolio</p>
                <p className="text-xs text-gray-400 mt-2">PDF, DOCX up to 10MB</p>
              </div>
              <textarea 
                placeholder="Briefly describe your teaching experience..."
                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-400 h-32"
              ></textarea>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex justify-between gap-4">
            {step > 1 && (
              <button onClick={prevStep} className="px-6 py-4 text-gray-400 font-bold text-sm flex items-center gap-2">
                <ArrowLeft size={16} /> Back
              </button>
            )}
            <button 
              onClick={step === 3 ? () => alert('Submitted!') : nextStep}
              className="flex-1 bg-[#6347D1] text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 ml-auto"
            >
              {step === 3 ? 'Complete Application' : 'Next Step'} <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorSignup;