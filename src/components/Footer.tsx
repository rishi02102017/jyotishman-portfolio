import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background relative overflow-hidden py-12 px-4 md:px-8 border-t border-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(110,86,207,0.1),transparent_50%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold hero-heading mb-4">JD<span className="text-secondary">.</span></h2>
            <p className="text-secondary-text">
              A portfolio showcasing my projects, experiments, and ideas in AI, machine learning, and software development. Let's connect and build something impactful.
            </p>
          </div>
          
          <div className="md:text-center">
            <h3 className="text-lg font-display font-semibold mb-4 text-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-text hover:text-secondary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-secondary-text hover:text-secondary transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-text hover:text-secondary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#blogs" className="text-secondary-text hover:text-secondary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-text hover:text-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-lg font-display font-semibold mb-4 text-text">Connect</h3>
            <div className="flex md:justify-end space-x-4 mb-6">
              <a
                href="https://github.com/rishi02102017"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/jyotishmandas85p/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-secondary" />
              </a>
              <a
                href="mailto:jyotishmandas85p@gmail.com"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-accent" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="text-secondary-text hover:text-secondary transition-colors flex items-center md:justify-end"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-primary/10 pt-6 text-center">
          <p className="text-secondary-text text-sm">
            © {new Date().getFullYear()} Jyotishman Das. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;