import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  current?: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    title: "AI Enablement Intern, Founder's Office",
    company: "Crowdera Pte Ltd",
    location: "Remote (India-based, with potential relocation to Malaysia/Singapore)",
    date: "June 2025 - Present",
    description: [
      "Working in the Founder's Office on AI initiatives.",
      "Developing innovative AI solutions for fundraising and nonprofit sector."
    ],
    current: true
  },
  {
    title: "Generative AI Engineer Intern",
    company: "Growhut",
    location: "Gurugram, Haryana",
    date: "May 2025",
    description: [
      "Migrated GenAI modules (Chat, Transcript) from OpenAI to Groq and Gemini for Surge and Finnulate (FTN AI), improving speed and scalability.",
      "Deployed services via AWS Lambda with tokenizer fallback and streaming support.",
      "Conducted R&D and prototyped multi-agent orchestration using n8n for productivity tools.",
      "Developed a scalable MCP-based pipeline to automate task execution from natural language prompts."
    ]
  },
  {
    title: "Project Intern",
    company: "Infosys Springboard",
    location: "Remote",
    date: "Nov 2024 - Jan 2025",
    description: [
      "Developed a RAG AI chatbot and Pandas AI agent for healthcare.",
      "Enabled document Q&A, conversational insights, and automated data trend analysis.",
      "Utilized FAISS, LangChain (experimental toolkits), and Gradio for implementation."
    ]
  },
  {
    title: "Machine Learning Operations (MLOps) Intern",
    company: "People Tech Group Inc.",
    location: "Hyderabad",
    date: "Jan 2024 - July 2024",
    description: [
      "Developed Text Similarity and Image Classification APIs to enhance IOP and OPG datasets' precision for ivory.ai.",
      "Integrated object detection workflows with MLflow for efficient model tracking.",
      "Implemented CI/CD pipelines for ML model deployment."
    ]
  }
];

const Experience: React.FC = () => {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,0,170,0.1),transparent_60%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block text-text">Experience</h2>
          <p className="text-secondary-text max-w-3xl mx-auto mt-4">
            My professional journey and experience working across various organizations.
          </p>
        </motion.div>

        <VerticalTimeline lineColor="rgba(110, 86, 207, 0.4)">
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: 'rgba(16, 18, 27, 0.4)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
                padding: '2rem',
                color: '#f1f5f9'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(110, 86, 207, 0.4)' }}
              date={experience.date}
              iconStyle={{
                background: experience.current 
                  ? 'linear-gradient(45deg, #6e56cf, #00ccff)' 
                  : 'rgba(110, 86, 207, 0.2)',
                color: '#f1f5f9',
                boxShadow: '0 0 0 4px rgba(110, 86, 207, 0.4)'
              }}
              icon={<Briefcase />}
            >
              <div className={`${experience.current ? 'text-secondary' : 'text-primary'} flex items-center gap-2 mb-1`}>
                <Calendar size={16} />
                <span className="text-sm">{experience.date}</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-1 text-text">{experience.title}</h3>
              <h4 className="text-lg text-secondary-text mb-3">{experience.company}<MapPin size={18} className="inline-block ml-10 mr-1" />{experience.location}</h4>
              <ul className="text-secondary-text list-disc pl-5 space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;