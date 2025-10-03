import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const EnhancedNavbar = () => {
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
    { name: 'HOME', link: '#' },
    { name: 'ABOUT', link: '#about' },
    { name: 'WORK', link: '#work' },
    { name: 'SKILLS', link: '#skills' },
    { name: 'CONTACT', link: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <HashLink to="#" className="flex items-center space-x-2">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">S</span>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                heysaif.com
              </span>
            </HashLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HashLink
                  smooth
                  to={item.link}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </HashLink>
              </motion.div>
            ))}
            <motion.a
              href="https://heysaif.tech"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
            >
              BLOGS
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <HashLink
              key={item.name}
              smooth
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300"
            >
              {item.name}
            </HashLink>
          ))}
          <a
            href="https://heysaif.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-center font-medium"
          >
            BLOGS
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default EnhancedNavbar;

