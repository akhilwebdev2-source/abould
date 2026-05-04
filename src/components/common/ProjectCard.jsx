import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, category, description, image, bgColor }) => {
  const slug = title.toLowerCase().replace(/\s+/g, '');
  return (
    <Link to={`/work/${slug}`} className="no-underline">
      <div className="group shadow-xs rounded-3xl transition-all duration-300 border border-gray-100/50 hover:border-gray-100 bg-white hover:scale-[1.02] overflow-hidden cursor-pointer">
        {/* Image Container */}
        <div className={`rounded-t-2xl overflow-hidden mb-8 relative aspect-7/4 ${bgColor} flex items-center justify-center transition-transform duration-500 overflow-hidden mask-down-fade`}>
           <img 
             src={image} 
             alt={title}
             className="w-full h-full object-cover opacity-90 mix-blend-multiply transition-opacity group-hover:opacity-100"
           />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3 px-6 md:px-8 ">
           <h3 className="text-2xl font-bold text-primary-dark">{title}</h3>
           <span className="inline-block px-3 py-1 bg-primary-light text-xs font-medium text-primary rounded-lg whitespace-nowrap">
              {category}
           </span>
        </div>
        <p className="text-gray-500 leading-relaxed max-w-md px-6 md:px-8 pb-6">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
