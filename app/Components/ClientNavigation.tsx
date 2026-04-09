"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import this hook
import Nav_bar from './Nav_bar';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';

export default function ClientNavigation() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  
  const pathname = usePathname(); // Get the current URL path

  // Define logic to hide the official Nav_bar on dashboard routes
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <>
      {/* Only show the official Nav_bar if we are NOT in the dashboard */}
      {!isDashboard && (
        <Nav_bar onLoginClick={() => setIsLoginOpen(true)} />
      )}
      
      {/* Modals can stay global so they can be triggered from anywhere if needed */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}