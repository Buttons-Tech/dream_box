"use client"
import Link from "next/link";
import React, { useState } from "react";

const clubs = [
    { name: "Coding", enrolled: 42 },
    { name: "Robotics", enrolled: 28 },
    { name: "Early Years", enrolled: 35 },
];

const schedules = [
    { class: "Math", time: "09:00 - 10:00", room: "A1" },
    { class: "Science", time: "10:15 - 11:15", room: "B2" },
    { class: "Art", time: "11:30 - 12:30", room: "C3" },
];

export default function SchoolDashboard() {
    const [showForm, setShowForm] = useState(false);
    const [newClub, setNewClub] = useState("");
    const [clubList, setClubList] = useState(clubs);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (newClub.trim()) {
            setClubList([...clubList, { name: newClub, enrolled: 0 }]);
            setNewClub("");
            setShowForm(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">School Dashboard</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Clubs Section */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Registered Clubs</h2>
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                onClick={() => setShowForm(true)}
                            >
                                Register a New Club
                            </button>
                        </div>
                        <ul>
                            {clubList.map((club, idx) => (
                                <li
                                    key={club.name + idx}
                                    className="flex justify-between items-center py-2 border-b last:border-b-0"
                                >
                                    <span className="font-medium">{club.name}</span>
                                    <span className="text-gray-500 text-sm">
                                        Enrolled: {club.enrolled}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        {showForm && (
                            <form className="mt-4 flex gap-2" onSubmit={handleRegister}>
                                <input
                                    type="text"
                                    className="border rounded px-2 py-1 flex-1"
                                    placeholder="Club Name"
                                    value={newClub}
                                    onChange={(e) => setNewClub(e.target.value)}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                                >
                                    Add
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition"
                                    onClick={() => setShowForm(false)}
                                >
                                    Cancel
                                </button>
                            </form>
                        )}
                    </div>
                    {/* Schedules Section */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Class Schedules</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="py-2">Class</th>
                                    <th className="py-2">Time</th>
                                    <th className="py-2">Room</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schedules.map((sched, idx) => (
                                    <tr key={sched.class + idx} className="border-t">
                                        <td className="py-2">{sched.class}</td>
                                        <td className="py-2">{sched.time}</td>
                                        <td className="py-2">{sched.room}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Link href="/" className='text-[20px] text-[#A40C76] underline flex justify-center mb-8'>
                  <span className=''>return to home</span>
                  </Link>
        </div>
    );
}