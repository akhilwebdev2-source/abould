import React, { useState } from 'react';
import { ArrowUpRight, Phone, Mail } from 'lucide-react';

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
    <section id="contact" className="py-24 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Contact Form */}
          <div className="flex-1 bg-linear-to-br from-green-50/70 via-yellow-50/70 to-pink-50/70 rounded-[2.5rem] p-8 md:px-12 shadow-sm border border-gray-100 relative overflow-hidden">
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
               <span className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/10">
                 <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                 Open for new projects
               </span>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-8 leading-tight text-center">
                Prefer a Direct Conversation?
              </h2>

              <div className="space-y-6 px-10">
                {/* Phone Item */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Call us</div>
                    <div className="text-lg font-semibold text-primary-dark">+91 11 222 3333</div>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email Us</div>
                    <div className="text-lg font-semibold text-primary-dark">Akhilstudios@email.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
               <p className="text-gray-600 pb-1 border-b border-b-black mb-6 mx-10 hover:-mx-10 transition-all">
                 Prefer Fiverr? <a href="#" className="text-primary hover:text-primary-hover no-underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all">View our Profile</a>
               </p>
               
               <div className="flex items-center gap-4 justify-center">
                  <div className="flex -space-x-4">
                    <img className="w-10 h-10 rounded-full border-2 border-surface-alt" src="https://placehold.co/100x100/f3f4f6/1a3c35?text=1" alt="User 1" />
                    <img className="w-10 h-10 rounded-full border-2 border-surface-alt" src="https://placehold.co/100x100/ffedd5/1a3c35?text=2" alt="User 2" />
                    <img className="w-10 h-10 rounded-full border-2 border-surface-alt" src="https://placehold.co/100x100/dcfce7/1a3c35?text=3" alt="User 3" />
                    <div className="w-10 h-10 rounded-full border-2 border-surface-alt bg-primary text-white flex items-center justify-center pl-1 text-xs font-bold">50+</div>
                  </div>
                  <div className="text-xs text-gray-500 max-w-[150px] leading-tight">
                    Join over 50+ businesses growing with Akhil Studios
                  </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
