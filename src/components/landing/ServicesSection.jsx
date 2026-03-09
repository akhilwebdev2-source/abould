import React from 'react';
import { ArrowUpRight, Zap, Code, Smartphone, Palette, Globe, PenTool, Layout, Box } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "App Design & Development",
      subtitle: "Engaging, high-performance mobile apps",
      description: "Bring your app idea to life — the smart way.",
      subtext: "We build mobile apps that engage, retain, and grow your audience. From prototype to app store launch, we ensure smooth performance, elegant UI, and an experience users keep coming back to.",
      icon: Smartphone,
      tags: [
        { name: "Flutter", icon: "platform" },
        { name: "iOS", icon: "mobile" },
        { name: "Android", icon: "android" }
      ]
    },
    {
      title: "Web Development",
      subtitle: "Modern, fast, and responsive websites",
      description: "Let's turn your idea into a powerful digital presence.",
      subtext: "Your website is your first impression — we make it unforgettable. From landing pages to complex dashboards, we build responsive, SEO-friendly, and lightning-fast experiences that convert visitors into customers.",
      icon: Code,
      tags: [
        { name: "Responsive", icon: "responsive" },
        { name: "Growth-Driven", icon: "chart" },
        { name: "SEO-Ready", icon: "search" }
      ]
    },
    {
      title: "UI/UX Design",
      subtitle: "Crafting delightful user experiences",
      description: "Create experiences that speak to users, not just screens.",
      subtext: "We blend creativity with usability - crafting interfaces that users love to explore. Every pixel, interaction, and flow is designed with empathy to make your product intuitive, accessible, and beautiful.",
      icon: Palette,
      tags: [
        { name: "Wireframing", icon: "pen" },
        { name: "Prototyping", icon: "play" },
        { name: "User Research", icon: "users" }
      ]
    },
    {
      title: "Brand & Visual Design",
      subtitle: "Create a brand that people remember",
      description: "Let's design a brand that people can't forget.",
      subtext: "Your brand is more than a logo — it's a feeling. We create cohesive visual identities that make people remember, trust, and choose you. Every color, font, and shape works together to amplify your voice.",
      icon: PenTool,
      tags: [
        { name: "Logo design", icon: "star" },
        { name: "Brand identity", icon: "badge" },
        { name: "Style guides", icon: "palette" }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-surface-alt">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-dark leading-tight">
            Crafting Experiences That Speak <br/>
            Louder Than Words
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6 px-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center">
                        <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark group-hover:text-primary transition-colors">
                      {service.title}
                      </h3>
                      <p className='pt-0.5 leading-relaxed text-gray-400 text-sm'>{service.subtitle}</p>
                    </div>
                </div>
                
                <div className="p-2 rounded-full flex items-center justify-center text-gray-400 group-hover:border-primary group-hover:text-primary transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>

              {/* Descriptions */}
              <p className="text-lg font-medium text-gray-900 mb-4">
                {service.description}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                {service.subtext}
              </p>

              {/* Tags / Pills */}
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="flex text-nowrap items-center gap-2 w-full bg-gray-50 px-4 py-2 rounded-xl text-lg font-medium text-gray-600 group-hover:bg-primary-light group-hover:text-primary transition-colors flex-3">
                     <span className="w-8 h-8 rounded-full bg-linear-to-r from-primary-hover to-primary-light text-white flex items-center justify-center shadow-sm">
                       <Zap className="w-4 fill-current" />
                     </span>
                     {tag.name}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
