import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  provider: string;
  date: string;
  credential?: string;
  url?: string;
  skills?: string[];
}

const certificationsData: Certification[] = [
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect - Associate",
    provider: "Amazon Web Services",
    date: "April 2024",
    credential: "AWS04376266",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/de9abc5ec4e44c5bb2487fddd2ff37eb",
    skills: [
      "Designing secure, scalable AWS architectures",
      "EC2, S3, RDS, VPC, Lambda deployment",
      "Fault-tolerant systems implementation",
      "IAM-based security best practices",
      "Performance monitoring and disaster recovery"
    ]
  },
  {
    id: "ai-primer",
    title: "Artificial Intelligence Primer Certification",
    provider: "Infosys Springboard",
    date: "August 2024",
    skills: [
      "Neural network theory",
      "Applications in NLP and computer vision",
      "Human-in-the-loop AI systems",
      "AI safety, bias, and explainability",
      "AI-first solution design"
    ]
  },
  {
    id: "agile-scrum",
    title: "Agile Scrum in Practice",
    provider: "Infosys Springboard",
    date: "August 2024",
    skills: [
      "Agile methodology and Scrum framework",
      "Sprint planning and backlog refinement",
      "Story point estimation",
      "Team dynamics and role clarity",
      "Agile mindset for product development"
    ]
  },
  {
    id: "net-linq",
    title: ".Net LINQ to XML",
    provider: "Skill-Lync",
    date: "January 2022",
    credential: "c69btaiezw"
  },
  {
    id: "azure-ai",
    title: "Microsoft Azure AI Fundamentals",
    provider: "Skill-Lync",
    date: "January 2022",
    credential: "yi56xq4e17"
  }
];

const Certifications: React.FC = () => {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,204,255,0.1),transparent_60%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block text-text">Certifications</h2>
          <p className="text-secondary-text max-w-3xl mx-auto mt-4">
            Professional certifications and credentials that validate my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="glassmorphism p-6"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1 text-text">{cert.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary">{cert.provider}</span>
                    <span className="text-secondary-text">•</span>
                    <div className="flex items-center text-secondary-text">
                      <Calendar size={14} className="mr-1" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>
                  {cert.credential && (
                    <div className="text-sm text-secondary-text mb-3">
                      Credential ID: {cert.credential}
                    </div>
                  )}
                </div>
              </div>
              
              {cert.skills && cert.skills.length > 0 && (
                <div className="ml-16 mb-4">
                  <div className="space-y-1">
                    {cert.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle size={14} className="text-accent mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-secondary-text">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {cert.url && (
                <div className="ml-16">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary hover:text-secondary-text transition-colors text-sm"
                  >
                    <span className="mr-1">Verify Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;