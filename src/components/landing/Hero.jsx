import React from 'react';

import card1 from '../../assets/home/hero/card1.png'
import card2 from '../../assets/home/hero/card2.png'
import card3 from '../../assets/home/hero/card3.png'
import card4 from '../../assets/home/hero/card4.png'
import card5 from '../../assets/home/hero/card5.png'
import card6 from '../../assets/home/hero/card6.png'
import card7 from '../../assets/home/hero/card7.png'
import card8 from '../../assets/home/hero/card8.png'
import card9 from '../../assets/home/hero/card9.png'
import card10 from '../../assets/home/hero/card10.png'
import card11 from '../../assets/home/hero/card11.png'
import card12 from '../../assets/home/hero/card12.png'
import { Link } from 'react-router-dom';

const Hero = () => {

  const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];

  return (
    <section className="relative w-full overflow-hidden bg-surface-alt py-12">
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        
        {/* Text Content Wrapper */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Trusted Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-primary-light text-primary px-3 py-1.5 rounded-xl text-sm animate-fade-in-up border border-white shadow-inner">
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span> */}
            Trusted by 1,000+ Companies Worldwide
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl text-center text-primary-dark leading-[1.1] mb-6 tracking-tight mx-auto z-10 relative font-heading">
            We Build <span className="text-primary">Digital</span> <br className="hidden md:block"/>
            <span className="text-primary">Experiences</span> That Spark <br className="hidden md:block"/>
            Energy & Impact
          </h1>

          {/* Subtext */}
          <p className="text-base text-gray-500 text-center mx-auto mb-16 leading-relaxed z-10 relative">
            From web to mobile apps, UI/UX design, and branding — we craft experiences that inspire action.
          </p>

          {/* Floating Card Left: 5 Star Review */}
          <div className="hidden lg:block absolute top-[50%] -translate-y-1/2 left-0 xl:left-10 bg-white p-4 rounded-2xl shadow-sm border border-gray-50 max-w-62.5 animate-float-slow z-20 rotate-12">
              <div className="text-4xl font-bold text-primary-dark mb-1">5/5</div>
              <div className="flex text-yellow-400 mb-2 text-2xl gap-0.5">
                {'★'.repeat(5)}
              </div>
              <p className="text-base text-primary-dark leading-snug">
                Trusted by <span className="font-semibold text-gray-900">brands</span> and creators around the world.

              </p>
          </div>

          {/* Floating Card Right: Happy Clients */}
          <div className="hidden lg:block absolute top-[40%] -translate-y-1/2 right-0 xl:right-10 bg-white p-4 rounded-2xl shadow-sm border border-gray-50 max-w-55 animate-float-delayed z-20 -rotate-12">
              <div className="flex -space-x-3 mb-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
              <div className="text-2xl font-bold text-primary-dark">200+</div>
              <p className="text-base text-primary-dark">Happy Clients Worldwide</p>
          </div>
        </div>

        {/* Infinite Carousel */}
        <div className="relative w-full max-w-480 mx-auto h-100 md:h-125 pt-4 overflow-hidden mask-right-fade">
           
          <div className="flex gap-6 md:gap-8 w-max animate-scroll hover:[animation-play-state:paused] mask-down-fade py-2">
            {/* Double the items to create seamless loop */}
            {cards.map((card, i) => (
              <div key={i} className="w-56 md:w-80 h-full shrink-0 bg-white rounded-4xl overflow-hidden transform transition-all hover:scale-105 duration-300">
                <Link to={"/"}>
                  <img 
                    src={card} 
                    alt={`Carousel Item ${i + 1}`}
                    className="w-full h-full"
                  />
                </Link>
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
