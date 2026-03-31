"use client";
import React, { useState } from 'react';
import { Subject } from '@/types';

const MOCK_SUBJECTS: Subject[] = [
  { id: '1', name: 'Coding', price: 15000, category: 'tech' },
  { id: '2', name: 'Robotics', price: 20000, category: 'tech' },
  { id: '3', name: 'Mathematics', price: 12000, category: 'academic' },
];

const SubjectPicker: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSubject = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedIds.reduce((acc, id) => {
    const sub = MOCK_SUBJECTS.find(s => s.id === id);
    return acc + (sub?.price || 0);
  }, 0);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-purple-700 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-2">Equip Your Creator</h3>
      <p className="text-gray-500 mb-8 text-sm italic">S{`elect the subjects for this term's mission.`}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {MOCK_SUBJECTS.map(sub => (
          <button 
            key={sub.id}
            onClick={() => toggleSubject(sub.id)}
            className={`p-5 border-2 rounded-2xl text-left transition-all ${
              selectedIds.includes(sub.id) 
                ? 'border-purple-700 bg-purple-50' 
                : 'border-gray-100 hover:border-purple-200'
            }`}
          >
            <p className="font-bold text-gray-900">{sub.name}</p>
            <p className="text-sm text-purple-600 font-mono">₦{sub.price.toLocaleString()}</p>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center border-t pt-6">
        <div>
          <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Total Investment</p>
          <p className="text-3xl font-black text-purple-700">₦{totalPrice.toLocaleString()}</p>
        </div>
        <button 
          disabled={selectedIds.length === 0}
          className="bg-yellow-400 text-purple-900 px-10 py-4 rounded-2xl font-black hover:bg-yellow-500 transition disabled:opacity-50"
        >
          DEPLOY MISSION
        </button>
      </div>
    </div>
  );
};

export default SubjectPicker;