// ... (keep the rest of your tutor page code above)

export default function TutorDashboard() {
  // ... (keep your existing state and useEffect)

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 pb-20 space-y-8">
      {/* Banner and Stats go here... */}
      
      {/* SESSIONS FEED */}
      <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
        <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Upcoming Sessions</h2>
        {/* ... sessions logic */}
      </section>

      {/* CALLING THE REPORT SECTION HERE TO FIX THE WARNING */}
      <ReportSection />
    </div>
  );
}

// Keep your ReportSection definition below...
function ReportSection() {
  return (
    <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
       {/* ... existing report section code */}
    </section>
  );
}