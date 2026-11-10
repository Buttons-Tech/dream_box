'use client';
import { useState } from 'react';

interface OnboardingModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'signup';
  selectedCourse?: { name: string; price: number } | null;
  onClose: () => void;
}

export default function OnboardingModal({ isOpen, initialMode = 'signup', selectedCourse, onClose }: OnboardingModalProps) {
  const [mode, setMode] = useState<'login' | 'signup' | 'payment'>(initialMode);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    email: '',
    password: '',
    age: '',
    school: '',
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[32px] border-4 border-amber-300 shadow-2xl w-full max-w-lg overflow-hidden p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full font-black text-slate-600 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <span className="text-3xl">📦</span>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {mode === 'login' ? 'Welcome Back!' : mode === 'payment' ? 'Complete Subscription 💳' : 'Dreambox Child Onboarding'}
          </h3>
          <p className="text-xs font-bold text-slate-400">Build Your Dreams • Egan Center</p>
        </div>

        {/* Selected Course Banner if active */}
        {selectedCourse && mode === 'signup' && (
          <div className="mb-6 bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase block">Selected Course</span>
              <span className="font-black text-slate-900 text-lg">{selectedCourse.name}</span>
            </div>
            <span className="bg-amber-400 text-amber-950 font-black px-3 py-1 rounded-xl">₦{selectedCourse.price.toLocaleString()}</span>
          </div>
        )}

        {/* Form Content */}
        {mode === 'login' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase mb-1">Email Address</label>
              <input type="email" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-amber-500" placeholder="parent@example.com" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase mb-1">Password</label>
              <input type="password" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-amber-500" placeholder="••••••••" />
            </div>
            <button className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-4 rounded-xl shadow-[0_4px_0_0_#d97706] transition-all mt-2">
              Log In to Portal 🚀
            </button>
            <p className="text-center text-sm text-slate-500 pt-2 font-medium">
              Don&apos;t have an account? <button onClick={() => setMode('signup')} className="text-amber-600 font-bold underline">Sign up</button>
            </p>
          </div>
        ) : mode === 'payment' ? (
          <div className="space-y-6 text-center">
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-6 rounded-2xl">
              <span className="text-xs font-bold text-slate-400 uppercase block">Bank Transfer Details</span>
              <h4 className="text-xl font-black text-slate-900 mt-1">Firstbank of Nigeria</h4>
              <p className="text-2xl font-mono font-black text-amber-600 tracking-wider my-2">2043436716</p>
              <span className="bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full">Paatee Nig Ltd</span>
            </div>
            <p className="text-xs font-medium text-slate-500">
              Please transfer the exact amount and click confirmation below once payment is completed.
            </p>
            <button 
              onClick={() => { alert('Payment confirmation submitted! Our team will verify shortly.'); onClose(); }}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-xl shadow-[0_4px_0_0_#047857] transition-all"
            >
              I Have Made the Transfer ✅
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase mb-1">Child&apos;s Full Name</label>
              <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-amber-500" placeholder="e.g. David Junior" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black text-slate-600 uppercase mb-1">Child&apos;s Age</label>
                <input type="number" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-amber-500" placeholder="e.g. 7" />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-600 uppercase mb-1">School Name</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-amber-500" placeholder="e.g. Tiny Treasures" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase mb-1">Parent&apos;s Email & Password</label>
              <input type="email" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-amber-500 mb-2" placeholder="parent@email.com" />
              <input type="password" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-amber-500" placeholder="Create your password" />
            </div>
            <button 
              onClick={() => setMode('payment')}
              className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-4 rounded-xl shadow-[0_4px_0_0_#d97706] transition-all mt-2"
            >
              Proceed to Payment 💳
            </button>
            <p className="text-center text-sm text-slate-500 pt-2 font-medium">
              Already registered? <button onClick={() => setMode('login')} className="text-amber-600 font-bold underline">Log in</button>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}