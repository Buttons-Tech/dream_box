// import Navbar from '@/components/Navbar';
import PropertyCard from './PropertyCard';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center bg-[url('/lagos-skyline.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
        
        <div className="relative z-10 w-full max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Find a Home in Lagos <br/> <span className="text-emerald-400 font-medium italic">Without the "Agent" Stress.</span>
          </h1>
          
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Verified properties in Igando, Lekki, and beyond. NIN-linked landlords, CDA-approved listings, and direct rent renewals.
          </p>

          {/* SEARCH BAR BOX */}
          <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
            <select className="flex-1 p-4 bg-transparent border-none focus:ring-0 text-slate-700 font-medium">
              <option>Select Neighborhood (e.g., Igando)</option>
              <option>Lekki Phase 1</option>
              <option>Igando CDA Zone</option>
              <option>Ikeja Mainland</option>
            </select>
            <div className="h-10 w-[1px] bg-slate-200 hidden md:block self-center" />
            <select className="flex-1 p-4 bg-transparent border-none focus:ring-0 text-slate-700 font-medium">
              <option>Property Type</option>
              <option>Self-Contained</option>
              <option>Office Space</option>
              <option>Event Center</option>
              <option>Land</option>
            </select>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg">
              Search Rently
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUST MARK SECTION */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold text-slate-800">100%</h4>
            <p className="text-slate-500">NIN Verified Users</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-slate-800">0</h4>
            <p className="text-slate-500">Illegal Agent Fees</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-slate-800">CDA</h4>
            <p className="text-slate-500">Direct Landlord Access</p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED LISTINGS */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured in Igando & Lekki</h2>
            <p className="text-slate-500">The most trusted listings of the week.</p>
          </div>
          <button className="text-emerald-600 font-semibold hover:underline">View all properties →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map through your MongoDB data here */}
          {/* <PropertyCard /> */}
        </div>
      </section>
    </div>
  );
}

