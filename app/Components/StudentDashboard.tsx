"use client";
import React, { useState } from 'react';
import { UserRole } from '@/types';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UnifiedSignup: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<UserRole.STUDENT | UserRole.SCHOOL_ADMIN>(UserRole.STUDENT);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    schoolName: '',
  });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role }),
      });
      
      if (response.ok) {
        // Handle success (e.g., redirect to dashboard)
        onClose();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-purple-900/60 backdrop-blur-md p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border-b-8 border-yellow-400">
        <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
          <button 
            type="button"
            onClick={() => setRole(UserRole.STUDENT)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${role === UserRole.STUDENT ? 'bg-purple-700 text-white' : 'text-gray-500'}`}
          >PARENT / STUDENT</button>
          <button 
            type="button"
            onClick={() => setRole(UserRole.SCHOOL_ADMIN)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${role === UserRole.SCHOOL_ADMIN ? 'bg-purple-700 text-white' : 'text-gray-500'}`}
          >SCHOOL ADMIN</button>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <input 
            required 
            placeholder={role === UserRole.STUDENT ? "Child's Full Name" : "Admin Name"} 
            className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-purple-500 rounded-2xl outline-none" 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          />
          <input 
            required 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-purple-500 rounded-2xl outline-none" 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          />
          {role === UserRole.SCHOOL_ADMIN && (
            <input 
              required 
              placeholder="Name of School" 
              className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-purple-500 rounded-2xl outline-none" 
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })} 
            />
          )}

          <button 
            disabled={loading}
            className="w-full bg-purple-700 text-white py-4 rounded-2xl font-black text-lg hover:bg-purple-800 transition disabled:opacity-50"
          >
            {loading ? 'INITIALIZING...' : role === UserRole.STUDENT ? `Launch ${formData.name || 'Journey'}` : 'Register School'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UnifiedSignup;