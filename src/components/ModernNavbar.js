import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Work', link: '#work' },
    { name: 'Contact', link: '#contact' },
  ];

  const scrollToSection = (e, link) => {
    e.preventDefault();
    if (link === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 border-b border-white/20'
          : 'bg-transparent'
      }`}
      style={scrolled ? {
        background: 'linear-gradient(to bottom, rgba(6, 182, 212, 0.05), rgba(15, 23, 42, 0.3))',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => scrollToSection(e, '#')}
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="relative"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-shadow">
                <motion.div
                  animate={{ 
                    rotate: [0, -360],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <span className="text-white font-bold text-xl">{"</>"}</span>
                </motion.div>
              </div>
              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-cyan-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.span 
              className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ 
                backgroundSize: '200% 200%',
                fontFamily: 'monospace'
              }}
            >
              heysaif.com
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => scrollToSection(e, item.link)}
                className="px-4 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://heysaif.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Blog
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/20"
            style={{
              background: 'linear-gradient(to bottom, rgba(6, 182, 212, 0.05), rgba(15, 23, 42, 0.3))',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => scrollToSection(e, item.link)}
                  className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://heysaif.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center rounded-lg font-semibold shadow-lg shadow-cyan-500/30"
              >
                Blog
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default ModernNavbar;

