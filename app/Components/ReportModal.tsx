"use client";
import React, { useState } from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentId: string;
}

export default function ReportModal({ isOpen, onClose, studentId }: ReportModalProps) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!content) return alert("Please type your report content.");
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('dbx_token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          studentId, // This tracks WHICH student the report belongs to
          content,
          date: new Date().toISOString()
        })
      });

      if (response.ok) {
        alert("Report submitted successfully!");
        setContent("");
        onClose();
      } else {
        alert("Failed to submit. Check server connection.");
      }
    } catch (err) {
      alert("Error submitting report.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-emerald-950/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-xl rounded-[2.5rem] p-8 shadow-2xl">
        <h2 className="text-2xl font-black italic uppercase text-emerald-900">New Report</h2>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type feedback here..."
          className="w-full h-48 bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4 text-sm font-medium outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <div className="mt-8 flex gap-3">
          <button onClick={onClose} className="w-full py-4 text-[10px] font-black uppercase text-gray-400">Cancel</button>
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-emerald-600 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit Report"}
          </button>
        </div>
      </div>
    </div>
  );
}