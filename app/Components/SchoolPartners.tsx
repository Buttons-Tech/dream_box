const SCHOOLS = [
  "Tiny Treasures School",
  "Citytop School",
  "Pampers School",
  "Berkley Academy",
  "Fitcharis School",
  "St. Saviours School",
  "Richfield School"
];

export default function SchoolPartners() {
  return (
    <section id="partners" className="py-12 bg-amber-400 border-y-4 border-amber-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <h3 className="text-amber-950 font-black uppercase tracking-widest text-sm">Proudly Partnering With Leading Schools</h3>
      </div>
      
      {/* Sliding Marquee Bar */}
      <div className="flex space-x-8 animate-marquee whitespace-nowrap overflow-x-auto no-scrollbar py-2">
        {SCHOOLS.concat(SCHOOLS).map((school, idx) => (
          <div 
            key={idx}
            className="inline-flex items-center bg-white/90 border-2 border-amber-900/20 px-6 py-3 rounded-2xl shadow-sm text-amber-950 font-black text-lg"
          >
            🏫 {school}
          </div>
        ))}
      </div>
    </section>
  );
}