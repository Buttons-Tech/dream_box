"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SignupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [childName, setChildName] = useState('');
  const [parentEmail, setParentEmail] = useState('');

  const handleLaunch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // HIT YOUR LIVE RENDER BACKEND
      const res = await fetch('https://dreambox-server.onrender.com/users/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          fullName: childName, 
          email: parentEmail,
          role: 'student' 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Store the JWT and Name for the Spaceship Dashboard
        localStorage.setItem('dbx_token', data.access_token || data.token);
        localStorage.setItem('child_name', childName);

        // IMMEDIATE WARP TO DASHBOARD
        router.push('/dashboard/spaceship');
      } else {
        alert(data.message || "Launch failed. Check console.");
      }
    } catch (err) {
      console.error("Connection Lost:", err);
      alert("Could not reach the Dreambox Server.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-purple-900/80 backdrop-blur-xl p-4">
      <div className="bg-white rounded-[2.5rem] max-w-md w-full p-10 shadow-2xl relative border-b-[12px] border-yellow-400">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900 italic tracking-tighter">PILOT INTAKE</h2>
          <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mt-1">Dreambox Terminal v2.0</p>
        </div>

        <form onSubmit={handleLaunch} className="space-y-5">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-purple-700 ml-2">CHILD NAME</label>
            <input 
              required
              placeholder="Full Name" 
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-purple-600 outline-none font-bold text-gray-800"
              onChange={(e) => setChildName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-purple-700 ml-2">PARENT EMAIL</label>
            <input 
              required
              type="email"
              placeholder="Email Address" 
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-purple-600 outline-none text-gray-800"
              onChange={(e) => setParentEmail(e.target.value)}
            />
          </div>
          
          <button 
            disabled={loading}
            className="w-full bg-purple-700 text-white py-5 rounded-2xl font-black text-xl hover:bg-purple-800 transition shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? "WARPING..." : "LAUNCH TO DASHBOARD"}
            <span className="text-yellow-400">🚀</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;