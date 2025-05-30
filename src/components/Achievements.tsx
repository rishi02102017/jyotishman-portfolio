import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievementsData = [
  "Support Team Member – Training & Placement Cell, IIT Jodhpur (Present)",
  "Core Team Member, CSR & Digital Media – Office of Corporate Relations (DoRA), IIT Jodhpur (Present)",
  "Winner – Darwix AI Hackathon: Built a fully functional AI system in under 90 minutes",
  "Winner – Crowdera Hack4RealGood Hackathon",
  "Top 5 Finish – CLASH-OF-T-AI-TANS, a Computer Vision Hackathon",
  "Diploma in Fine Arts",
  "Bachelor of Music – Specialized in Tabla",
  "U-19 Nationals Cricketer – Represented at the Under-19 National Level",
  "State-Level Swimmer",
  "Yellow Belt in Kung-Fu",
  "Completed Level 8 – ALOHA (Abacus Learning of Higher Arithmetic)"
];

const Achievements: React.FC = () => {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(0,204,255,0.1),transparent_60%)]"></div> {/* Using a blue gradient like secondary */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block text-text">Achievements</h2>
          <p className="text-secondary-text max-w-3xl mx-auto mt-4">
            Highlighting significant achievements and accomplishments.
          </p>
        </motion.div>

        <motion.ul
          ref={ref} // Reusing the ref for the list
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn} // Apply animation to the list container
          transition={{ duration: 0.6, delay: 0.3 }} // Add a slight delay
          className="text-secondary-text list-disc list-inside space-y-4 text-lg"
        >
          {achievementsData.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} // Stagger effect
            >
              {achievement}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Achievements; 
