import React from 'react';
import { Smile, Building2, Star, CalendarDays } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      number: "100+",
      label: "Happy Clients",
      icon: <Smile className="w-12 h-12 fill-gray-400" strokeWidth={2} />,
      description: "Trusted by businesses across 20+ countries"
    },
    {
      number: "70+",
      label: "Projects Delivered",
      icon: <Building2 className="w-12 h-12 text-gray-400" />,
      description: "From start-ups to global brands"
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      icon: <Star className="w-12 h-12 fill-gray-400" />,
      description: "Our clients love what we create"
    },
    {
      number: "5+",
      label: "Years of Experience",
      icon: <CalendarDays className="w-12 h-12 fill-gray-400" />,
      description: "Designing, building, and growing digital experiences"
    }
  ];

  return (
    <section className="pb-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            A Creative Studio That Turns <br/> Ideas Into Impact
          </h2>
          <p className="text-gray-500 text-md">
            We're a full-service creative technology studio helping ambitious brands bring ideas to life. Our team of designers, developers, and storytellers deliver experiences that connect deeply and perform beautifully.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 lg:mx-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-surface-alt text-primary rounded-4xl p-8 hover:bg-primary-hover hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl h-85 flex flex-col justify-between border border-gray-100/50 hover:border-transparent"
            >
              <div>
                <div className="text-6xl font-bold mb-2 group-hover:text-white transition-colors">{stat.number}</div>
                <div className="text-lg font-medium text-primary-dark group-hover:text-primary-light transition-colors">{stat.label}</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full text-white transition-colors flex items-center justify-center group-hover:text-primary-hover">
                  {stat.icon}
                </div>
                <p className="text-xs text-gray-500 font-medium max-w-35 group-hover:text-green-50 transition-colors">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scrolling Text Carousel */}
      <div className="relative w-full overflow-hidden md:py-20 py-10">
         <div className="flex w-max animate-scroll">
            {[...Array(8)].map((_, i) => (
               <div key={i} className="flex items-center gap-16 md:gap-32 md:px-16 px-8">
                  {['Discover', 'Design', 'Develop', 'Deliver'].map((word) => (
                    <span key={word} className="text-4xl md:text-6xl font-bold text-primary-hover opacity-90">
                      {word}
                    </span>
                  ))}
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default StatsSection;
