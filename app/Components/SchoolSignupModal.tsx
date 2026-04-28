"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SchoolSignupModal({ isOpen, onClose }: ModalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Account, 2: Club Details

  const [formData, setFormData] = useState({
    fullName: '', // Admin Name
    schoolName: '',
    email: '',
    password: '',
    role: 'school_admin',
    subject: 'Leggo & Robotics',
    schedule: 'Thursdays'
  });

  const handleOnboard = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // STEP 1: Create the User Account
      const userRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/onboard`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          role: 'school_admin'
        }),
      });

      if (userRes.ok) {
        const userData = await userRes.json();
        localStorage.setItem('dbx_user', JSON.stringify(userData.user));
        localStorage.setItem('dbx_role', userData.user.role);
        
        // STEP 2: Initialize the Club
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clubs/initialize`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            schoolName: formData.schoolName,
            subject: formData.subject,
            schedule: formData.schedule,
            schoolAdminId: userData.user._id
          }),
        });

        router.push('/club'); // Send them to their new dashboard
        onClose();
      }
    } catch (error) {
      console.error("School onboarding failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-[#431407]/80 backdrop-blur-md">
      <div className="bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-gray-900 uppercase italic leading-none">
              Partner <span className="text-orange-600 underline">Registration</span>
            </h2>
            <button onClick={onClose} className="text-gray-400 font-bold">✕</button>
          </div>

          <form onSubmit={handleOnboard} className="space-y-4">
            {step === 1 ? (
              <>
              <input required type="text" placeholder="FULL NAME (e.g. John Adebayo)" 
                  className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase outline-orange-600 text-gray-900 opacity-100 placeholder:text-gray-500 [appearance:none]"
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                <input required type="text" placeholder="SCHOOL NAME (e.g. Richfield Academy)" 
                  className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase outline-orange-600 text-gray-900 opacity-100 placeholder:text-gray-500 [appearance:none]"
                  onChange={(e) => setFormData({...formData, schoolName: e.target.value})} />
                <input required type="email" placeholder="ADMIN EMAIL" 
                  className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase outline-orange-600 text-gray-900 opacity-100 placeholder:text-gray-500 [appearance:none]"
                  onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input required type="password" placeholder="SET PASSWORD" 
                  className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase outline-orange-600 text-gray-900 opacity-100 placeholder:text-gray-500 [appearance:none]"
                  onChange={(e) => setFormData({...formData, password: e.target.value})} />
                <button type="button" onClick={() => setStep(2)} className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-xs uppercase">Next: Club Details</button>
              </>
            ) : (
              <>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2">Primary Subject</label>
                <select className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase outline-orange-600 text-gray-900 opacity-100 placeholder:text-gray-500 [appearance:none]"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}>
                  <option value="Leggo & Robotics">LEGGO & ROBOTICS</option>
                  <option value="Coding for Kids">CODING FOR KIDS</option>
                  <option value="STEM Explorers">STEM EXPLORERS</option>
                </select>
                
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2">Preferred Day</label>
                <select className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase outline-orange-600 text-gray-900 opacity-100 placeholder:text-gray-500 [appearance:none]"
                  onChange={(e) => setFormData({...formData, schedule: e.target.value})}>
                  <option value="Tuesdays">TUESDAYS</option>
                  <option value="Thursdays">THURSDAYS</option>
                </select>

                <div className="flex gap-2">
                  <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-gray-100 text-gray-400 py-5 rounded-2xl font-black text-xs uppercase">Back</button>
                  <button type="submit" disabled={loading} className="w-2/3 bg-orange-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-100">
                    {loading ? 'INITIALIZING...' : 'FINISH & LAUNCH'}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}