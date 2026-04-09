"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const navItems = [
    { label: 'Mission Control', icon: '🚀', path: '/dashboard' },
    { label: 'My Classes', icon: '📚', path: '/dashboard/classes' },
    { label: 'Achievements', icon: '🏆', path: '/dashboard/badges' },
    { label: 'Settings', icon: '⚙️', path: '/dashboard/settings' },
  ];

  return (
    <>
      {/* MOBILE OVERLAY: Dims the background when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100] lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR CONTAINER */}
      <aside className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-100 z-[110]
        w-72 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full p-6">
          
          {/* LOGO */}
          <div className="mb-10 px-2">
            <h1 className="text-xl font-black text-purple-700 italic uppercase">
              Dream<span className="text-yellow-500">box</span>
            </h1>
          </div>

          {/* NAV LINKS */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { router.push(item.path); setIsOpen(false); }}
                className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-500 font-bold text-xs uppercase tracking-widest hover:bg-purple-50 hover:text-purple-700 transition-all group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* LOGOUT */}
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            <span>🚪</span>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;