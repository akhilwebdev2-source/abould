import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface-alt py-12">
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        
        {/* Text Content Wrapper */}
        <div className="relative w-full max-w-[1400px] flex flex-col items-center">
          
          {/* Trusted Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-primary-light text-primary px-3 py-1.5 rounded-xl text-sm animate-fade-in-up border border-white shadow-inner shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Trusted by 1,000+ Companies Worldwide
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-center text-primary-dark leading-[1.1] mb-6 tracking-tight max-w-5xl mx-auto z-10 relative">
            We Build <span className="text-primary">Digital</span> <br className="hidden md:block"/>
            <span className="text-primary">Experiences</span> That Spark <br className="hidden md:block"/>
            Energy & Impact
          </h1>

          {/* Subtext */}
          <p className="text-base text-gray-500 text-center max-w-3xl mx-auto mb-16 leading-relaxed z-10 relative">
            From web to mobile apps, UI/UX design, and branding — we craft experiences that inspire action.
          </p>

          {/* Floating Card Left: 5 Star Review */}
          <div className="hidden lg:block absolute top-[50%] -translate-y-1/2 left-0 xl:left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 max-w-[250px] animate-float-slow z-20 rotate-12">
              <div className="text-4xl font-bold text-primary-dark mb-1">5</div>
              <div className="flex text-yellow-400 mb-2 text-2xl gap-0.5">
                {'★'.repeat(5)}
              </div>
              <p className="text-base text-primary-dark leading-snug">
                Trusted by <span className="font-semibold text-gray-900">brands</span> and creators around the world.

              </p>
          </div>

          {/* Floating Card Right: Happy Clients */}
          <div className="hidden lg:block absolute top-[40%] -translate-y-1/2 right-0 xl:right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 max-w-[220px] animate-float-delayed z-20 -rotate-12">
              <div className="flex -space-x-3 mb-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
              <div className="text-2xl font-bold text-primary-dark">2K+</div>
              <p className="text-base text-primary-dark">Happy Clients Worldwide</p>
          </div>
        </div>

        {/* Infinite Carousel */}
        <div className="relative w-full max-w-[1920px] mx-auto h-[400px] md:h-[500px] pt-4 overflow-hidden mask-right-fade">
           
          <div className="flex gap-6 md:gap-8 w-max animate-scroll hover:[animation-play-state:paused] mask-down-fade py-2">
            {/* Double the items to create seamless loop */}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-56 md:w-72 h-80 md:h-96 shrink-0 bg-white rounded-3xl border-4 border-gray-900/5 shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
                    <img 
                      src={`https://placehold.co/400x600/f3f4f6/1a3c35?text=Card+${(i % 5) + 1}`} 
                      alt={`Carousel Item ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
              </div>
              ))}
          </div>
        </div>

      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] left-[30%] w-[40%] h-[60%] bg-primary/12 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
};

export default Hero;
