"use client";
import React, { useState } from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentId: string; // The ID of the girl child you taught
}

export default function ReportModal({ isOpen, onClose, studentId }: ReportModalProps) {
  const [reportType, setReportType] = useState('monthly');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    const payload = {
      studentId,
      type: reportType,
      content,
      date: new Date().toISOString(),
    };

    // Replace with your backend endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert("Report Sent Successfully!");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-emerald-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl">
        <h2 className="text-2xl font-black text-gray-900 uppercase italic mb-6">
          Submit <span className="text-emerald-600">Student Report</span>
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-[10px] font-black uppercase text-gray-400">Report Type</label>
            <select 
              className="w-full mt-1 p-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold uppercase outline-emerald-600"
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="introductory">Introductory Report</option>
              <option value="monthly">Monthly Academic Report</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-gray-400">Observations & Feedback</label>
            <textarea 
              rows={6}
              placeholder="How did the lesson go? Mention strengths and areas for growth..."
              className="w-full mt-1 p-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-medium outline-emerald-600"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 py-4 text-xs font-black uppercase text-gray-400 hover:text-gray-600"
            >
              Cancel
            </button>
            <button 
              onClick={handleSubmit}
              className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-100"
            >
              Post Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}