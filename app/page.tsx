'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Importing Next.js Image component for optimization

export default function RobotBuildersClub() {
  const [selectedPlan, setSelectedPlan] = useState<string>('School Lab (₦10,000)');
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    age: '',
    venue: 'School Lab',
  });

  // Explicitly type 'e' as FormEvent<HTMLFormElement>
  const handlePayment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const amount = formData.venue === 'Dreambox Center' ? 15000 : formData.venue === 'Virtual' ? 8000 : 10000;
    
    // Redirect to OPay Express Checkout Endpoint
    window.location.href = `/api/opay-checkout?amount=${amount}&name=${encodeURIComponent(formData.parentName)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Head>
        <title>Robot Builders Club | Stars Are Meant To Shine | Dreambox Center</title>
        <meta name="description" content="Build real robots, code in Scratch & Python, and master STEM. Join Dreambox Robotics!" />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-slate-800 bg-slate-950/70 backdrop-blur sticky top-0 z-50">
        <div className="text-2xl font-black text-amber-400 tracking-wider flex items-center gap-2">
          <span>🤖</span> DREAMBOX <span className="text-white font-normal text-base">Robotics</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-slate-400 font-medium">"Stars are meant to shine"</span>
          <a href="#register" className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-amber-400/20">
            Enroll Now
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION: NIGERIAN CHILDREN & ROCKETS --- */}
      <section className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-slate-900 overflow-hidden">
        {/* Placeholder: Main Hero Image */}
        {/* RECOMMENDED IMAGE: A dynamic photo of 3-4 smiling Nigerian children (boys and girls) in a modern lab, looking up at a detailed cardboard/LEGO model of a space rocket they just built. Maybe one child is holding a 'launch controller' (an Arduino). The background is a classroom with posters of rockets and stars. */}
        <Image 
          src="/images/rocket.jpg" // REPLACE THIS with your actual image path in the /public/images folder
          alt="Smiling Nigerian children in a robotics lab with a large cardboard rocket model they built."
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 z-10 max-w-3xl">
          <span className="bg-amber-400 text-slate-950 font-extrabold px-5 py-2 rounded-full uppercase tracking-widest text-sm self-start mb-6">
            Ages 3 – 15 • Hands-On STEM
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            "Stars are meant <span className="text-amber-400">to shine"</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl mt-6 max-w-2xl bg-slate-950/50 p-4 rounded-xl backdrop-blur-sm">
            Launch your child's future in engineering. From cardboard rockets to smart Arduino cars and Python coding. Join Dreambox Center's 8-week robotics adventure!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-full text-lg transition-all text-center">
              View Class Times
            </a>
          </div>
        </div>
      </section>

      {/* --- BUILD SHOWCASE SECTION: WHAT CAN YOU CREATE? --- */}
      <section id="showcase" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-5xl md:text-6xl font-black text-center text-white mb-6">What can <span className="text-amber-400 underline decoration-wavy">you</span> create?</h2>
        <p className="text-slate-400 text-center text-xl mb-16 max-w-3xl mx-auto">From basic mechanics to advanced coding, we guide your child to build incredible projects. Stars are meant to shine, and their creativity will launch them!</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Project 1: The Rocket Builder */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-amber-400/20 shadow-2xl shadow-slate-950">
              {/* Placeholder: Image of Children Building a Cardboard Rocket */}
              {/* RECOMMENDED IMAGE: Close-up photo of two Nigerian students carefully attaching fins to a large, painted cardboard rocket. The focus is on their concentration and the details of the cardboard engineering. */}
              <Image 
                src="/images/carboard-city2.jpeg" // REPLACE THIS
                alt="Two Nigerian students assembling the fins of a large cardboard rocket in a workshop."
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-3xl font-bold text-white">1. Mission to Mars: The Rocket Workshop</h3>
            <p className="text-slate-300 text-lg">They start with engineering fundamentals, designing and building their very own space rockets and launch vehicles. It’s the first step to becoming a rocket scientist!</p>
          </div>

          {/* Project 2: The Rover Builder */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-amber-400/20 shadow-2xl shadow-slate-950">
              {/* Placeholder: Image of Children Building an Arduino Car */}
              {/* RECOMMENDED IMAGE: A student is sitting at a desk with an Arduino car chassis, a small screwdriver in hand. They are attaching an ultrasonic sensor. Wires and components are visible, showing it’s a *real* build. */}
              <Image 
                src="/images/robot-builder.jpeg" // REPLACE THIS
                alt="A student meticulously assembling an Arduino smart car, focusing on wiring the sensor."
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-3xl font-bold text-white">2. Ground Explorer: The Smart Rover</h3>
            <p className="text-slate-300 text-lg">Your child will build and program an autonomous rover (like the smart car kit you have!). They learn coding in Scratch and Python to make it navigate, follow lines, and avoid obstacles.</p>
          </div>

          {/* Project 3: The Spaceship Engineer */}
          <div className="space-y-6 md:col-span-2 md:w-3/4 md:mx-auto">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border-4 border-amber-400/20 shadow-2xl shadow-slate-950">
              {/* Placeholder: Image of Children Programming a Scratch Starship */}
              {/* RECOMMENDED IMAGE: A wide shot. A girl is sitting at a computer showing a complex Scratch program for a starship. In front of her, on the desk, is a simple physical model of a spaceship, maybe built from LEGO or recycled materials, hooked up with an LED that flashes when the program runs. */}
              <Image 
                src="/images/game-maker.jpeg" // REPLACE THIS
                alt="A student programming a virtual starship in Scratch, while a physical spaceship model hooked up to an Arduino interacts with the code."
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-3xl font-bold text-white text-center">3. Galaxy Quest: Programming your Starship</h3>
            <p className="text-slate-300 text-lg text-center">We bridge coding and design! They'll design a digital spaceship simulation in Scratch, then program a simple physical interface (like buttons and LEDs) to control it, simulating a bridge of a starship.</p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Choose Your Learning Venue</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: School */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all">
            <div>
              <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">Most Popular</span>
              <h3 className="text-2xl font-bold text-white mt-2">At-School Club</h3>
              <p className="text-slate-400 text-sm mt-2">Held inside your child's school computer lab after classes.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-amber-400">₦10,000</span>
                <span className="text-slate-400 text-sm"> / 8-Week Term</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li>✓ LEGO & Smart Car Engineering</li>
                <li>✓ Scratch & Python Basics</li>
                <li>✓ All materials provided on-site</li>
                <li>✓ Final Demo Day Competition</li>
              </ul>
            </div>
            <a href="#register" onClick={() => setSelectedPlan('School Lab (₦10,000)')} className="block text-center bg-slate-700 hover:bg-slate-600 font-bold py-3 rounded-xl transition">
              Select School Venue
            </a>
          </div>

          {/* Card 2: Dreambox Center */}
          <div className="bg-slate-800 border-2 border-amber-400 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl shadow-amber-400/10">
            <span className="absolute -top-3 right-6 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase">Premium</span>
            <div>
              <span className="text-xs uppercase text-amber-400 font-bold tracking-wider">Weekend / After-School</span>
              <h3 className="text-2xl font-bold text-white mt-2">Dreambox Center</h3>
              <p className="text-slate-400 text-sm mt-2">Dedicated robotics lab with advanced sensors and 1-on-1 focus.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-amber-400">₦15,000</span>
                <span className="text-slate-400 text-sm"> / 8-Week Term</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li>✓ Access to advanced Arduino & Sensors</li>
                <li>✓ Smaller class sizes (Max 10 kids)</li>
                <li>✓ Take-home mini-projects</li>
                <li>✓ Personalized coding mentor</li>
              </ul>
            </div>
            <a href="#register" onClick={() => setSelectedPlan('Dreambox Center (₦15,000)')} className="block text-center bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3 rounded-xl transition">
              Select Dreambox Center
            </a>
          </div>

          {/* Card 3: Virtual */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all">
            <div>
              <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">Learn From Anywhere</span>
              <h3 className="text-2xl font-bold text-white mt-2">Virtual Club</h3>
              <p className="text-slate-400 text-sm mt-2">Live online interactive classes via Zoom or Google Meet.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-amber-400">₦8,000</span>
                <span className="text-slate-400 text-sm"> / 8-Week Term</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li>✓ Live interactive block & Python coding</li>
                <li>✓ Virtual Robot Simulator labs</li>
                <li>✓ Weekly video recordings</li>
                <li>✓ Digital Certificate of Completion</li>
              </ul>
            </div>
            <a href="#register" onClick={() => setSelectedPlan('Virtual (₦8,000)')} className="block text-center bg-slate-700 hover:bg-slate-600 font-bold py-3 rounded-xl transition">
              Select Virtual
            </a>
          </div>
        </div>
      </section>

      {/* Registration & Payment Form Section */}
      <section id="register" className="max-w-2xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl shadow-slate-950">
          <h2 className="text-3xl font-bold text-white mb-2">Student Registration</h2>
          <p className="text-slate-400 text-lg mb-6">Selected Plan: <strong className="text-amber-400">{selectedPlan}</strong></p>

          <form onSubmit={handlePayment} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Parent/Guardian Name</label>
              <input 
                required 
                type="text" 
                placeholder="e.g. Mr. Adebayo" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, parentName: e.target.value})} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">WhatsApp Phone Number</label>
              <input 
                required 
                type="tel" 
                placeholder="08012345678" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, phone: e.target.value})} 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Child's Name</label>
                <input 
                  required 
                  type="text" 
                  placeholder="Child's full name" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, childName: e.target.value})} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Child's Age / Class</label>
                <input 
                required 
                type="text" 
                placeholder="e.g. 9 yrs / Primary 5" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, age: e.target.value})} 
              />
            </div>
            </div>

            <button type="submit" className="w-full bg-green-500 hover:bg-green-400 text-slate-950 font-extrabold py-4 rounded-xl transition flex items-center justify-center gap-2 mt-6 text-lg shadow-lg shadow-green-500/20">
              <span>Pay Term Fee with OPay / Card</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center px-6 py-10 border-t border-slate-800 bg-slate-950">
        <p className="text-slate-500">© {new Date().getFullYear()} Dreambox Robotics Center. All rights reserved.</p>
        <p className="text-sm text-slate-600 mt-2">"Stars are meant to shine."</p>
      </footer>
    </div>
  );
}