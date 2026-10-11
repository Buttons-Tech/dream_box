export default function LegoRobotics() {
  const images = [
    { title: 'Motorized Rovers', emoji: '🏎️', bg: 'bg-amber-200' },
    { title: 'Smart Sensors', emoji: '📡', bg: 'bg-emerald-200' },
    { title: 'Block Builders', emoji: '🧱', bg: 'bg-blue-200' },
    { title: 'Future Engineers', emoji: '🌟', bg: 'bg-purple-200' },
  ];

  return (
    <section id="robotics" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="bg-purple-100 text-purple-900 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Hands-on Learning</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Lego Robotics Lab at Egan Center 🤖
            </h2>
            <p className="text-slate-600 font-medium">
              Children don't just learn theory; they build physical robots, wire sensors, and write logic scripts to bring their mechanical creations to life! Designed for kids from 3 years and above with safe, modular kits.
            </p>
            <ul className="space-y-3 font-bold text-slate-700">
              <li className="flex items-center space-x-2"><span>✅</span> <span>Encourages spatial intelligence & problem-solving</span></li>
              <li className="flex items-center space-x-2"><span>✅</span> <span>Team collaboration & creative storytelling</span></li>
              <li className="flex items-center space-x-2"><span>✅</span> <span>Guided by expert STEM tutors</span></li>
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {images.map((item, idx) => (
              <div 
                key={idx} 
                className={`${item.bg} border-4 border-slate-900/10 rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-md transform hover:scale-105 transition-transform`}
              >
                <span className="text-5xl mb-3">{item.emoji}</span>
                <span className="font-black text-slate-900">{item.title}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}