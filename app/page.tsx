import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeaturesSection from './Components/FeaturesSection'
import CourseSection from './Components/CourseSection'
import ConsultationSection from './Components/ConsultationSection'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CourseSection />
      <ConsultationSection />
    </div>
  )
}

export default page
