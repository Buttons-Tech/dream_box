"use client";
import { useState } from "react";
import Academies from "./Components/Academies";
import Events from "./Components/Events";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Partners2 from "./Components/Partners2";
// import SchoolCTA from "./Components/SchoolCTA";
import Story from "./Components/Story";
import Subjects from "./Components/Subjects";
import SignupModal from "./Components/SignupModal";
// import MissionReport from "./Components/MissionReport";
import SchoolCTA from "./Components/SchoolCTA";
import SchoolSignupModal from './Components/SchoolSignupModal';



export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  return (
        <>
        

        <Hero onSignUpClick={() => setIsSignupOpen(true)} onSchoolSignUpClick={() => setIsSchoolModalOpen(true)}/>
          <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
      />
      <SchoolSignupModal
        isOpen={isSchoolModalOpen} 
        onClose={() => setIsSchoolModalOpen(false)} 
      />
      
        <Partners2/>
        <Features/>
        
        <Academies/>
        <Subjects/>
        <Events/>
        <Story/>
        <SchoolCTA/>
        {/* <MissionReport /> */}
        


        <footer className="py-10 text-center text-gray-400">
        © 2026 Dreambox Academy. All rights reserved.
      </footer>
       

        

        {/* <Dashboard /> */}
        </>
  );
}
