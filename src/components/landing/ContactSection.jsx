import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: []
  });

  const projectTypes = [
    "Web Development",
    "UI/UX Design",
    "Mobile App Development",
    "Branding",
    "Other"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeSelect = (type) => {
    setFormData((prev) => {
      const isSelected = prev.projectType.includes(type);
      return {
        ...prev,
        projectType: isSelected
          ? prev.projectType.filter((t) => t !== type)
          : [...prev.projectType, type]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add real submission logic here
    alert("Thanks for reaching out! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="md:py-24 py-12 bg-surface-alt">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-30 p-8 bg-primary rounded-4xl">
          
          {/* Left Column: Contact Form */}
          <div className="flex-1 bg-white rounded-4xl p-8 md:px-12 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Let's Talk About Your Project</h3>
              <p className="text-gray-500 text-sm">Tell us about your idea, and we'll help you shape it into a powerful digital experience.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-primary-dark mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name" 
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-primary-dark mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com" 
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-primary-dark mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 111 222 333" 
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold text-primary-dark mb-3">Project Type</label>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleTypeSelect(type)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 border ${
                        formData.projectType.includes(type) 
                          ? 'bg-primary text-white border-primary shadow-md' 
                          : 'text-gray-500 border-gray-200 hover:border-primary/50 hover:text-primary-dark'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col items-center">
                <button 
                  type="submit" 
                  className="px-10 group bg-linear-to-b from-primary-hover to-primary text-white font-semibold py-3 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  Get a Free Consultation
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                <p className="text-center text-gray-500 text-xs mt-4">We usually respond within 24 hours.</p>
              </div>

            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:w-1/3 flex flex-col justify-center items-center space-y-10">
            
            {/* Badge */}
            <div>
               <span className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-xl text-sm font-medium border border-primary">
                 <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                 Open for new projects
               </span>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-8 leading-tight text-center">
                Prefer a Direct Conversation?
              </h2>

              <div className="space-y-6 px-10">
                {/* Phone Item */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-gray-100">
                     <Phone className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm text-primary-light">Call us</div>
                    <div className="font-semibold text-white">+91 9102455161</div>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center text-primary shadow-sm border border-gray-100 rounded-full">
                     <Mail className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm text-primary-light">Email Us</div>
                    <div className="font-semibold text-white">akhil@abould.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
                <a href="https://www.fiverr.com/akhil_gupta_07" target="_blank"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600 transition-all text-sm font-medium cursor-pointer group shadow-sm hover:shadow-md bg-white"
                >
                  <span className="font-bold font-serif bg-primary-hover text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] pt-0.5">fi</span>
                  <span>Fiverr</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
