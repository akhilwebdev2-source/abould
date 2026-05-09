import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ContactSection from '../components/landing/ContactSection';
import ImageWithShimmer from '../components/common/ImageWithShimmer';
import { ArrowLeft, Component, Smartphone, Globe, Zap } from 'lucide-react';

const Project = () => {
  const { slug } = useParams();
  const project = projectsData.projects.find(p => p.title.toLowerCase().replace(/\s+/g, '') === slug);

  if (!project) {
    return (
      <div className="py-20 px-4 text-center mx-auto">
        <div className='w-full flex md:px-20 px-4'>
          <Link to="/work" className="inline-block text-left text-primary font-semibold mb-8 hover:text-primary-dark duration-300 text-xs md:text-base bg-linear-to-b from-gray-100/80 to-white px-4 py-2 rounded-xl border-2 border-white shadow-[0_1px_1px_rgba(9,30,66,0.12),0_0_1px_1px_rgba(9,30,66,0.06)] transition-all">
            <ArrowLeft className="inline-block mr-2 md:size-4 size-3" />
            Back to Projects
          </Link>
        </div>
        <h1 className="text-4xl font-semibold text-primary-dark my-8">Project not found</h1>
      </div>
    );
  }

  const { id, title, subtitle, category, industry, platform, cover, roles, status, sections, outcome, social, heroDescription, projectOverview1, projectOverview2 } = project;

  return (
    <div className="w-full overflow-x-hidden md:px-40 px-8">
      {/* Hero Section */}
      <section className="py-10 text-center mb-8 md:mb-16 -z-10" style={{ background: 'radial-gradient(ellipse at center, #f4fdf5 30%, #ffffff 80%)'}}>
        <div className='w-full flex'>
          <Link to="/work" className="inline-block text-left text-primary font-semibold mb-8 hover:text-primary-dark duration-300 text-xs md:text-base bg-linear-to-b from-gray-100/80 to-white px-4 py-2 rounded-xl border-2 border-white shadow-[0_1px_1px_rgba(9,30,66,0.12),0_0_1px_1px_rgba(9,30,66,0.06)] transition-all">
            <ArrowLeft className="inline-block mr-2 md:size-4 size-3" />
            Back to Projects
          </Link>
        </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-dark font-semibold mb-8">
            {subtitle}
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {heroDescription}
          </p>
        </div>
        <div className='flex md:flex-row flex-col items-center justify-center mt-20 gap-4'>
          <div className='bg-white rounded-2xl flex justify-center items-center md:gap-4 gap-2 md:p-4 p-3 shadow-xs'>
            <div className='p-2.5 bg-primary-light text-primary rounded-lg'>
              <Component size={18} />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <span className='md:text-sm text-xs text-gray-600'>Industry</span>
              <span className='font-semibold text-sm md:text-base'>{industry}</span>
            </div>
          </div>
          <div className='bg-white rounded-2xl flex justify-center items-center gap-4 p-4 shadow-xs'>
            <div className='p-2.5 bg-primary-light text-primary rounded-lg'>
              <Smartphone size={18} />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <span className='md:text-sm text-xs text-gray-600'>Platform</span>
              <span className='font-semibold text-sm md:text-base'>{platform}</span>
            </div>
          </div>
          <div className='bg-white rounded-2xl flex justify-center items-center gap-4 p-4 shadow-xs'>
            <div className='p-2.5 bg-primary-light text-primary rounded-lg'>
              <Globe size={18} />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <span className='md:text-sm text-xs text-gray-600'>Roles</span>
              <span className='font-semibold text-sm md:text-base flex flex-wrap'>{roles.join(' · ')}</span>
            </div>
          </div>
          <div className='bg-white rounded-2xl flex justify-center items-center gap-4 p-4 shadow-xs'>
            <div className='p-2.5 bg-primary-light text-primary rounded-lg'>
              <Zap size={18} />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <span className='md:text-sm text-xs text-gray-600'>Status</span>
              <span className='font-semibold text-sm md:text-base'>{status}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-8 md:py-16 bg-white">
          <h2 className="md:text-4xl text-3xl font-semibold text-primary-dark text mb-4">
            Project Overview
          </h2>
          <p className="text-gray-600 md:text-base text-sm leading-relaxed mb-2 text-justify">
            {projectOverview1}
          </p>
          <p className="text-gray-600 md:text-base text-sm leading-relaxed text-justify">
            {projectOverview2}
          </p>
      </section>

      {/* Project Sections */}
      <section className="md:py-16 py-8">
        <div className="max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="grid grid-cols-1 md:grid-cols-2 md:my-0 my-16 gap-6 md:gap-0 items-center justify-between"
              style={index % 2 === 1 ? { direction: 'rtl' } : {}}
            >
              <div style={index % 2 === 1 ? { direction: 'ltr' } : {}}>
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
                  <ImageWithShimmer
                    src={section.image}
                    alt={section.title}
                    className="w-full max-w-100 rounded-3xl hover:shadow-sm transition-all duration-300 hover:-translate-y-2"
                  />
                </div>
              </div>
              <div style={index % 2 === 1 ? { direction: 'ltr' } : {}}>
                <h3 className="text-2xl md:text-4xl font-semibold text-primary-dark mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {section.description}
                </p>
                <div className="mb-4 font-medium text-gray-500">Focus:</div>
                <ul className="ml-2 text-primary">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="font-bold shrink-0">•</span>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome Section */}
      <section className="md:py-16 bg-white">
        <div className="mx-auto">
          <h2 className="md:text-4xl text-3xl font-medium text-primary-dark mb-4">
            Outcome
          </h2>
          <p className="md:text-base text-sm text-gray-600 leading-relaxed text-justify">
            {outcome}
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
        <section className="py-16">
          <div
              className="bg-white p-4 rounded-3xl duration-300 border border-gray-100/70 hover:border-gray-200/70 hover:shadow-xs transition-all flex flex-col h-full"
              style={{
                background: 'radial-gradient(circle at top right, #E6F7F1 0%, #ffffff 20%)'
              }}
            >
              <div className="flex items-center mb-2">
                 <div className="w-25 overflow-hidden rounded-full">
                    <ImageWithShimmer src={social.profile} alt={social.name} className="w-full h-full" />
                 </div>
                 <div className='mb-4 flex flex-col gap-1.5'>
                    <h4 className="font-semibold text-primary-dark">{social.name}</h4>
                    <p className="text-xs text-gray-500">{social.country}</p>
                 </div>
              </div>

              <h3 className="text-lg font-bold text-primary-dark mb-4 leading-tight">
                 {social.heading}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed grow mb-3">
                 {social.message1}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed grow mb-3">
                 {social.message2}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed grow">
                 {social.message3}
              </p>
            </div>
        </section>
        <div className='w-full flex justify-center'>
          <Link to="/work" className="inline-block text-left text-primary font-semibold mb-8 hover:text-primary-dark duration-300 text-sm md:text-base bg-linear-to-b from-gray-100/80 to-white px-4 py-2 rounded-xl border-2 border-white shadow-[0_1px_1px_rgba(9,30,66,0.12),0_0_1px_1px_rgba(9,30,66,0.06)] transition-all">
            <ArrowLeft className="inline-block mr-2 size-4" />
            Back to Projects
          </Link>
        </div>
        <ContactSection />
    </div>
  );
};

export default Project;
