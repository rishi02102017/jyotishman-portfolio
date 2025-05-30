import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Cpu, 
  Cloud, 
  LayoutGrid, 
  Terminal, 
  Braces, 
  FileCode 
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "SQL", "Bash", "Solidity"]
  },
  {
    name: "AI & Machine Learning",
    icon: <Cpu className="w-6 h-6 text-secondary" />,
    skills: ["PyTorch", "TensorFlow", "Keras", "LangChain", "Transformers", "Computer Vision", "NLP", "Deep Learning"]
  },
  {
    name: "Web Development",
    icon: <LayoutGrid className="w-6 h-6 text-accent" />,
    skills: ["React", "Next.js", "Node.js", "Express.js", "TypeScript", "TailwindCSS", "REST APIs", "Redux"]
  },
  {
    name: "Developer Tools",
    icon: <Terminal className="w-6 h-6 text-tertiary" />,
    skills: ["Git", "GitHub", "VSCode", "Jupyter", "Colab", "Docker", "Postman", "Cursor"]
  },
  {
    name: "Databases & Cloud",
    icon: <Database className="w-6 h-6 text-success" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "AWS", "Vercel", "Replit", "Render"]
  },
  {
    name: "AI Frameworks",
    icon: <Braces className="w-6 h-6 text-warning" />,
    skills: ["Hugging Face", "OpenAI", "LangChain", "spaCy", "NLTK", "SciKit-Learn", "FastAPI", "Streamlit"]
  },
  {
    name: "Cloud Services",
    icon: <Cloud className="w-6 h-6 text-error" />,
    skills: ["AWS EC2", "S3", "Lambda", "Vercel", "Netlify", "Heroku", "Google Cloud", "Azure"]
  },
  {
    name: "DevOps & Tools",
    icon: <FileCode className="w-6 h-6 text-primary" />,
    skills: ["CI/CD", "GitHub Actions", "Docker", "MLOps", "DLOps", "n8n", "Kubernetes", "Monitoring"]
  }
];

const Skills: React.FC = () => {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,204,255,0.05),transparent_70%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block text-text">Skills</h2>
          <p className="text-secondary-text max-w-3xl mx-auto mt-4">
            My technical expertise across various domains and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="glassmorphism p-6"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-lg font-display font-semibold text-text">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                    className="tech-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;