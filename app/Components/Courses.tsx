interface CoursesProps {
  onSelectCourse: (courseName: string, price: number) => void;
}

const COURSES = [
  { id: 'maths', name: 'Mathematics', price: 10000, icon: '🔢', color: 'bg-blue-100 border-blue-300 text-blue-900', desc: 'Fun numbers, logic puzzles, and critical thinking mastery.' },
  { id: 'computer', name: 'Computer Skills', price: 5000, icon: '💻', color: 'bg-emerald-100 border-emerald-300 text-emerald-900', desc: 'Keyboard navigation, typing mastery, and digital basics.' },
  { id: 'python', name: 'Python Programming', price: 12000, icon: '🐍', color: 'bg-amber-100 border-amber-300 text-amber-900', desc: 'Write your very first real code and build simple games.' },
  { id: 'robotics', name: 'Lego Robotics', price: 15000, icon: '🤖', color: 'bg-purple-100 border-purple-300 text-purple-900', desc: 'Build and program motorized robots with blocks & sensors.' },
  { id: 'ai', name: 'AI for Kids', price: 15000, icon: '✨', color: 'bg-pink-100 border-pink-300 text-pink-900', desc: 'Discover machine learning, image recognition, and prompt crafting.' },
  { id: 'design', name: 'Digital Design', price: 8000, icon: '🎨', color: 'bg-orange-100 border-orange-300 text-orange-900', desc: 'Creative cartooning, UI design basics, and digital illustration.' },
];

export default function Courses({ onSelectCourse }: CoursesProps) {
  return (
    <section id="courses" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-amber-200 text-amber-900 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Our Curriculum</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-3">Exciting Courses For Young Minds</h2>
          <p className="text-slate-600 font-medium mt-2">Pick a track and start building your dream career today!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div 
              key={course.id}
              className={`rounded-3xl border-4 p-6 flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-all ${course.color}`}
            >
              <div>
                <div className="text-4xl mb-4 bg-white/60 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900">{course.name}</h3>
                <p className="text-slate-600 text-sm font-medium mt-2">{course.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 block">Monthly Subscription</span>
                  <span className="text-xl font-black text-slate-900">₦{course.price.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => onSelectCourse(course.name, course.price)}
                  className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-black px-4 py-2.5 rounded-xl shadow-[0_3px_0_0_#d97706] active:translate-y-0.5 active:shadow-none transition-all text-sm"
                >
                  Subscribe 🚀
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}