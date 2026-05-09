import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import logo from "../../assets/logos/logo.png";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (isMenuOpen || isMenuClosing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMenuClosing]);

  const navItems = ['Home', 'Services', 'Work', 'Contact'];

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center bg-linear-to-b from-surface-alt via-surface-alt/50 to-surface-alt/1">
      <div className="container md:px-4 px-10 md:h-20 h-14 flex items-center md:justify-around justify-between z-10">
        
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="" className='md:w-16 w-12 md:mx-10' />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center bg-linear-to-b from-neutral-50/40 via-neutral-400/20 to-neutral-50/40 backdrop-blur-xl border border-gray-200 rounded-4xl p-2 gap-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_2px_4px_0_rgb(115_115_115/0.1)]">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
            
            return (
              <Link
                key={item}
                to={path}
                className={`px-4 py-1.5 rounded-3xl text-md font-medium transition-shadow duration-200 ${
                  isActive
                  ? 'bg-white backdrop-blur-xl border border-neutral-500/40 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_2px_4px_0_rgb(115_115_115/0.1)] text-primary-hover' 
                  : 'hover:border hover:border-gray-300 transition-all'
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Actions - Desktop */}
        <div className="hidden md:flex items-center gap-3 ">
            <Link to="/contact" className="group bg-linear-to-b from-primary-hover to-primary border-2 hover:border-neutral-300 border-primary text-white py-2.5 px-5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 cursor-pointer">
              Let's Talk
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary-dark" />
          ) : (
            <Menu className="w-6 h-6 text-primary-dark" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar Menu - Rendered as Portal to cover full screen */}
      {(isMenuOpen || isMenuClosing) && createPortal(
        <>
          {/* Overlay */}
          <div
            className={`fixed top-14 left-0 right-0 bottom-0 md:hidden z-40 bg-black/50 backdrop-blur-sm ${isMenuClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
            onClick={closeMenu}
          />
          
          {/* Sidebar */}
          <nav className={`fixed right-0 top-14 h-full w-50 bg-surface-alt backdrop-blur-md md:hidden z-60 flex flex-col ${isMenuClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
            <div className="flex flex-col p-2 gap-2">
              {navItems.map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
                
                return (
                  <Link
                    key={item}
                    to={path}
                    onClick={closeMenu}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-600 hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </nav>
        </>,
        document.body
      )}

      <div className={`absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden ${location.pathname=='/' ? "block" : "hidden"} `}>
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[35%] h-[200%] bg-primary/12 rounded-full blur-[60px]"></div>
      </div>
    </header>
  );
};

export default Header;
