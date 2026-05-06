import React from 'react';
import ImageWithShimmer from '../common/ImageWithShimmer';
import processOne from "../../assets/home/process/one.png"
import processTwo from "../../assets/home/process/two.png"

import strengthOne from "../../assets/home/strengths/one.png"
import strengthTwo from "../../assets/home/strengths/two.png"
import strengthThree from "../../assets/home/strengths/three.png"
import strengthFour from "../../assets/home/strengths/four.png"

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "Understand your goals, audience, and opportunities."
    },
    {
      number: "2",
      title: "Design",
      description: "Craft visually stunning, user-centric experiences."
    },
    {
      number: "3",
      title: "Develop",
      description: "Build reliable, scalable digital products using modern technologies."
    },
    {
      number: "4",
      title: "Deliver",
      description: "Launch, refine, and support your product for success."
    }
  ];


  return (
    <section id="about" className="md:py-24 py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* PART 1: Journey to Success */}
        <div className="md:mb-32 mb-16">
          <div className="text-center md:mb-16 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
              The Journey to Success
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-8 items-center max-w-7xl mx-auto bg-white border rounded-4xl border-white hover:border-gray-100 transition-all">
              {/* Left: Images */}
              <div className="md:p-6 p-4 rounded-[2.5rem]">
                <div className="flex gap-4">
                    <div className="w-1/2 aspect-4/7 rounded-2xl overflow-hidden">
                        <ImageWithShimmer src={processOne} alt="Process 1" className="w-full h-full" />
                    </div>
                    <div className="w-1/2 aspect-4/7 rounded-2xl overflow-hidden">
                        <ImageWithShimmer src={processTwo} alt="Process 2" className="w-full h-full" />
                    </div>
                </div>
             </div>

             {/* Right: Timeline */}
             <div className="flex flex-col justify-center">
                <div className="space-y">
                   {steps.map((step, index) => (
                     <div key={index} className="py-6 px-4 md:px-0 border-b border-gray-200 last:border-0 group cursor-default flex items-center gap-10">
                      <div className='mask-down-fade'>
                        <span className="text-7xl font-bold md:text-white text-primary group-hover:text-primary transition-colors">
                          {step.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-400 group-hover:text-primary transition-colors mb-2">
                           {step.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-600 transition-colors leading-relaxed">
                           {step.description}
                        </p>
                      </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* PART 2: Core Strengths */}
        <div>
          <div className="text-center md:mb-16 mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">Our Core Strengths</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Designed to Elevate Your Brand
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-11 md:gap-8 gap-6 md:px-20">
             <div className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-white hover:border-gray-100 transition-all flex flex-col items-center text-center md:col-span-5">
                <div className="w-70 rounded-3xl overflow-hidden mb-6 flex items-center justify-center mt-2">
                    <ImageWithShimmer src={strengthOne} alt="Intelligent Development" className="w-full h-full opacity-90 mix-blend-multiply" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Intelligent Development</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    From websites to mobile apps, every line of code is optimized for performance, speed, and long-term scalability.
                </p>
             </div>
             <div className="bg-white rounded-[2.5rem] px-4 pb-4 shadow-sm border border-white hover:border-gray-100 transition-all flex flex-col items-center text-center md:col-span-6">
                <div className="w-120 rounded-3xl overflow-hidden mb-6 flex items-center justify-center">
                    <ImageWithShimmer src={strengthTwo} alt="Future-Ready Solutions" className="w-full h-full opacity-90 mix-blend-multiply" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Future-Ready Solutions</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                    Our approach is built to evolve — using the latest tools, trends, and technologies to keep your business one step ahead.
                </p>
             </div>
             <div className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-white hover:border-gray-100 transition-all flex flex-col items-center text-center md:col-span-6">
                <div className="w-90 rounded-3xl overflow-hidden mb-2 flex items-center justify-center">
                    <ImageWithShimmer src={strengthThree} alt="Collaborative Partnership" className="w-full h-full opacity-90 mix-blend-multiply" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Collaborative Partnership</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                    We don't just deliver projects — we build lasting partnerships. Every step is transparent, aligned, and driven by shared goals.
                </p>
             </div>
             <div className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-white hover:border-gray-100 transition-all flex flex-col items-center text-center md:col-span-5">
                <div className="w-100 rounded-3xl overflow-hidden flex items-center justify-center mb-2">
                    <ImageWithShimmer src={strengthFour} alt="Creative Engineering" className="w-full h-full opacity-90 mix-blend-multiply" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Creative Engineering</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    Where art meets logic — merging imagination with technology to bring ideas to life in powerful, unexpected ways.
                </p>
             </div>
             
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
