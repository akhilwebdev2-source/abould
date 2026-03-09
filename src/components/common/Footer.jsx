import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-surface-alt pt-20 overflow-hidden">

      {/* Curved White Footer */}
      <div 
        className="relative bg-white w-full pt-28 pb-12 px-4 shadow-lg footer-curve-container"
      >
        <div className="container mx-auto max-w-7xl">
            
            {/* Top Section: CTA */}
            <div className="text-center mb-24 relative z-10 px-100">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
                 Ready to Build <br/>
                 Something Extraordinary?
               </h2>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gray-100 mb-12"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-28">
                
                {/* Left: Logo & Copyright */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2 text-primary-dark font-bold text-xl">
                        <svg className="w-6 h-6 text-primary-dark" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M19.006 3.705a.75.75 0 10-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                           <path fillRule="evenodd" d="M3.019 11.114L18 5.667v3.421l4.006 1.457a.75.75 0 11-.512 1.41l-16.5-6a.75.75 0 010-1.41l1.523-.554A.75.75 0 013 3v7.77l.019.344zm3-4.344L18 2.408v9.92l-11.981-4.358V6.77z" clipRule="evenodd" />
                           <path d="M12 11a1 1 0 100-2 1 1 0 000 2z" /> {/* Placeholder generic logo icon */}
                           <path d="M4 10h4v4H4z" fill="currentColor"/> {/* Simplified cross-like logo form */}
                           <path d="M4 10h4v-4H4z" fill="currentColor" transform="rotate(45 6 8)"/>
                        </svg>
                        {/* Custom logo reconstruction based on image: + Shape */}
                        <div className="absolute opacity-0">Hidden Real Logo</div> 
                        {/* Reconstruction of the Plus-like logo in the image */}
                         <div className="flex items-center gap-2">
                             <div className="relative w-6 h-6 flex items-center justify-center bg-transparent">
                                 <div className="absolute w-2 h-6 bg-primary-dark rounded-full"></div>
                                 <div className="absolute h-2 w-6 bg-primary-dark rounded-full"></div>
                             </div>
                             <span>Akhil Studios</span>
                         </div>
                    </div>
                    <p className="text-gray-600 text-sm text-center md:text-left">
                       © Akhil Studios Inc. All Rights Reserved.
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
                                {social === 'twitter' && <Twitter className="w-4 h-4" />}
                                {social === 'facebook' && <Facebook className="w-4 h-4" />}
                                {social === 'instagram' && <Instagram className="w-4 h-4" />}
                                {social === 'linkedin' && <Linkedin className="w-4 h-4" />}
                             </a> 
                          ))}
                      </div>

                    {/* Links */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
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
