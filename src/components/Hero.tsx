import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const Hero: React.FC = () => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  const profileImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (profileImgRef.current) {
      const handleMouseMove = (e: MouseEvent) => {
        if (!profileImgRef.current) return;
        
        const { left, top, width, height } = profileImgRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        profileImgRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 md:px-8 lg:px-12">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#6e56cf",
            },
            links: {
              color: "#00ccff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="container mx-auto z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            
            <span className="hero-heading">Jyotishman Das</span>
            
          </h1>
          
          <div className="text-xl md:text-2xl font-medium mb-6 text-secondary-text">
            <TypeAnimation
              sequence={[
                'Generative AI Engineer',
                2000,
                'Full-Stack Developer',
                2000,
                'Machine Learning Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </div>
          
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 text-secondary-text">
            I love turning ideas into real-world applications—smart systems, intuitive tools, and end-to-end products that bring ideas to life. From AI to full-stack apps, I've led projects that turn complexity into clarity and blend innovation with real-world impact.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <a
              href="https://github.com/rishi02102017"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jyotishmandas85p/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-secondary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jyotishmandas85p@gmail.com"
              className="text-secondary-text hover:text-accent transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://medium.com/@jyotishmandas85p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-tertiary transition-colors"
            >
              <BookOpen size={24} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#projects" className="glow-button">
              View Projects
            </a>
            <a href="#contact" className="border border-primary bg-transparent hover:bg-primary/10 text-primary px-6 py-3 rounded-lg transition-all duration-300 text-center">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center">
              {/* Tags Positioned Outside */}
              <span className="absolute -top-8 -right-12 bg-secondary/80 text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-md backdrop-blur-sm border border-accent">
              Research-Driven Developer
              </span>
              <span className="absolute -bottom-8 -left-6 bg-secondary/80 text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-md backdrop-blur-sm border border-accent">
                Hackathon Winner × 2
              </span>

              {/* Circular Profile Picture */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-secondary/20 shadow-neon animate-pulse-slow">
                <img
                  ref={profileImgRef}
                  src="/images/PP.jpeg"
                  alt="Jyotishman Das"
                  className="w-full h-full object-cover transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 opacity-50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-secondary flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={24} />
      </motion.a>
    </div>
  );
};

export default Hero;