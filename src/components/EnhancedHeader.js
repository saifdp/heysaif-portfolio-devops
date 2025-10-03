import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDocker, FaAws, FaPython, FaReact, FaGitAlt, FaJenkins, FaJava, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiJavascript, SiSonarqube } from 'react-icons/si';
import emailjs from "@emailjs/browser";
import CloudBackground from './CloudBackground';
import ParticleBackground from './ParticleBackground';

// Import images
import newjavapipe from "./Images/newjavapipe.jpeg";
import simplepipe from "./Images/simplepipe.jpeg";
import travelguide from "./Images/travelguide.jpeg";
import virtuald from "./Images/virtuald.jpeg";
import weatherapp from "./Images/weatherapp.jpeg";
import quack from "./Images/quack.jpeg";
import Email from "./Images/Email.gif";

const EnhancedHeader = () => {
  const form = useRef();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l65drxk",
        "template_0tmhacr",
        form.current,
        "cfB8DfUleyV_ZFNWy"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const skills = [
    { name: 'Ansible', Icon: SiAnsible, color: 'text-red-500' },
    { name: 'AWS', Icon: FaAws, color: 'text-orange-500' },
    { name: 'Docker', Icon: FaDocker, color: 'text-blue-500' },
    { name: 'Git', Icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'Jenkins', Icon: FaJenkins, color: 'text-red-600' },
    { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'Kubernetes', Icon: SiKubernetes, color: 'text-blue-600' },
    { name: 'Python', Icon: FaPython, color: 'text-blue-400' },
    { name: 'React', Icon: FaReact, color: 'text-cyan-400' },
    { name: 'SonarQube', Icon: SiSonarqube, color: 'text-cyan-600' },
    { name: 'Terraform', Icon: SiTerraform, color: 'text-purple-500' },
    { name: 'Java', Icon: FaJava, color: 'text-red-500' },
  ];

  const projects = [
    {
      title: "CI/CD Pipeline for Java",
      description: "App to deploy on tomcat server",
      image: newjavapipe,
      link: "https://www.github.com/saifdp",
    },
    {
      title: "Automated CI/CD",
      description: "Pipeline for Django web app using AWS, Docker and Jenkins",
      image: simplepipe,
      link: "https://www.github.com/saifdp",
    },
    {
      title: "Travel Guide Web App",
      description: "Travel Guide is a web app developed with ReactJS which helps to find attractions.",
      image: travelguide,
      link: "https://github.com/saifdp/travel-guide",
    },
    {
      title: "Virtual Drawing",
      description: "Using Machine Learning",
      image: virtuald,
      link: "https://github.com/saifdp/virtual-drawing",
    },
    {
      title: "Weather App",
      description: "Weather web app. Enter your location and get to know the weather of your city.",
      image: weatherapp,
      link: "https://github.com/saifdp/weather-react",
    },
    {
      title: "Quake Check",
      description: "Earthquake Alert Mobile app which shows latest earthquake activities around the world.",
      image: quack,
      link: "https://github.com/saifdp/quake-check",
    },
  ];

  const socialLinks = [
    { Icon: AiOutlineInstagram, link: 'https://www.instagram.com/saif.dp', color: 'hover:text-pink-500' },
    { Icon: AiOutlineTwitter, link: 'https://www.twitter.com/saifdp_', color: 'hover:text-blue-400' },
    { Icon: AiFillGithub, link: 'https://www.github.com/saifdp', color: 'hover:text-gray-400' },
    { Icon: AiFillLinkedin, link: 'https://www.linkedin.com/in/saifdvg', color: 'hover:text-blue-600' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <CloudBackground />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold"
              >
                Hey There,<br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  I'm Saif.
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-4xl text-cyan-400 font-mono"
              >
                <TypeAnimation
                  sequence={[
                    'I build things for Web...',
                    2000,
                    'I automate deployments...',
                    2000,
                    'I design CI/CD pipelines...',
                    2000,
                    'I architect cloud solutions...',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex space-x-6 pt-8"
              >
                {socialLinks.map(({ Icon, link, color }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-4xl text-gray-400 ${color} transition-colors duration-300`}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Tech Icons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="relative w-full h-96">
                {[FaDocker, SiKubernetes, FaAws, SiTerraform, FaReact, FaPython, FaJenkins, FaGitAlt, SiAnsible].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: `${Math.random() * 80}%`,
                      left: `${Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-4 rounded-xl backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-cyan-500/10">
                      <Icon className="text-4xl text-cyan-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me!
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  Hello, and welcome to my portfolio website! I am Mohammed Saifuddin, a DevOps engineer, and I am excited to share my journey and projects with you.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  As a DevOps engineer, my goal is to bridge the gap between development and operations teams to streamline the software delivery process. I believe that automation, continuous integration, and continuous delivery are the key pillars of modern software development, and I am eager to learn and implement new tools and technologies to improve efficiency and quality.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl backdrop-blur-sm border border-cyan-500/20">
                  <div className="grid grid-cols-2 gap-4">
                    {['CI/CD', 'Cloud', 'DevOps', 'Automation'].map((item, index) => (
                      <motion.div
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className="bg-slate-800/50 p-6 rounded-xl text-center border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        <span className="text-2xl font-bold text-cyan-400">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section id="work" className="relative py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                Featured Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400"
              >
                Explore my DevOps and development work
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ y: -15, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30"
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                    
                    {/* Image container with overlay */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProject === index ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                      
                      {/* Animated overlay on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-blue-500/10 to-transparent"
                      />
                      
                      {/* Code icon in corner */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: hoveredProject === index ? 1 : 0,
                          scale: hoveredProject === index ? 1 : 0,
                        }}
                        className="absolute top-4 right-4 bg-cyan-500/90 p-3 rounded-xl backdrop-blur-sm"
                      >
                        <FaCode className="text-white text-xl" />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-6 space-y-4">
                      <motion.h3
                        className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300"
                      >
                        {project.title}
                      </motion.h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                          DevOps
                        </span>
                        <span className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                          CI/CD
                        </span>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex gap-4 pt-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
                        >
                          <AiFillGithub className="text-xl" />
                          <span>View Code</span>
                          <FaExternalLinkAlt className="text-sm" />
                        </motion.a>
                      </div>
                    </div>
                    
                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-[100px] transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Enhanced */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                Tech Arsenal
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400"
              >
                Technologies I work with daily
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group relative"
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                      rotateX: 10,
                      z: 50,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500 flex flex-col items-center space-y-4 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0"
                      animate={{
                        background: hoveredSkill === index
                          ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.15))'
                          : 'linear-gradient(135deg, rgba(6, 182, 212, 0), rgba(59, 130, 246, 0), rgba(168, 85, 247, 0))',
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Glowing orb effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      animate={{
                        boxShadow: hoveredSkill === index
                          ? `0 0 60px rgba(6, 182, 212, 0.4), inset 0 0 60px rgba(6, 182, 212, 0.1)`
                          : '0 0 0px rgba(6, 182, 212, 0)',
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Icon container with 3D effect */}
                    <motion.div
                      className="relative z-10"
                      animate={{
                        rotateY: hoveredSkill === index ? [0, 360] : 0,
                        scale: hoveredSkill === index ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: hoveredSkill === index ? 0.8 : 0,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        className="relative"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        {/* Glow behind icon */}
                        <motion.div
                          className={`absolute inset-0 blur-xl ${skill.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                          animate={{
                            scale: hoveredSkill === index ? [1, 1.5, 1] : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <skill.Icon className={`text-6xl ${skill.color} relative z-10 drop-shadow-2xl`} />
                      </motion.div>
                    </motion.div>
                    
                    {/* Skill name */}
                    <motion.span
                      className="relative z-10 text-lg font-bold text-gray-300 group-hover:text-white transition-colors duration-300"
                      animate={{
                        color: hoveredSkill === index ? '#06b6d4' : '#d1d5db',
                      }}
                    >
                      {skill.name}
                    </motion.span>
                    
                    {/* Progress bar animation */}
                    <motion.div
                      className="w-full h-1 bg-slate-700 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredSkill === index ? 1 : 0 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredSkill === index ? '100%' : 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </motion.div>
                    
                    {/* Particle effects on hover */}
                    <AnimatePresence>
                      {hoveredSkill === index && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                              initial={{
                                opacity: 1,
                                scale: 0,
                                x: 0,
                                y: 0,
                              }}
                              animate={{
                                opacity: 0,
                                scale: 1,
                                x: Math.cos((i * Math.PI * 2) / 6) * 50,
                                y: Math.sin((i * Math.PI * 2) / 6) * 50,
                              }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.8, delay: i * 0.05 }}
                            />
                          ))}
                        </>
                      )}
                    </AnimatePresence>
                    
                    {/* Corner decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-full transform -translate-x-10 translate-y-10 group-hover:-translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-16 text-center"
            >
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full border border-cyan-500/20">
                <p className="text-gray-400 text-lg">
                  Constantly learning and exploring new technologies 🚀
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contact Me!
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    required
                    className="w-full px-6 py-4 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="w-full px-6 py-4 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    rows="5"
                    className="w-full px-6 py-4 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </motion.form>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hidden md:flex justify-center items-center"
              >
                <img
                  src={Email}
                  alt="Contact"
                  className="w-3/4 rounded-2xl"
                />
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-20 pt-10 border-t border-cyan-500/20"
            >
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="flex space-x-6">
                  {socialLinks.map(({ Icon, link, color }, index) => (
                    <motion.a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-3xl text-gray-400 ${color} transition-colors duration-300`}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
                
                <div className="text-center md:text-right text-gray-400">
                  <p>©2025 HEYSAIF.COM</p>
                  <p>ALL RIGHTS RESERVED</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHeader;

