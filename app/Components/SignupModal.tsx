"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

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
    if (step === 1) { setStep(2); return; }

    setLoading(true);
    try {
      const res = await fetch('https://dreambox-server.onrender.com/users/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: 'student' }),
      });

      const data = await res.json();
      
      if (res.ok) {
        // --- THE "FORCE-SYNC" PERSISTENCE ENGINE ---
        const rawUser = data.user || data;
        const token = data.access_token || "";

        // 1. Clear old traces
        localStorage.clear(); 

        // 2. Write with stringification
        localStorage.setItem('dbx_token', token);
        localStorage.setItem('dbx_user', JSON.stringify(rawUser));
        localStorage.setItem('pilot_name', rawUser.fullName || formData.fullName);

        // 3. HARD VERIFICATION: Loop until confirmed (max 5 tries)
        let verified = false;
        for (let i = 0; i < 5; i++) {
          const check = localStorage.getItem('dbx_user');
          if (check && check !== "undefined") {
            verified = true;
            console.log("Persistence confirmed on attempt " + (i + 1));
            break;
          }
          // Tiny sleep to allow browser I/O to catch up
          await new Promise(r => setTimeout(r, 100));
        }

        if (verified) {
          setStep(3);
        } else {
          throw new Error("Storage Write Timeout");
        }

      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Critical Failure:", err);
      alert("System Error: Could not verify data persistence. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02020a]/95 backdrop-blur-xl p-4 text-gray-900">
      <div className="bg-white rounded-[3rem] max-w-lg w-full p-10 relative border-b-[12px] border-purple-600 shadow-2xl overflow-hidden">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-2 bg-gray-100 w-full">
          <div 
            className="h-full bg-purple-600 transition-all duration-700" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleRegistration} className="space-y-6 mt-4">
          
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter">Student Intake</h2>
              <div className="space-y-1">
                <label htmlFor="fullName" className="text-[10px] font-bold text-gray-400 uppercase ml-2">{`Child's Name`}</label>
                <input id="fullName" name="fullName" required placeholder="Name" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
              </div>
              <div className="space-y-1">
                <label htmlFor="parentEmail" className="text-[10px] font-bold text-gray-400 uppercase ml-2">Parent Email</label>
                <input id="parentEmail" name="parentEmail" required type="email" placeholder="Email" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500" value={formData.parentEmail} onChange={(e) => setFormData({...formData, parentEmail: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="gender" className="text-[10px] font-bold text-gray-400 uppercase ml-2">Gender</label>
                  <select id="gender" name="gender" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}><option value="Male">Male</option><option value="Female">Female</option></select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="age" className="text-[10px] font-bold text-gray-400 uppercase ml-2">Age</label>
                  <input id="age" name="age" required type="number" placeholder="Age" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-purple-700">Academic Profile</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="currentClass" className="text-[10px] font-bold text-gray-400 uppercase ml-2">Class</label>
                  <input id="currentClass" name="currentClass" required placeholder="Year 8" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-500" value={formData.currentClass} onChange={(e) => setFormData({...formData, currentClass: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label htmlFor="country" className="text-[10px] font-bold text-gray-400 uppercase ml-2">Country</label>
                  <input id="country" name="country" required placeholder="Nigeria" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl" value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-2">Subjects</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Coding', 'Robotics', 'Maths', 'STEM'].map((sub) => (
                    <button key={sub} type="button" onClick={() => toggleSubject(sub)} className={`p-3 rounded-xl border-2 text-xs font-bold transition-all ${formData.enrolledSubjects.includes(sub) ? 'border-purple-600 bg-purple-50 text-purple-700' : 'border-gray-100 text-gray-400'}`}>{sub}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
              <div className="text-6xl">✨</div>
              <h2 className="text-3xl font-black text-purple-700 italic uppercase">Sync Complete</h2>
              <p className="text-gray-500 text-sm px-4 leading-relaxed">Account verified and saved locally. Welcome to Dreambox!</p>
              <div className="bg-purple-50 p-6 rounded-[2.5rem] border-2 border-dashed border-purple-200">
                <p className="text-2xl font-black text-gray-900 tracking-widest">9066596603</p>
                <p className="font-bold text-gray-600 text-[10px] uppercase mt-1">PAATEE NIG ltd -Moniepoint</p>
              </div>
              <button type="button" onClick={() => { router.push('/dashboard'); }} className="w-full bg-green-600 text-white py-5 rounded-2xl font-black shadow-xl hover:bg-green-700 transition-all uppercase tracking-widest">Enter Dashboard</button>
            </div>
          )}

          {step < 3 && (
            <div className="flex gap-4 pt-4">
              {step === 2 && <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 text-gray-400 font-bold uppercase">Back</button>}
              <button type="submit" disabled={loading} className="flex-[2] bg-purple-700 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-purple-800 transition-all shadow-lg disabled:opacity-50">{loading ? "SYNCING..." : "Finish"}</button>
            </div>
          )}
        </form>
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-300 hover:text-gray-900 transition-colors">✕</button>
      </div>
    </div>
  );
};

export default SignupModal;