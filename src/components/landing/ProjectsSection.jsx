import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../common/ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Stage Connect",
      category: "Events & Entertainment",
      description: "Artist booking platform connecting performers and booking agents.",
      image: "https://placehold.co/600x400/f3f4f6/1a3c35?text=Stage+Connect",
      bgColor: "bg-[#F3F4F6]" 
    },
    {
      title: "Swervem",
      category: "Mobility & Transportation",
      description: "Car rental and rent-to-own mobility platform with host mode.",
      image: "https://placehold.co/600x400/f8fafc/1a3c35?text=Swervem",
      bgColor: "bg-[#F8FAFC]"
    },
    {
      title: "MasterPCOS",
      category: "Health & Wellness",
      description: "Women's health app for PCOS management through diet and fitness.",
      image: "https://placehold.co/600x400/fff7ed/1a3c35?text=MasterPCOS",
      bgColor: "bg-[#FFF7ED]"
    },
    {
      title: "Linked",
      category: "Travel & Connectivity",
      description: "Global eSIM connectivity app with premium liquid glass UI.",
      image: "https://placehold.co/600x400/ecfdf5/1a3c35?text=Linked",
      bgColor: "bg-[#ECFDF5]"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Selected Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-28">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link to="/work">
            <button className="group bg-linear-to-b from-primary-hover to-primary text-white px-8 py-3 rounded-xl text-base font-medium transition-all shadow-md hover:shadow-xl flex items-center gap-2 cursor-pointer">
              View all
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
