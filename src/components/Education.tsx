import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  courses: string[];
}

const educationData: EducationItem[] = [
  {
    institution: "Indian Institute of Technology Jodhpur",
    degree: "Master of Technology in Artificial Intelligence",
    duration: "2024-2026",
    location: "Jodhpur, Rajasthan, India",
    courses: [
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
      "Computer Vision",
      "Natural Language Understanding",
      "Speech Understanding",
      "Data Structure and Algorithmic Techniques",
      "MLOps",
      "DLOps",
      "Optimization in Data Science",
      "Foundation Models and Generative AI"
    ]
  },
  {
    institution: "Central Institute of Technology Kokrajhar",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "2019-2023",
    location: "Kokrajhar, Assam, India",
    courses: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "DBMS",
      "Software Engineering",
      "Computer Graphics",
      "Formal Language and Automata Theory",
      "Digital Image Analysis",
      "Robotics and CV"
    ]
  }
];

const Education: React.FC = () => {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(110,86,207,0.1),transparent_60%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block text-text">Education</h2>
          <p className="text-secondary-text max-w-3xl mx-auto mt-4">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="space-y-10">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="glassmorphism p-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex justify-center md:block">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-display font-semibold mb-2 text-text">
                    {education.institution}
                  </h3>
                  <h4 className="text-xl text-secondary mb-4">{education.degree}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-secondary-text mb-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium mb-3 text-text">Key Courses</h5>
                    <div className="flex flex-wrap gap-2">
                      {education.courses.map((course, idx) => (
                        <span key={idx} className="tech-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;