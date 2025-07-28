import React from 'react'
import HeroSection from '../Components/HeroSection'
import FeatureCard from '../Components/FeatureCard';
import AboutSection from '../Components/AboutSection';
import HowItWorks from '../Components/HowItWorks';
import TopEquipments from '../Components/TopEquipments';

const LandingPage = () => {
  return (
    <div>
       <HeroSection />
              <FeatureCard />
              <AboutSection />
              <HowItWorks />
              <TopEquipments />
    </div>
  )
}

export default LandingPage
