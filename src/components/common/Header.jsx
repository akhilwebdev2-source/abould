import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-alt/80 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between z-10">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-primary text-2xl font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2H14V10H22V14H14V22H10V14H2V10H10V2Z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-primary-dark">Akhil Studios</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center bg-gray-100 rounded-xl px-2 py-1.5 shadow-sm gap-2">
          {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
            
            return (
              <Link
                key={item}
                to={path}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                  ? 'bg-white text-primary-dark shadow-sm' 
                  : 'text-gray-500 hover:text-primary-dark hover:bg-white/50'
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
            <button
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600 transition-all text-sm font-medium cursor-pointer group shadow-sm hover:shadow-md bg-white"
            >
              <span className="font-bold font-serif bg-primary-hover text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] pt-0.5">fi</span>
              <span>Fiverr</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group bg-linear-to-b from-primary-hover to-primary text-white py-2 px-5 rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer">
              Let's Talk
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[30%] h-[200%] bg-primary/12 rounded-full blur-[60px]"></div>
      </div>
    </header>
  );
};

export default Header;
