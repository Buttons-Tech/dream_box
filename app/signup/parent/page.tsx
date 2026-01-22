"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, Heart, Baby, ArrowRight, ShieldCheck } from 'lucide-react';

const ParentSignup = () => {
  const router = useRouter();
  const [parentInfo, setParentInfo] = useState({ fullName: '', email: '', phone: '', country: '' });
  const [children, setChildren] = useState([{ firstName: '', age: '', interest: 'Coding', notes: '' }]);

  const addChild = () => setChildren([...children, { firstName: '', age: '', interest: 'Coding', notes: '' }]);
  
  const removeChild = (index: number) => {
    const updated = children.filter((_, i) => i !== index);
    setChildren(updated);
  };

  const handleChildChange = (index: number, field: string, value: string) => {
    const updated = [...children];
    updated[index] = { ...updated[index], [field]: value };
    setChildren(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...parentInfo, children };
    
    const res = await fetch('/api/signup/parent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) router.push('/signup/success');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFE] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-purple-100 overflow-hidden border border-purple-50">
        <div className="bg-[#6347D1] p-10 text-white text-center">
          <Heart className="mx-auto mb-4 text-pink-400" size={40} fill="currentColor" />
          <h1 className="text-3xl font-black">Begin the Journey.</h1>
          <p className="opacity-80 mt-2">Empowering your children through tech and creativity.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-10">
          {/* Parent Info */}
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <ShieldCheck className="text-blue-500" size={20} /> Parent/Guardian Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Full Name" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-purple-400" onChange={e => setParentInfo({...parentInfo, fullName: e.target.value})} />
              <input required type="email" placeholder="Email Address" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-purple-400" onChange={e => setParentInfo({...parentInfo, email: e.target.value})} />
              <input required placeholder="Phone Number" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-purple-400" onChange={e => setParentInfo({...parentInfo, phone: e.target.value})} />
              <select required className="p-4 bg-gray-50 rounded-2xl outline-none" onChange={e => setParentInfo({...parentInfo, country: e.target.value})}>
                <option value="">Select Country</option>
                <option>Nigeria</option><option>Canada</option><option>UK</option><option>USA</option>
              </select>
            </div>
          </section>

          {/* Children Info */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <Baby className="text-orange-400" size={20} /> Student Information
              </h3>
              <button type="button" onClick={addChild} className="text-[#6347D1] text-sm font-bold flex items-center gap-1 hover:underline">
                <Plus size={16} /> Add another child
              </button>
            </div>

            {children.map((child, index) => (
              <div key={index} className="p-6 bg-purple-50/50 rounded-[2rem] border border-purple-100 relative">
                {index > 0 && (
                  <button onClick={() => removeChild(index)} className="absolute top-4 right-4 text-red-400 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                )}
                <div className="grid md:grid-cols-3 gap-4">
                  <input required placeholder="Child's Name" className="p-3 bg-white rounded-xl outline-none" value={child.firstName} onChange={e => handleChildChange(index, 'firstName', e.target.value)} />
                  <input required type="number" placeholder="Age" className="p-3 bg-white rounded-xl outline-none" value={child.age} onChange={e => handleChildChange(index, 'age', e.target.value)} />
                  <select className="p-3 bg-white rounded-xl outline-none" value={child.interest} onChange={e => handleChildChange(index, 'interest', e.target.value)}>
                    <option>Coding</option><option>Robotics</option><option>Academic</option><option>Special Needs</option>
                  </select>
                </div>
                <textarea placeholder="Any specific learning goals or health notes?" className="w-full mt-4 p-3 bg-white rounded-xl outline-none h-20" onChange={e => handleChildChange(index, 'notes', e.target.value)} />
              </div>
            ))}
          </section>

          <button type="submit" className="w-full bg-[#6347D1] text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 group">
            Enroll Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParentSignup;