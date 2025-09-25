import React from 'react';
import { Page } from '../App';
import AdviceTool from './AdviceTool';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import PortfolioSection from './PortfolioSection';
import QuickCheckTool from './QuickCheckTool';
import ServicesSection from './ServicesSection';
import ValuePropositionSection from './ValuePropositionSection';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <>
      <HeroSection />
      <ServicesSection navigateTo={navigateTo} />
      <ValuePropositionSection />
      <AdviceTool />
      <QuickCheckTool />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default HomePage;