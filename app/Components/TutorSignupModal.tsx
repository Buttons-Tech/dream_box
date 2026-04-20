"use client";
import Router from 'next/router';
import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TutorSignupModal({ isOpen, onClose }: ModalProps) {
    
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    experience: '',
    specialization: 'IGCSE English',
    password: '',
    role: 'tutor' // Fixed as per your backend guy's instruction
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/onboard`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // This matches his JSON structure perfectly
      });

      if (response.ok) {
        
        const data = await response.json();
  // Store the user data
  localStorage.setItem('dbx_user', JSON.stringify(data.user));
  localStorage.setItem('dbx_token', data.token);
  
  // Direct to the Tutor Dashboard
  Router.push('/tutor'); 
  onClose();
        onClose();
      }
    } catch (error) {
      console.error("Onboarding error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-purple-900/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-8 md:p-10 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-black text-gray-900 uppercase italic">
              Join the <span className="text-purple-700">Faculty</span>
            </h2>
            <button onClick={onClose} className="text-gray-400 font-bold">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              required
              type="text" 
              placeholder="FULL NAME" 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase tracking-widest outline-purple-700 text-gray-900 !opacity-100 [appearance:none] [-webkit-appearance:none]"
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
            
            <div className="grid grid-cols-2 gap-4">
               <input 
                required
                type="text" 
                placeholder="CITY / COUNTRY" 
                className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-[10px] font-bold uppercase tracking-widest outline-purple-700 text-gray-900 !opacity-100 [appearance:none] [-webkit-appearance:none]"
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
              <input 
                required
                type="text" 
                placeholder="EXP (e.g. 5 Years)" 
                className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-[10px] font-bold uppercase tracking-widest outline-purple-700 text-gray-900 !opacity-100 [appearance:none] [-webkit-appearance:none]"
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
              />
            </div>

            <select 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-[10px] font-bold uppercase tracking-widest outline-purple-700 appearance-none"
              onChange={(e) => setFormData({...formData, specialization: e.target.value})}
            >
              <option value="IGCSE English">IGCSE ENGLISH</option>
              <option value="IGCSE Mathematics">IGCSE MATHEMATICS</option>
              <option value="Early Years Literacy">EARLY YEARS LITERACY</option>
              <option value="Robotics & STEM">ROBOTICS & STEM</option>
            </select>

            <input 
              required
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase tracking-widest outline-purple-700 text-gray-900 !opacity-100 [appearance:none] [-webkit-appearance:none]"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />

            <input 
              required
              type="password" 
              placeholder="PASSWORD" 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase tracking-widest outline-purple-700 text-gray-900 !opacity-100 [appearance:none] [-webkit-appearance:none]"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />

            <button 
              disabled={loading}
              className="w-full bg-purple-700 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-purple-200 hover:bg-purple-800 transition-all disabled:opacity-50"
            >
              {loading ? 'SYNCING...' : 'APPLY TO TEACH'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}