import Header from '../components/common/Header';
import Hero from '../components/landing/Hero';
import StatsSection from '../components/landing/StatsSection';
import ServicesSection from '../components/landing/ServicesSection';
import ProjectsSection from '../components/landing/ProjectsSection';
import ProcessSection from '../components/landing/ProcessSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/common/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      {/* Detailed components will follow */}
    </div>
  );
};

export default LandingPage;
