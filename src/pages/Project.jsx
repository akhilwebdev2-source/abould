import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Project = () => {
  const { slug } = useParams();
  const project = projectsData.projects.find(p => p.title.toLowerCase().replace(/\s+/g, '') === slug);

  if (!project) {
    return (
      <div className="py-24 px-4 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark mb-8">Project not found</h1>
        <Link to="/work" className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors duration-300">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const { title, subtitle, sections, outcome, social, heroDescription, projectOverview1, projectsOverview2 } = project;

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-white via-green-50 to-white py-10 text-center mb-8 md:mb-16 px-4">
        <Link to="/work" className="inline-block text-left w-full text-primary font-semibold mb-8 hover:text-primary-dark transition-colors duration-300 text-sm md:text-base md:px-30 px-6">
            ← Back to Projects
        </Link>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-3xl text-primary font-semibold mb-8">
            {subtitle}
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-8 md:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-10">
            Project Overview
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 text-justify">
            {projectOverview1}
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
            {projectsOverview2}
          </p>
        </div>
      </section>

      {/* Project Sections */}
      <section className="py-16 md:py-24 px-4 mb-16 md:mb-24">
        <div className="max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32"
              style={index % 2 === 1 ? { direction: 'rtl' } : {}}
            >
              <div style={index % 2 === 1 ? { direction: 'ltr' } : {}}>
                <div className="flex justify-center items-center">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full max-w-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  />
                </div>
              </div>
              <div style={index % 2 === 1 ? { direction: 'ltr' } : {}}>
                <h3 className="text-2xl md:text-4xl font-bold text-primary-dark mb-6">
                  {section.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-primary font-bold text-xl shrink-0">✓</span>
                      <span className="text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 md:py-24 px-4 bg-white mb-16 md:mb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-10">
            Outcome
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
            {outcome}
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      {social && (
        <section className="py-16 md:py-24 px-4 bg-gray-50 mb-16 md:mb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-16">
              What Our Client Says
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 md:gap-6 mb-8">
                <img
                  src={social.profile}
                  alt={social.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-primary shrink-0"
                />
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-primary-dark">
                    {social.name}
                  </h4>
                  <p className="text-sm md:text-base text-gray-500">
                    {social.country}
                  </p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-6 md:pl-8">
                <p className="text-base md:text-lg font-semibold text-primary-dark mb-6 leading-relaxed">
                  "{social.heading}"
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {social.message}
                </p>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-linear-to-br from-blue-50 to-green-50 py-20 md:py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-12">
            Ready to Build Something Extraordinary?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-10 md:px-16 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project;
