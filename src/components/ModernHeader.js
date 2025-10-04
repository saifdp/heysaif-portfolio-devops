import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDocker, FaAws, FaPython, FaReact, FaGitAlt, FaJenkins, FaJava, FaRocket, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiJavascript, SiSonarqube, SiFlutter, SiPrometheus, SiGrafana, SiMongodb, SiArgo, SiGithubactions } from 'react-icons/si';
import { HiArrowRight, HiMail } from 'react-icons/hi';
import emailjs from "@emailjs/browser";

// Import images
import newjavapipe from "./Images/newjavapipe.jpeg";
import simplepipe from "./Images/simplepipe.jpeg";
import travelguide from "./Images/travelguide.jpeg";
import virtuald from "./Images/virtuald.jpeg";
import weatherapp from "./Images/weatherapp.jpeg";
import quack from "./Images/quack.jpeg";
import Email from "./Images/Email.gif";

const ModernHeader = () => {
  const form = useRef();
  const [activeTab, setActiveTab] = useState('all');

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
    { name: 'Ansible', Icon: SiAnsible, color: '#EE0000', category: 'automation' },
    { name: 'AWS', Icon: FaAws, color: '#FF9900', category: 'cloud' },
    { name: 'Docker', Icon: FaDocker, color: '#2496ED', category: 'container' },
    { name: 'Git', Icon: FaGitAlt, color: '#F05032', category: 'version' },
    { name: 'Jenkins', Icon: FaJenkins, color: '#D24939', category: 'cicd' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', category: 'language' },
    { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5', category: 'orchestration' },
    { name: 'Python', Icon: FaPython, color: '#3776AB', category: 'language' },
    { name: 'React', Icon: FaReact, color: '#61DAFB', category: 'frontend' },
    { name: 'SonarQube', Icon: SiSonarqube, color: '#4E9BCD', category: 'quality' },
    { name: 'Terraform', Icon: SiTerraform, color: '#7B42BC', category: 'iac' },
    { name: 'Java', Icon: FaJava, color: '#007396', category: 'language' },
    { name: 'Prometheus', Icon: SiPrometheus, color: '#E6522C', category: 'monitoring' },
    { name: 'Grafana', Icon: SiGrafana, color: '#F46800', category: 'monitoring' },
    { name: 'SQL', Icon: FaDatabase, color: '#336791', category: 'database' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', category: 'database' },
    { name: 'ArgoCD', Icon: SiArgo, color: '#EF7B4D', category: 'cicd' },
    { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF', category: 'cicd' },
  ];

  const projects = [
    {
      title: "CI/CD Pipeline for Java",
      description: "Complete CI/CD pipeline for Java applications with automated deployment to Tomcat server",
      image: newjavapipe,
      link: "https://www.github.com/saifdp",
      tags: ["Jenkins", "Docker", "Java"],
    },
    {
      title: "Automated CI/CD Django",
      description: "End-to-end CI/CD pipeline for Django web app using AWS, Docker and Jenkins",
      image: simplepipe,
      link: "https://www.github.com/saifdp",
      tags: ["AWS", "Docker", "Jenkins"],
    },
    {
      title: "Travel Guide Web App",
      description: "Modern travel guide built with ReactJS to discover attractions worldwide",
      image: travelguide,
      link: "https://github.com/saifdp/travel-guide",
      tags: ["React", "API", "Maps"],
    },
    {
      title: "Virtual Drawing",
      description: "AI-powered virtual drawing application using Machine Learning",
      image: virtuald,
      link: "https://github.com/saifdp/virtual-drawing",
      tags: ["Python", "ML", "OpenCV"],
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts",
      image: weatherapp,
      link: "https://github.com/saifdp/weather-react",
      tags: ["React", "API", "Weather"],
    },
    {
      title: "Quake Check",
      description: "Mobile app for real-time earthquake alerts and activity tracking",
      image: quack,
      link: "https://github.com/saifdp/quake-check",
      tags: ["Mobile", "API", "Alerts"],
    },
  ];

  const socialLinks = [
    { Icon: AiOutlineInstagram, link: 'https://www.instagram.com/saif.dp', label: 'Instagram' },
    { Icon: AiOutlineTwitter, link: 'https://www.twitter.com/saifdp_', label: 'Twitter' },
    { Icon: AiFillGithub, link: 'https://www.github.com/saifdp', label: 'GitHub' },
    { Icon: AiFillLinkedin, link: 'https://www.linkedin.com/in/saifdvg', label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950">
        {/* DevOps Cloud Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated cloud shapes */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-64 h-32 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-20 w-80 h-40 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-1/3 w-72 h-36 bg-purple-500/10 rounded-full blur-3xl"
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Floating DevOps icons - Left side */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-4 md:left-10 text-cyan-500/20 text-4xl md:text-6xl"
          >
            <FaDocker />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="hidden md:block absolute top-1/3 left-20 text-yellow-500/20 text-5xl"
          >
            <FaPython />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="absolute top-1/2 left-2 md:left-16 text-blue-400/20 text-4xl md:text-5xl"
          >
            <SiFlutter />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -17, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
            className="hidden lg:block absolute bottom-32 left-24 text-orange-400/20 text-5xl"
          >
            <SiPrometheus />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -21, 0] }}
            transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="hidden md:block absolute bottom-1/2 left-32 text-red-500/20 text-5xl"
          >
            <FaJenkins />
          </motion.div>
          
          {/* Floating DevOps icons - Right side */}
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-24 right-4 md:right-16 text-blue-500/20 text-4xl md:text-6xl"
          >
            <SiKubernetes />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [0, 360] }}
            transition={{ y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }, rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
            className="hidden md:block absolute top-1/3 right-20 text-cyan-400/20 text-5xl"
          >
            <FaReact />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -17, 0] }}
            transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-1/2 right-2 md:right-24 text-green-500/20 text-4xl md:text-5xl"
          >
            <FaNodeJs />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -19, 0] }}
            transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            className="hidden lg:block absolute bottom-1/3 right-16 text-orange-500/20 text-5xl"
          >
            <FaGitAlt />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -23, 0] }}
            transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="hidden md:block absolute bottom-32 right-28 text-red-400/20 text-5xl"
          >
            <SiAnsible />
          </motion.div>
          
          {/* Floating DevOps icons - Bottom center */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-20 left-8 md:left-1/4 text-purple-500/20 text-4xl md:text-6xl"
          >
            <FaAws />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="hidden lg:block absolute bottom-24 right-1/4 text-purple-400/20 text-5xl"
          >
            <SiTerraform />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="hidden lg:block absolute bottom-16 left-1/3 text-orange-500/20 text-5xl"
          >
            <SiGrafana />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                  Hey, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Saif</span>
                </h1>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl text-cyan-400 font-light flex items-center justify-center gap-3"
            >
              <FaRocket className="text-3xl" />
              <TypeAnimation
                sequence={[
                  'DevOps Engineer',
                  2000,
                  'Cloud Architect',
                  2000,
                  'Infrastructure Automation',
                  2000,
                  'CI/CD Pipeline Expert',
                  2000,
                  'Kubernetes Specialist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Automating infrastructure, orchestrating containers, and building cloud-native solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/80 transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center gap-6 pt-8"
            >
              {socialLinks.map(({ Icon, link, label }) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="text-3xl" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">About Me</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello, and welcome to my portfolio! I'm <strong className="text-cyan-400">Mohammed Saifuddin</strong>, a passionate DevOps engineer dedicated to transforming how teams deliver software.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My mission is to bridge the gap between development and operations, creating seamless pipelines that enable rapid, reliable deployments. I believe in automation, continuous integration, and the power of cloud infrastructure to drive innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '12+', label: 'Technologies' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl text-center border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                  style={{ willChange: 'transform' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
                  <div className="text-3xl font-bold text-cyan-400 relative z-10">{stat.number}</div>
                  <div className="text-sm text-gray-400 mt-2 relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-gradient-to-b from-slate-900 to-blue-950 relative overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Tech Arsenal</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <p className="text-xl text-gray-300 mt-6">DevOps & Cloud Technologies</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.03,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500 cursor-pointer"
                style={{ willChange: 'transform' }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <motion.div 
                    className="p-2 rounded-lg transition-all duration-200 relative"
                    style={{ backgroundColor: `${skill.color}15` }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <skill.Icon 
                      className="text-4xl transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" 
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <span className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                </div>
                
                {/* Subtle glow on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Featured Projects</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <p className="text-xl text-gray-300 mt-6">DevOps & Development Work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 border border-cyan-500/20 hover:border-cyan-500 cursor-pointer"
                style={{ willChange: 'transform' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></motion.div>
                </div>

                <div className="p-6 space-y-4 relative">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/30 hover:border-cyan-500 transition-all"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    View Project <HiArrowRight />
                  </motion.a>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={false}
                  animate={{
                    background: [
                      'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
                    ],
                    backgroundPosition: ['-200% 0', '200% 0'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <p className="text-xl text-gray-300 mt-6">Let's work together on your next project</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 bg-slate-800 border-2 border-cyan-500/20 rounded-2xl focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 bg-slate-800 border-2 border-cyan-500/20 rounded-2xl focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="w-full px-6 py-4 bg-slate-800 border-2 border-cyan-500/20 rounded-2xl focus:border-cyan-500 focus:outline-none transition-colors resize-none text-white placeholder:text-gray-500"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/80 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <HiMail className="text-xl" />
                  Send Message
                </motion.button>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center mt-6"
                >
                  <p className="text-gray-400">
                    or send an e-mail to{' '}
                    <motion.a
                      href="mailto:heysaif99@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors relative group"
                    >
                      <HiMail className="text-lg" />
                      <span className="relative">
                        heysaif99@gmail.com
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </span>
                    </motion.a>
                  </p>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center"
            >
              {/* Animated Contact Visualization */}
              <div className="relative w-full max-w-md h-96">
                {/* Center Message Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                      <HiMail className="text-6xl text-white" />
                    </div>
                    {/* Pulse rings */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-4 border-cyan-400"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-4 border-blue-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Floating Tech Icons Around */}
                {[
                  { Icon: FaGitAlt, color: '#F05032', position: 'top-8 left-8', delay: 0 },
                  { Icon: SiKubernetes, color: '#326CE5', position: 'top-12 right-12', delay: 0.3 },
                  { Icon: FaDocker, color: '#2496ED', position: 'bottom-16 left-16', delay: 0.6 },
                  { Icon: SiTerraform, color: '#7B42BC', position: 'bottom-12 right-8', delay: 0.9 },
                  { Icon: FaPython, color: '#3776AB', position: 'top-1/2 left-4', delay: 0.2 },
                  { Icon: FaReact, color: '#61DAFB', position: 'top-1/2 right-4', delay: 0.5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, type: "spring" }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                      style={{ 
                        backgroundColor: `${item.color}20`,
                        border: `2px solid ${item.color}40`
                      }}
                    >
                      <item.Icon className="text-3xl" style={{ color: item.color }} />
                    </div>
                  </motion.div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 50 30 Q 200 100, 200 200"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                  <motion.path
                    d="M 350 50 Q 250 100, 200 200"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 text-white border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {socialLinks.map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>© 2025 HEYSAIF.COM</p>
              <p>ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernHeader;

