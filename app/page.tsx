"use client";
import { useState } from "react";
import Academies from "./Components/Academies";
import Events from "./Components/Events";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Nav_bar from "./Components/Nav_bar";
import Partners2 from "./Components/Partners2";
import SchoolCTA from "./Components/SchoolCTA";
import Story from "./Components/Story";
import Subjects from "./Components/Subjects";
import SignupModal from "./Components/SignupModal";



export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  return (
        <>
        <Nav_bar/>

        <Hero onSignUpClick={() => setIsSignupOpen(true)}/>
          <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
      />
        <Partners2/>
        <Features/>
        <Academies/>
        <Subjects/>
        <Events/>
        <Story/>
        <SchoolCTA/>
        


        <footer className="py-10 text-center text-gray-400">
        © 2026 Dreambox Academy. All rights reserved.
      </footer>
       

        

        {/* <Dashboard /> */}
        </>
  );
}
