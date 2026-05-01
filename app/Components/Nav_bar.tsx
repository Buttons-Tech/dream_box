"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface NavBarProps {
  onLoginClick: () => void;
  onTutorClick: () => void;
}

const Nav_bar: React.FC<NavBarProps> = ({ onLoginClick, onTutorClick }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('dbx_token');
    const userJson = localStorage.getItem('dbx_user');
    
    setIsLoggedIn(!!token);
    if (userJson) {
      const user = JSON.parse(userJson);
      setUserRole(user.role);
    }
  }, []);

  const handleDashboardRedirect = () => {
    // This handles the multi-role routing
    if (userRole === 'tutor') {
      router.push('/tutor'); 
    } else if (userRole === 'school-admin') {
      router.push('/club'); 
    } else if (userRole === 'admin') {
      router.push('/admin');
    } else {
      router.push('/dashboard');
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-100 bg-white/95 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => router.push('/')}>
            <h1 className="text-xl md:text-2xl font-black text-purple-700 tracking-tighter italic uppercase">
              Dream<span className="text-yellow-500">box</span>
            </h1>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-8 text-gray-700 font-bold uppercase tracking-tight">
            <a href="#about" className="hover:text-purple-600 transition text-[11px]">About</a>
            <a href="#academies" className="hover:text-purple-600 transition text-[11px]">Academies</a>
            
            {/* Kept: Become a Tutor link for Desktop */}
            {!isLoggedIn && (
              <button onClick={onTutorClick} className="text-[10px] font-black text-gray-400 hover:text-yellow-600 transition-colors">
                Become a Tutor
              </button>
            )}
          </div>

          {/* RIGHT SIDE: Login/Dashboard + Hamburger */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <button 
                onClick={handleDashboardRedirect}
                className="bg-purple-700 text-white px-5 py-2 rounded-full font-black text-[10px] uppercase shadow-md"
              >
                Go to Dashboard
              </button>
            ) : (
              <button 
                onClick={onLoginClick}
                className="bg-yellow-400 text-purple-950 px-5 py-2 rounded-full font-black text-[10px] uppercase shadow-md"
              >
                Login
              </button>
            )}

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-purple-700 bg-purple-50 rounded-lg"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-purple-100">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {/* If logged in, show Dashboard in mobile menu */}
            {isLoggedIn && (
               <button onClick={handleDashboardRedirect} className="p-4 text-left text-xs font-black uppercase text-purple-700 bg-purple-50 rounded-2xl">
                 My Dashboard
               </button>
            )}
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="p-4 text-xs font-black uppercase text-gray-700 hover:bg-purple-50 rounded-2xl">About</a>
            <a href="#academies" onClick={() => setIsMenuOpen(false)} className="p-4 text-xs font-black uppercase text-gray-700 hover:bg-purple-50 rounded-2xl">Academies</a>
            <hr className="border-purple-50" />

            {/* Kept: Become a Tutor link for Mobile */}
            {!isLoggedIn && (
              <button onClick={onTutorClick} className="p-4 text-left text-[10px] font-black uppercase text-purple-600">
                Become a Tutor
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav_bar;