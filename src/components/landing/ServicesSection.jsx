import React from 'react';
import { Globe, Star, MonitorSmartphone, Component } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "App Design & Development",
      subtitle: "Engaging, high-performance mobile apps",
      subtext: "We build mobile apps that engage, retain, and grow your audience. From prototype to app store launch, we ensure smooth performance, elegant UI, and an experience users keep coming back to.",
      icon: MonitorSmartphone
    },
    {
      title: "Web Development",
      subtitle: "Modern, fast, and responsive websites",
      subtext: "Your website is your first impression — we make it unforgettable. From landing pages to complex dashboards, we build responsive, SEO-friendly, and lightning-fast experiences that convert visitors into customers.",
      icon: Globe
    },
    {
      title: "UI/UX Design",
      subtitle: "Crafting delightful user experiences",
      subtext: "We blend creativity with usability - crafting interfaces that users love to explore. Every pixel, interaction, and flow is designed with empathy to make your product intuitive, accessible, and beautiful.",
      icon: Component
    },
    {
      title: "Brand & Visual Design",
      subtitle: "Create a brand that people remember",
      subtext: "Your brand is more than a logo — it's a feeling. We create cohesive visual identities that make people remember, trust, and choose you. Every color, font, and shape works together to amplify your voice.",
      icon: Star
    }
  ];

  return (
    <section id="services" className="md:py-20 py-10 bg-surface-alt">
      <div className="container mx-auto flex flex-col items-center md:px-10 px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-dark leading-tight">
            Crafting Experiences That Speak <br/>
            Louder Than Words
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-4 transition-all border hover:border-gray-100 border-white"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-10 rounded-xl">
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark group-hover:text-primary transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className='pt-1 leading-relaxed text-gray-400 text-sm'>
                    {service.subtitle}
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full text-primary flex items-center justify-center bg-primary-light">
                  <service.icon className="w-8 h-8" strokeWidth='1.5px' />
                </div>
              </div>

              {/* Descriptions */}
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                {service.subtext}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
