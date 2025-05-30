import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Rocket, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-20 px-4 md:px-8 lg:px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(110,86,207,0.1),transparent_60%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block text-text">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism p-6 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-text">AI Expertise</h3>
            <p className="text-secondary-text">
              Specialized in generative models, NLP, computer vision, and MLOps with expertise in PyTorch, TensorFlow, and LangChain.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glassmorphism p-6 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
              <Rocket className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-text">Full-Stack Development</h3>
            <p className="text-secondary-text">
              Building end-to-end solutions with modern web frameworks, RESTful APIs, databases, and cloud deployment pipelines.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glassmorphism p-6 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-text">Problem Solving</h3>
            <p className="text-secondary-text">
              Converting complex challenges into elegant, innovative solutions that deliver real-world impact and value.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glassmorphism p-8 md:p-10"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-6 text-center text-text">My Journey</h3>
            <p className="text-secondary-text mb-6 leading-relaxed">
              I thrive on solving problems, learning fast, and bringing tech to life in creative, practical ways. With a background in Computer Science and specialization in Artificial Intelligence, I've developed a passion for building innovative solutions at the intersection of AI and software development.
            </p>
            <p className="text-secondary-text mb-6 leading-relaxed">
              Currently pursuing my Master's in AI at IIT Jodhpur, I'm focused on generative models, NLP, and computer vision. My experience ranges from implementing advanced deep learning models to developing full-stack applications, always with an emphasis on solving real-world problems.
            </p>
            <p className="text-secondary-text leading-relaxed">
              Whether it's a hackathon project completed in hours or a complex research implementation spanning months, I bring the same level of enthusiasm, attention to detail, and drive for excellence to every challenge.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;