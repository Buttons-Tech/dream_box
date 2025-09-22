"use client"
import React, { useState } from "react";

const countries = ["US", "Canada", "UK", "Nigeria", "Kenya", "Ghana"];
const subjects = [
    { name: "Coding", price: 100 },
    { name: "Robotics", price: 120 },
    { name: "Design", price: 90 },
    { name: "Creativity", price: 80 },
    { name: "Early Years", price: 70 },
];

export default function SchoolForms() {
    const [form, setForm] = useState({
        name: "",
        location: "",
        students: "",
        subjects: [] as string[],
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubjectChange = (subject: string) => {
        setForm((prev) => ({
            ...prev,
            subjects: prev.subjects.includes(subject)
                ? prev.subjects.filter((s) => s !== subject)
                : [...prev.subjects, subject],
        }));
    };

    // Calculate payment summary
    const selectedSubjects = subjects.filter((s) =>
        form.subjects.includes(s.name)
    );
    const studentsNum = Number(form.students) || 0;
    const total =
        selectedSubjects.reduce((sum, s) => sum + s.price, 0) * studentsNum;

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">School Registration Form</h2>
            <form className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">School Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Location</label>
                    <select
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                        required
                    >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                            <option key={country}>{country}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block font-medium mb-1">
                        Estimated Number of Students
                    </label>
                    <input
                        type="number"
                        name="students"
                        value={form.students}
                        onChange={handleChange}
                        min={1}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Select Subjects</label>
                    <div className="grid grid-cols-2 gap-2">
                        {subjects.map((subject) => (
                            <label key={subject.name} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={form.subjects.includes(subject.name)}
                                    onChange={() => handleSubjectChange(subject.name)}
                                    className="accent-blue-600"
                                />
                                <span>{subject.name}</span>
                                <span className="text-xs text-gray-500">
                                    (${subject.price}/student)
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded mt-4">
                    <h3 className="font-semibold mb-2">Payment Summary</h3>
                    <ul className="mb-2 text-sm">
                        {selectedSubjects.length === 0 ? (
                            <li>No subjects selected.</li>
                        ) : (
                            selectedSubjects.map((s) => (
                                <li key={s.name}>
                                    {s.name}: ${s.price} x {studentsNum} students = $
                                    {s.price * studentsNum}
                                </li>
                            ))
                        )}
                    </ul>
                    <div className="font-bold">
                        Total: ${total}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                >
                    Checkout
                </button>
            </form>
        </div>
    );
}