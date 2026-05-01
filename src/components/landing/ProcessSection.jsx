import React from 'react';
import one from "../../assets/home/process/one.png"
import two from "../../assets/home/process/two.png"

const ProcessSection = () => {
  const steps = [
    {
      title: "Discover",
      description: "Understand your goals, audience, and opportunities."
    },
    {
      title: "Design",
      description: "Craft visually stunning, user-centric experiences."
    },
    {
      title: "Develop",
      description: "Build reliable, scalable digital products using modern technologies."
    },
    {
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

          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-8 items-center max-w-7xl mx-auto bg-white border rounded-4xl border-gray-100">
             {/* Left: Images */}
             <div className="md:p-6 p-4 rounded-[2.5rem]">
                <div className="flex gap-4">
                    <div className="w-1/2 aspect-4/7 rounded-2xl overflow-hidden">
                        <img src={one} alt="Process 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-1/2 aspect-4/7 rounded-2xl overflow-hidden">
                        <img src={two} alt="Process 2" className="w-full h-full object-cover" />
                    </div>
                </div>
             </div>

             {/* Right: Timeline */}
             <div className="flex flex-col justify-center">
                <div className="space-y">
                   {steps.map((step, index) => (
                     <div key={index} className="py-6 md:pl-20 px-10 mr-10 border-b border-gray-100 last:border-0 group cursor-default">
                        <h3 className="text-2xl font-bold text-gray-400 group-hover:text-primary transition-colors mb-2">
                           {step.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-600 transition-colors leading-relaxed">
                           {step.description}
                        </p>
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

          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-8 gap-6 max-w-7xl mx-auto">
             <div className="bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center md:col-span-3">
                <div className="w-full h-full rounded-3xl overflow-hidden mb-2 bg-gray-100 flex items-center justify-center">
                    <img src="https://placehold.co/450x200/f3f4f6/1a3c35?text=Intelligent+Development" alt="Intelligent Development" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Intelligent Development</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    From websites to mobile apps, every line of code is optimized for performance, speed, and long-term scalability.
                </p>
             </div>
             <div className="bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center md:col-span-4">
                <div className="w-full h-full rounded-3xl overflow-hidden mb-2 bg-green-50 flex items-center justify-center">
                    <img src="https://placehold.co/600x200/f0fdf4/1a3c35?text=Future-Ready" alt="Future-Ready Solutions" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Future-Ready Solutions</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                    Our approach is built to evolve — using the latest tools, trends, and technologies to keep your business one step ahead.
                </p>
             </div>
             <div className="bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center md:col-span-4">
                <div className="w-full h-full rounded-3xl overflow-hidden mb-2 bg-orange-50 flex items-center justify-center">
                    <img src="https://placehold.co/600x200/fff7ed/1a3c35?text=Collaborative+Partnership" alt="Collaborative Partnership" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Collaborative Partnership</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                    We don't just deliver projects — we build lasting partnerships. Every step is transparent, aligned, and driven by shared goals.
                </p>
             </div>
             <div className="bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center md:col-span-3">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-teal-50 flex items-center justify-center mb-2">
                    <img src="https://placehold.co/450x200/ecfdf5/1a3c35?text=Creative+Engineering" alt="Creative Engineering" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
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
