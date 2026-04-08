"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Full School Registration State
  const [formData, setFormData] = useState({
    fullName: '',
    parentEmail: '',
    gender: 'Male',
    age: '',
    currentClass: '',
    country: 'Nigeria',
    enrolledSubjects: [] as string[],
    favouriteCharacter: ''
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      enrolledSubjects: prev.enrolledSubjects.includes(subject)
        ? prev.enrolledSubjects.filter(s => s !== subject)
        : [...prev.enrolledSubjects, subject]
    }));
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Step 1 validation check: only move to step 2 if on step 1
    if (step === 1) {
      if (!formData.fullName || !formData.parentEmail) {
        alert("Please fill in the required fields.");
        return;
      }
      setStep(2);
      return;
    }

    // Step 2 logic: Final submission to NestJS Backend
    setLoading(true);
    try {
      const res = await fetch('https://dreambox-server.onrender.com/users/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          role: 'student' // Hardcoded role for student onboarding
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save the unique ID and Name for the Dashboard
        localStorage.setItem('dbx_token', data.access_token || '');
        localStorage.setItem('pilot_id', data._id);
        localStorage.setItem('pilot_name', data.fullName);
        setStep(3); // Success/Payment Step
      } else {
        alert(data.message || "Registration encountered an error.");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      alert("Failed to connect to the Dreambox server. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02020a]/95 backdrop-blur-xl p-4">
      <div className="bg-white rounded-[3rem] max-w-lg w-full p-10 relative border-b-[12px] border-purple-600 shadow-2xl overflow-hidden text-gray-900">
        
        {/* Progress Visualizer */}
        <div className="absolute top-0 left-0 h-2 bg-gray-100 w-full">
          <div 
            className="h-full bg-purple-600 transition-all duration-700 ease-out" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleRegistration} className="space-y-6 mt-4">
          
          {/* STEP 1: PERSONAL IDENTITY */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter">Student Intake</h2>
              <p className="text-gray-500 text-sm">Welcome to the Academy. Enter your details below.</p>
              
              <div className="space-y-4">
                <input 
                  required 
                  placeholder="Child's Full Name" 
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500 transition-all text-gray-800"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
                
                <input 
                  required 
                  type="email" 
                  placeholder="Parent Email Address" 
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500 transition-all text-gray-800"
                  value={formData.parentEmail}
                  onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                />

                <div className="grid grid-cols-2 gap-4">
                  <select 
                    className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500 text-gray-800"
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <input 
                    required 
                    type="number" 
                    placeholder="Age" 
                    className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500 text-gray-800"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: ACADEMIC & SUBJECT SELECTION */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-purple-700">Academic Profile</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <input 
                  required 
                  placeholder="Class (e.g. Year 8)" 
                  className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500 text-gray-800"
                  value={formData.currentClass}
                  onChange={(e) => setFormData({...formData, currentClass: e.target.value})}
                />
                <input 
                  required 
                  placeholder="Country" 
                  className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500 text-gray-800"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-2">Enrolled Subjects (Pick Multiple)</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Coding', 'Robotics', 'Maths', 'STEM', 'English', 'Arts'].map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => toggleSubject(sub)}
                      className={`p-3 rounded-xl border-2 transition-all text-xs font-bold ${
                        formData.enrolledSubjects.includes(sub) 
                        ? 'border-purple-600 bg-purple-50 text-purple-700' 
                        : 'border-gray-100 text-gray-400 hover:border-gray-200'
                      }`}
                    >
                      {formData.enrolledSubjects.includes(sub) ? '✓ ' : ''}{sub}
                    </button>
                  ))}
                </div>
              </div>

              <input 
                placeholder="Favourite Superhero/Character" 
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500 text-gray-800"
                value={formData.favouriteCharacter}
                onChange={(e) => setFormData({...formData, favouriteCharacter: e.target.value})}
              />
            </div>
          )}

          {/* STEP 3: SUCCESS & PAYMENT REDIRECT */}
          {step === 3 && (
            <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
              <div className="text-6xl drop-shadow-xl">✨</div>
              <h2 className="text-3xl font-black text-purple-700 italic uppercase">Account Ready</h2>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                Profile created for <b>{formData.fullName}</b>. To activate your full access and start learning, please complete the enrollment fee.
              </p>
              
              <div className="bg-purple-50 p-6 rounded-[2.5rem] border-2 border-dashed border-purple-200 shadow-inner">
                <p className="text-xs text-purple-500 font-bold uppercase tracking-widest mb-2 italic underline">Activation Details</p>
                <p className="text-2xl font-black text-gray-900 tracking-[0.2em]">0123456789</p>
                <p className="font-bold text-gray-700 text-xs mt-1 uppercase">Moniepoint / OPay</p>
                <p className="text-[10px] text-gray-400 mt-2 font-mono">Buttons Technology Limited</p>
              </div>

              <button 
                type="button"
                onClick={() => isClient && router.push("/dashboard")}
                className="w-full bg-green-600 text-white py-5 rounded-2xl font-black shadow-xl hover:bg-green-700 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-[0.2em]"
              >
                Enter Dashboard
              </button>
            </div>
          )}

          {/* Navigation Controls */}
          {step < 3 && (
            <div className="flex gap-4 pt-4">
              {step === 2 && (
                <button 
                  type="button" 
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 text-gray-400 font-bold hover:text-gray-900 transition-colors"
                >
                  BACK
                </button>
              )}
              <button 
                type="submit" 
                disabled={loading}
                className="flex-[2] bg-purple-700 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-purple-800 transition-all shadow-lg shadow-purple-200 disabled:opacity-50"
              >
                {loading ? "SAVING PILOT..." : step === 1 ? "NEXT: ACADEMICS" : "FINISH REGISTRATION"}
              </button>
            </div>
          )}
        </form>

        {/* Exit Icon */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-300 hover:text-gray-900 transition-colors text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SignupModal;