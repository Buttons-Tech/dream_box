const Partners2 = () => {
  const countries = ["Nigeria", "Canada", "UK", "US", "China"];
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 font-semibold mb-8 uppercase tracking-widest">Trusted by Schools in</p>
        <div className="flex justify-around items-center flex-wrap gap-8 grayscale opacity-70">
          {countries.map(country => (
            <span key={country} className="text-2xl font-bold text-gray-400">{country}</span>
          ))}
        </div>
        <div className="mt-12 flex space-x-12 animate-marquee whitespace-nowrap">
           {/* Placeholder for partner logos sliding */}
           {[1,2,3,4,5,6].map(i => (
             <div key={i} className="h-12 w-32 bg-gray-200 rounded animate-pulse inline-block"></div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Partners2;