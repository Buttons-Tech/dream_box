"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SignupModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen }) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isClient, setIsClient] = useState(false);

  // Ensure we are on the client to avoid "window is not defined"
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOnboard = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://dreambox-server.onrender.com/users/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          fullName: formData.name, // Matches your backend example
          email: formData.email,
          role: 'student' 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Saving exactly what your backend sends
        localStorage.setItem('dbx_token', data.access_token);
        localStorage.setItem('pilot_id', data._id);
        localStorage.setItem('pilot_name', data.fullName);
        
        setStep(2); // Move to Moniepoint instructions
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Link to HQ failed:", err);
      alert("Network error. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleEnterDashboard = () => {
    if (isClient) {
      router.push("/dashboard/spaceship");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-purple-900/80 backdrop-blur-md p-4">
      <div className="bg-white rounded-[2.5rem] max-w-md w-full p-10 relative border-b-[12px] border-yellow-400 shadow-2xl">
        
        {step === 1 ? (
          <form onSubmit={handleOnboard} className="space-y-6">
            <h2 className="text-2xl font-black text-gray-900 italic uppercase">Pilot Intake</h2>
            <div className="space-y-4">
              <input 
                required placeholder="Child's Full Name" 
                className="w-full p-4 bg-gray-50 border rounded-2xl outline-none text-gray-800"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                required type="email" placeholder="Parent Email" 
                className="w-full p-4 bg-gray-50 border rounded-2xl outline-none text-gray-800"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <button disabled={loading} className="w-full bg-purple-700 text-white py-4 rounded-2xl font-bold uppercase tracking-widest disabled:opacity-50">
              {loading ? "INITIALIZING..." : "NEXT: ACTIVATION"}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-black text-gray-900 italic text-purple-700">ACCOUNT CREATED</h2>
            <p className="text-gray-500 text-sm">To activate <b>{formData.name}</b>, transfer <b>₦20,000</b> to:</p>
            
            <div className="bg-purple-50 p-6 rounded-2xl border-2 border-dashed border-purple-200 font-mono">
              <p className="text-xl font-black text-gray-900">0123456789</p>
              <p className="font-bold text-gray-700">Moniepoint / OPay</p>
              <p className="text-xs text-gray-500">Buttons Technology / Dreambox</p>
            </div>

            <button 
              onClick={handleEnterDashboard}
              className="w-full bg-green-600 text-white py-4 rounded-2xl font-black shadow-lg hover:bg-green-700 transition"
            >
              I HAVE PAID (ENTER DASHBOARD)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupModal;