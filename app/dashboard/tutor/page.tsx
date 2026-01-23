"use client";
import React, { useEffect, useState } from 'react';

// 1. Define the interface
interface TutorData {
  _id: string;
  firstName: string;
  lastName: string;
  expertise: string[];
  status: string;
  email: string;
}

export default function TutorDashboard() {
  const [tutors, setTutors] = useState<TutorData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await fetch('/api/tutors');
        const data = await res.json();
        setTutors(data);
      } catch (error: unknown) {
        // FIXED LINE BELOW: We are now actually USING the 'error' variable
        console.error("Fetch error details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Tutor Management</h1>
      
      {loading ? <p>Loading...</p> : (
        <div className="grid gap-4">
          {tutors.map((tutor) => (
            <div key={tutor._id} className="p-4 border rounded-xl shadow-sm bg-white">
              <h3 className="font-bold text-lg">{tutor.firstName} {tutor.lastName}</h3>
              <p className="text-gray-600">{tutor.email}</p>
              <div className="mt-2 flex gap-2">
                {tutor.expertise.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <span className={`mt-3 inline-block text-sm font-bold ${tutor.status === 'approved' ? 'text-green-600' : 'text-orange-500'}`}>
                Status: {tutor.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}