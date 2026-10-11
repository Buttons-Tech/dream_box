"use client"
import React, { useState, useEffect } from 'react';
import { 
  Rocket, Sparkles, BookOpen, Cpu, Code, Palette, Award, 
  User, CheckCircle, CreditCard, Calendar, ArrowRight, 
  ShieldCheck, Smile, Star, ChevronRight, Menu, X, Heart, Play
} from 'lucide-react';

export default function DreamboxApp() {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'profile', 'courses', 'competition'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Onboarding & User State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [studentData, setStudentData] = useState({
    fullName: 'Toluwalase Adebayo',
    age: '8',
    parentEmail: 'parent@dreambox.ng',
    school: 'Tiny Treasures School',
    enrolledCourses: ['Robotics', 'Python Programming']
  });

  // Payment Modal State
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCourseForPayment, setSelectedCourseForPayment] = useState(null);

  // Countdown timer for Egan Got Talents
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 8, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, days: prev.days - 1 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const courses = [
    { id: 'maths', name: 'Mathematics', price: 10000, icon: <BookOpen className="w-8 h-8 text-blue-500" />, desc: 'Fun numbers, puzzles, and logic games for young minds.', color: 'bg-blue-50 border-blue-200' },
    { id: 'computer', name: 'Computer Skills', price: 5000, icon: <Cpu className="w-8 h-8 text-emerald-500" />, desc: 'Keyboard mastery, safe internet navigation, and basic OS apps.', color: 'bg-emerald-50 border-emerald-200' },
    { id: 'python', name: 'Python Programming', price: 12000, icon: <Code className="w-8 h-8 text-amber-500" />, desc: 'Write your very first games and apps using python code!', color: 'bg-amber-50 border-amber-200' },
    { id: 'robotics', name: 'Robotics', price: 15000, icon: <Rocket className="w-8 h-8 text-indigo-500" />, desc: 'Build and program working robots with sensors and motors.', color: 'bg-indigo-50 border-indigo-200' },
    { id: 'ai', name: 'AI for Kids', price: 15000, icon: <Sparkles className="w-8 h-8 text-purple-500" />, desc: 'Discover machine learning, face recognition, and chat bots.', color: 'bg-purple-50 border-purple-200' },
    { id: 'design', name: 'Digital Design', price: 8000, icon: <Palette className="w-8 h-8 text-pink-500" />, desc: 'Create cartoon characters, digital art, and animations.', color: 'bg-pink-50 border-pink-200' },
  ];

  const partners = [
    "Tiny Treasures School",
    "Citytop School",
    "Pampers School",
    "Berkley Academy",
    "Fitcharis School",
    "St. Saviours School",
    "Richfield School"
  ];

  const legoPhotos = [
    { title: "Smart Rover Bot", img: "https://placehold.co/400x300/4f46e5/ffffff?text=Smart+Rover+Bot" },
    { title: "Automatic Doorbell", img: "https://placehold.co/400x300/10b981/ffffff?text=Auto+Doorbell" },
    { title: "Dancing Robot", img: "https://placehold.co/400x300/f59e0b/ffffff?text=Dancing+Robot" },
    { title: "Solar Windmill", img: "https://placehold.co/400x300/ec4899/ffffff?text=Solar+Windmill" }
  ];

  const handleSubscribeClick = (course) => {
    setSelectedCourseForPayment(course);
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-screen bg-amber-50/40 text-slate-800 font-sans selection:bg-amber-300">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-12 h-12 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 transform hover:rotate-12 transition duration-300">
              <Rocket className="w-7 h-7 text-white animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Dreambox
              </span>
              <span className="block text-xs font-bold text-slate-400 tracking-widest uppercase">STEM Club</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-bold text-slate-600">
            <button onClick={() => setActiveTab('home')} className={`hover:text-orange-500 transition ${activeTab === 'home' ? 'text-orange-600 underline decoration-wavy decoration-2' : ''}`}>Home</button>
            <a href="#courses" onClick={() => setActiveTab('home')} className="hover:text-orange-500 transition">Courses</a>
            <a href="#robotics" onClick={() => setActiveTab('home')} className="hover:text-orange-500 transition">Lego Robotics</a>
            <a href="#partners" onClick={() => setActiveTab('home')} className="hover:text-orange-500 transition">Partners</a>
            <a href="#competition" onClick={() => setActiveTab('home')} className="hover:text-orange-500 transition">Egan Got Talents</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <button 
                onClick={() => setActiveTab('profile')}
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-2xl font-black shadow-md shadow-orange-500/20 transform hover:-translate-y-0.5 transition"
              >
                <User className="w-5 h-5" />
                <span>My Profile</span>
              </button>
            ) : (
              <button 
                onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-2xl font-black shadow-md transform hover:-translate-y-0.5 transition"
              >
                Login / Onboard
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-xl bg-orange-100 text-orange-600">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 px-4 pt-2 pb-6 space-y-3 font-bold">
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-slate-700">Home</button>
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-slate-700">Courses</button>
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-slate-700">Lego Robotics</button>
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-slate-700">Partners</button>
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-orange-600">Egan Got Talents</button>
            <div className="pt-4 border-t border-slate-100">
              {isLoggedIn ? (
                <button onClick={() => { setActiveTab('profile'); setMobileMenuOpen(false); }} className="w-full bg-orange-500 text-white py-3 rounded-2xl font-bold">My Profile</button>
              ) : (
                <button onClick={() => { setShowAuthModal(true); setMobileMenuOpen(false); }} className="w-full bg-slate-900 text-white py-3 rounded-2xl font-bold">Login / Onboard</button>
              )}
            </div>
          </div>
        )}
      </header>

      {}
      {activeTab === 'home' && (
        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-orange-50 via-amber-50/50 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-200 px-4 py-2 rounded-full text-orange-700 font-bold text-sm shadow-inner">
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Egan, Lagos Center • Ages 3+</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight">
                  Build Your <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent underline decoration-wavy decoration-orange-400">Dreams!</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0">
                  Welcome to Dreambox STEM Club! Empowering kids through robotics, coding, AI, and math adventures in our ultra-modern Egan tech lab.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <a href="#courses" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-3xl font-black shadow-xl shadow-orange-500/30 flex items-center justify-center space-x-3 transform hover:-translate-y-1 transition">
                    <span>Explore STEM Courses</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={() => { setAuthMode('signup'); setShowAuthModal(true); }}
                    className="w-full sm:w-auto bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-200 px-8 py-4 rounded-3xl font-black shadow-md flex items-center justify-center space-x-2 transform hover:-translate-y-1 transition"
                  >
                    <Smile className="w-5 h-5 text-orange-500" />
                    <span>Onboard Your Child</span>
                  </button>
                </div>
                <div className="pt-6 flex items-center justify-center lg:justify-start space-x-6 text-slate-500 font-bold text-sm">
                  <div className="flex items-center space-x-2"><CheckCircle className="w-5 h-5 text-emerald-500" /><span>Hands-on Lab</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle className="w-5 h-5 text-emerald-500" /><span>Certified Tutors</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle className="w-5 h-5 text-emerald-500" /><span>Ages 3 - 16</span></div>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl border-4 border-orange-100 max-w-md w-full transform rotate-1 hover:rotate-0 transition duration-300">
                  <img 
                    src="https://placehold.co/500x400/ffedd5/c2410c?text=Kids+Building+Robots+@+Egan" 
                    alt="Kids in STEM Lab" 
                    className="rounded-2xl w-full h-64 object-cover mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-xl text-slate-800">Egan STEM Hub</h3>
                      <p className="text-xs text-slate-500 font-bold">State-of-the-art tech lab for kids</p>
                    </div>
                    <span className="bg-orange-100 text-orange-600 font-black px-3 py-1.5 rounded-xl text-sm">Active Lab</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Courses We Offer Section */}
          <section id="courses" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="bg-orange-100 text-orange-600 font-black px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">Our Curriculum</span>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-3">Exciting Courses for Young Minds</h2>
                <p className="text-slate-600 font-medium mt-4 text-lg">Pick a path for your child and watch them build amazing projects every month.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <div key={course.id} className={`p-8 rounded-3xl border-2 ${course.color} shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between transform hover:-translate-y-1`}>
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6">
                        {course.icon}
                      </div>
                      <h3 className="text-2xl font-black text-slate-800 mb-2">{course.name}</h3>
                      <p className="text-slate-600 font-medium mb-6">{course.desc}</p>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between mb-6">
                        <span className="text-3xl font-black text-orange-600">₦{course.price.toLocaleString()}</span>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Per Month</span>
                      </div>
                      <button 
                        onClick={() => handleSubscribeClick(course)}
                        className="w-full bg-slate-900 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-md transition flex items-center justify-center space-x-2"
                      >
                        <span>Subscribe Now</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Lego Robotics Playground Section */}
          <section id="robotics" className="py-20 bg-orange-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="bg-indigo-100 text-indigo-600 font-black px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">Hands-On Tech</span>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-3">Lego Robotics Playground</h2>
                <p className="text-slate-600 font-medium mt-4 text-lg">Where creativity meets engineering. Kids build working prototypes using sensors, motors, and smart bricks.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {legoPhotos.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-3xl shadow-lg border border-orange-100 overflow-hidden group">
                    <div className="overflow-hidden rounded-2xl mb-4">
                      <img src={item.img} alt={item.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500" />
                    </div>
                    <h3 className="font-black text-lg text-slate-800 px-2">{item.title}</h3>
                    <p className="text-xs text-orange-600 font-bold px-2 pb-2">Dreambox Egan Workshop</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* School Partners Sliding Marquee */}
          <section id="partners" className="py-16 bg-white overflow-hidden border-y border-orange-100">
            <div className="max-w-7xl mx-auto px-4 text-center mb-8">
              <h2 className="text-2xl font-black text-slate-400 uppercase tracking-widest">Our Proud School Partners</h2>
            </div>
            <div className="flex space-x-12 animate-marquee whitespace-nowrap overflow-x-auto py-4 px-4 scrollbar-none">
              {partners.map((partner, index) => (
                <div key={index} className="inline-flex items-center space-x-3 bg-orange-50 px-6 py-4 rounded-2xl border border-orange-200 shadow-sm">
                  <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <span className="text-lg font-black text-slate-800">{partner}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Egan Got Talents Competition Section */}
          <section id="competition" className="py-20 bg-gradient-to-tr from-orange-600 to-amber-500 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <span className="bg-white text-orange-600 font-black px-4 py-1.5 rounded-full text-sm uppercase">Upcoming Competition</span>
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Egan Got Talents 2026</h2>
                  <p className="text-orange-100 font-medium text-lg">
                    Showcase your robotics project, coding game, or digital art masterpiece before judges and win fantastic tech prizes!
                  </p>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <span className="block text-2xl sm:text-3xl font-black">{timeLeft.days}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-200">Days</span>
                    </div>
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <span className="block text-2xl sm:text-3xl font-black">{timeLeft.hours}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-200">Hours</span>
                    </div>
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <span className="block text-2xl sm:text-3xl font-black">{timeLeft.minutes}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-200">Mins</span>
                    </div>
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <span className="block text-2xl sm:text-3xl font-black">{timeLeft.seconds}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-200">Secs</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-white text-slate-900 p-8 rounded-3xl shadow-xl">
                  <Award className="w-16 h-16 text-orange-500 mb-4 animate-bounce" />
                  <h3 className="text-2xl font-black text-center mb-2">Grand Prize: Star Robotics Kit & Trophy</h3>
                  <p className="text-slate-500 text-center text-sm mb-6">Open to all registered Dreambox Club members across Egan and partner schools.</p>
                  <button 
                    onClick={() => { setAuthMode('signup'); setShowAuthModal(true); }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-lg transition"
                  >
                    Register Child for Competition
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {}
      {activeTab === 'profile' && (
        <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-lg">
                {studentData.fullName.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-900">{studentData.fullName}</h1>
                <p className="text-orange-600 font-bold">Age {studentData.age} • {studentData.school}</p>
                <p className="text-xs text-slate-400 mt-1">Parent Email: {studentData.parentEmail}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-50 hover:bg-red-100 text-red-600 px-6 py-3 rounded-2xl font-bold transition"
            >
              Log Out
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-orange-500" />
                  <span>Class Schedule</span>
                </h2>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-slate-800">Lego Robotics Lab</h4>
                      <p className="text-xs text-slate-500 font-bold">Egan Center • Saturdays 10:00 AM</p>
                    </div>
                    <span className="bg-orange-500 text-white font-bold px-3 py-1.5 rounded-xl text-xs">Upcoming</span>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-slate-800">Python Programming</h4>
                      <p className="text-xs text-slate-500 font-bold">Egan Center • Tuesdays 3:30 PM</p>
                    </div>
                    <span className="bg-amber-500 text-white font-bold px-3 py-1.5 rounded-xl text-xs">Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                  <span>Enrolled Courses</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {studentData.enrolledCourses.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border-2 border-orange-100 bg-orange-50/50 flex items-center justify-between">
                      <span className="font-black text-slate-800">{c}</span>
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
                <h3 className="text-xl font-black text-slate-900 mb-4">Edit Student Details</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert("Profile updated successfully!"); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={studentData.fullName} 
                      onChange={(e) => setStudentData({...studentData, fullName: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-800 focus:outline-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">School</label>
                    <input 
                      type="text" 
                      value={studentData.school} 
                      onChange={(e) => setStudentData({...studentData, school: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-800 focus:outline-orange-500"
                    />
                  </div>
                  <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3 rounded-xl shadow-md transition">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      )}

      {}
      {showPaymentModal && selectedCourseForPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border-4 border-orange-100 relative animate-scaleUp">
            <button onClick={() => setShowPaymentModal(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-orange-100 text-orange-600 hover:bg-orange-200">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-3 text-orange-600">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Subscribe to {selectedCourseForPayment.name}</h3>
              <p className="text-orange-600 font-bold text-lg mt-1">₦{selectedCourseForPayment.price.toLocaleString()} / month</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200 space-y-4 mb-6">
              <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider">Bank Transfer Instructions</h4>
              <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-orange-100">
                <span className="text-xs font-bold text-slate-500">Bank Name</span>
                <span className="font-black text-slate-800">Firstbank</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-orange-100">
                <span className="text-xs font-bold text-slate-500">Account Number</span>
                <span className="font-black text-orange-600 text-lg">2043436716</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-orange-100">
                <span className="text-xs font-bold text-slate-500">Account Name</span>
                <span className="font-black text-slate-800">Paatee Nig Ltd</span>
              </div>
            </div>

            <button 
              onClick={() => {
                alert("Payment instruction noted! Please upload proof of transfer on your profile.");
                setShowPaymentModal(false);
                setIsLoggedIn(true);
                setActiveTab('profile');
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-lg transition"
            >
              I Have Made The Transfer
            </button>
          </div>
        </div>
      )}

      {}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border-4 border-orange-100 relative">
            <button onClick={() => setShowAuthModal(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-orange-100 text-orange-600">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-6">
              <h3 className="text-3xl font-black text-slate-900">{authMode === 'login' ? 'Welcome Back!' : 'Onboard Child'}</h3>
              <p className="text-slate-500 font-medium text-sm mt-1">Dreambox STEM Club Egan Center</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
              setShowAuthModal(false);
              setActiveTab('profile');
            }} className="space-y-4">
              {authMode === 'signup' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Child's Full Name</label>
                    <input type="text" required placeholder="Toluwalase Adebayo" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium focus:outline-orange-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Select School</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium focus:outline-orange-500">
                      {partners.map((p, i) => <option key={i} value={p}>{p}</option>)}
                    </select>
                  </div>
                </>
              )}
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Parent Email</label>
                <input type="email" required placeholder="parent@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium focus:outline-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Password</label>
                <input type="password" required placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium focus:outline-orange-500" />
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-lg transition">
                {authMode === 'login' ? 'Login to Dashboard' : 'Complete Onboarding'}
              </button>

              <div className="text-center pt-2">
                <button 
                  type="button" 
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  className="text-xs font-bold text-orange-600 hover:underline"
                >
                  {authMode === 'login' ? "Don't have an account? Onboard your child" : "Already registered? Login here"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {}
      <footer className="bg-slate-900 text-white py-12 border-t border-orange-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-black">Dreambox STEM Club</span>
              <p className="text-xs text-slate-400">Build Your Dreams • Egan, Lagos</p>
            </div>
          </div>
          <div className="text-center text-sm text-slate-400 font-medium">
            © 2026 Dreambox STEM Club. All rights reserved. Paatee Nig Ltd.
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            <span className="bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold text-orange-400">Firstbank: 2043436716</span>
          </div>
        </div>
      </footer>
    </div>
  );
}