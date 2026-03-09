import React, { useState } from 'react';
import ProjectCard from '../components/common/ProjectCard';
import ContactSection from '../components/landing/ContactSection';

const WorkPage = () => {
  const [filter, setFilter] = useState('All');

  const filters = [
    "All", "Entertainment", "Mobility", "Travel", "Health & Wellness", 
    "Sports", "Automotive", "Fintech", "EdTech", "Marketplace", "Social"
  ];

  // Dummy projects data - generating 30 items
  const allProjects = Array.from({ length: 30 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    category: filters[Math.floor(Math.random() * (filters.length - 1)) + 1], // Random category
    description: "A digital product designed for impact and usability across industries.",
    image: `https://placehold.co/600x400/${['f3f4f6','f8fafc','fff7ed','ecfdf5'][i % 4]}/1a3c35?text=Project+${i+1}`,
    bgColor: `bg-[${['#F3F4F6','#F8FAFC','#FFF7ED','#ECFDF5'][i % 4]}]`
  }));

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 max-w-3xl mx-auto">
          <div className='max-w-md flex flex-col items-center justify-center'>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-10">
            Our Work
            </h1>
            <p className="text-gray-500 text-sm font-semibold
             leading-relaxed mb-12 text-center">
              A selection of digital products we've designed and built across industries — from startups to growing platforms. 
              <div className="hidden md:block h-4"/>
              Each project reflects our focus on clarity, usability, and impact.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-20 w-screen px-10">
             {filters.map(f => (
               <button
                 key={f}
                 onClick={() => setFilter(f)}
                 className={`px-4 py-2 rounded-xl text-md font-medium transition-all duration-200 border cursor-pointer ${
                   filter === f
                     ? 'bg-linear-to-b from-primary-hover to-primary text-white'
                     : 'bg-white text-gray-500 border-gray-100 hover:border-primary/20 hover:text-primary-dark'
                 }`}
               >
                 {f}
               </button>
             ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-7xl mx-auto mb-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <ContactSection />
      </div>
    </div>
  );
};

export default WorkPage;
