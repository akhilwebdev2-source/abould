import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from "../../assets/logos/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-surface-alt pt-20 overflow-hidden">

      {/* Curved White Footer */}
      <div 
        className="relative bg-white w-full pt-28 pb-12 px-4 shadow-lg footer-curve-container"
      >
        <div className="container mx-auto max-w-7xl">
            
            {/* Top Section: CTA */}
            <div className="text-center md:mb-24 relative z-10 lg:px-70 md:px-40 sm:px-25 px-10">
               <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading text-primary-dark tracking-tight leading-tight mb-6">
                 Ready to Build Something Extraordinary?
               </h2>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gray-100 mb-12"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 md:px-28">
                
                {/* Left: Logo & Copyright */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center gap-2 text-primary-dark font-bold text-xl">
                      <img src={logo} alt="" className='w-30' />
                    </div>
                    <p className="text-gray-600 text-sm text-center md:text-left">
                       © Abould Inc. All Rights Reserved.
                    </p>
                </div>

                {/* Right: Socials & Links */}
                <div className="flex flex-col items-center md:items-end gap-6">
                    
                      {/* Social Icons */}
                      <div className="flex items-center gap-3">
                          {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                             <a 
                               key={social} 
                               href="#" 
                               className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all shadow-sm hover:shadow-md"
                             >
                                {/* Icons */}
                                {social === 'twitter' && <Twitter className="w-4 h-4" fill='1' />}
                                {social === 'facebook' && <Facebook className="w-4 h-4" fill='1' />}
                                {social === 'instagram' && <Instagram className="w-4 h-4" fill='1' />}
                                {social === 'linkedin' && <Linkedin className="w-4 h-4" fill='1' />}
                             </a> 
                          ))}
                      </div>

                    {/* Links */}
                    <div className="flex items-center text-center gap-2 text-sm text-gray-600">
                        <a href="#" className="hover:text-primary-hover transition-colors">Privacy Policy</a>
                        <span>•</span>
                        <a href="#" className="hover:text-primary-hover transition-colors">Terms & condition</a>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
