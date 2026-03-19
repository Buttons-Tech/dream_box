import React from 'react';

const Nav_bar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600 tracking-tight">Dreambox</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-gray-700 font-medium">
              <a href="#about" className="hover:text-blue-600 transition">About</a>
              <a href="#academies" className="hover:text-blue-600 transition">Academies</a>
              <a href="#subjects" className="hover:text-blue-600 transition">Curriculum</a>
              <a href="#events" className="hover:text-blue-600 transition">Events</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav_bar;