const Academies = () => {
  const levels = [
    { 
      name: "Early Years", 
      age: "0-5 Years", 
      desc: "Foundational growth and sensory learning for our youngest explorers.",
      img: "https://images.unsplash.com/photo-1587654711464-3e30d1ca9335?auto=format&fit=crop&q=80" 
    },
    { 
      name: "Dreambox Foundation", 
      age: "Core Academics", 
      desc: "Mastering Mathematics, English, and Science through interactive methods.",
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80" 
    },
    { 
      name: "Dreambox Clubs", 
      age: "School-Based", 
      desc: "On-site coding and robotics clubs where students build apps and robots.",
      img: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80" 
    },
    { 
      name: "Special Needs", 
      age: "Inclusive Learning", 
      desc: "Personalized tech and academic support for children with unique needs.",
      img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80" 
    },
    { 
      name: "Home Schooling", 
      age: "Remote Path", 
      desc: "A structured, global-standard learning journey for home-based students.",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" 
    }
  ];

  return (
    <section id="academies" className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Our Specialized Academies</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Explore our tailored learning paths designed to equip every child for the future.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {levels.map((lvl, i) => (
            <div key={i} className="group flex flex-col h-full bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={lvl.img} 
                  alt={lvl.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {lvl.age}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h4 className="font-bold text-lg mb-2 text-gray-900">{lvl.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {lvl.desc}
                </p>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full text-sm font-semibold text-blue-600 border border-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academies;