"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Ensure your backend requires a password
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://dreambox-server.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // RE-PERSIST DATA
        localStorage.setItem('dbx_token', data.access_token);
        localStorage.setItem('dbx_user', JSON.stringify(data.user));
        localStorage.setItem('pilot_name', data.user.fullName);
        
        router.push('/dashboard');
        onClose();
      } else {
        alert(data.message || "Invalid Credentials");
      }
    } catch (err) {
      alert("Server Connection Failed" + err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="bg-white rounded-[2.5rem] w-full max-w-md p-10 shadow-2xl">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6">Mission Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" placeholder="Parent Email" required
            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-600"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Password" required
            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-600"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" disabled={loading}
            className="w-full py-4 bg-purple-700 text-white font-black rounded-2xl uppercase tracking-widest hover:bg-purple-800 transition-all shadow-lg"
          >
            {loading ? "AUTHENTICATING..." : "Launch Dashboard"}
          </button>
        </form>
        <button onClick={onClose} className="w-full mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cancel</button>
      </div>
    </div>
  );
}