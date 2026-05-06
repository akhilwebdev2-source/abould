import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../common/ProjectCard';
import { projectsData } from '../../data/projectsData';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Stage Connect",
      category: "Events & Entertainment",
      description: "Artist booking platform connecting performers and booking agents.",
      image: projectsData.projects[0].cover,
      bgColor: "bg-[#F3F4F6]" 
    },
    {
      title: "Swervem",
      category: "Mobility & Transportation",
      description: "Car rental and rent-to-own mobility platform with host mode.",
      image: projectsData.projects[1].cover,
      bgColor: "bg-[#F8FAFC]"
    },
    {
      title: "MasterPCOS",
      category: "Health & Wellness",
      description: "Women's health app for PCOS management through diet and fitness.",
      image: projectsData.projects[3].cover,
      bgColor: "bg-[#FFF7ED]"
    },
    {
      title: "Linked",
      category: "Travel & Connectivity",
      description: "Global eSIM connectivity app with premium liquid glass UI.",
      image: projectsData.projects[2].cover,
      bgColor: "bg-[#ECFDF5]"
    }
  ];

  return (
    <section className="md:py-24 py-10 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center md:mb-30 mb-15">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Selected Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6 lg:mx-30">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link to="/work">
            <button className="group bg-linear-to-b from-primary-hover to-primary border-2 hover:border-neutral-300 border-primary text-white py-3 px-8 rounded-xl text-sm font-medium transition-all flex items-center gap-2 cursor-pointer">
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
