import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Info } from 'lucide-react';
import Modal from 'react-modal';

// Ensure Modal is accessible
Modal.setAppElement('#root');

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  category: string[];
  technologies: string[];
}

const projectsData: Project[] = [
  {
    id: "eventshub",
    title: "Eventshub",
    description: "End-to-end powered event management platform built with Next.js (TypeScript), TailwindCSS, Redux Toolkit, Firebase Auth, Node.js, Express.js, MongoDB Atlas, FastAPI, LangChain, OpenRouter API, Google Custom Search API, and deployed via Vercel and Render with QR code ticketing, livestream embedding, and modular REST + AI microservices architecture.",
    image: "/images/EventHub-Preview-image.png",
    github: "https://github.com/samyakraka/eventhub",
    live: "https://event-hub-two-phi.vercel.app/",
    category: ["Hackathon", "Web Dev"],
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Redux", "Firebase", "Node.js", "Express", "MongoDB", "FastAPI", "LangChain"]
  },
  {
    id: "darwix-ai",
    title: "Darwix AI Hackathon",
    description: "Real-time Audio Transcription with Speaker Diarization and AI-Powered Blog Title Suggestions using Django REST, Faster-Whisper, OpenRouter (Mistral), and Resemblyzer – built for the Darwix AI Hackathon.",
    image: "/images/Darwix-AI-Hackathon.jpg",
    github: "https://github.com/rishi02102017/Darwix-AI-Hackathon",
    category: ["Hackathon", "AI/ML"],
    technologies: ["Python", "Django", "REST API", "Whisper", "Resemblyzer", "OpenRouter", "Mistral"]
  },
  {
    id: "rna-3d",
    title: "Stanford RNA 3D Folding",
    description: "A modular deep learning pipeline for RNA tertiary structure prediction, combining contrastive pretraining, graph-transformer-based geometry modeling, and denoising diffusion refinement — built end-to-end in PyTorch, powered by PyTorch Geometric, and trained on the Stanford RNA 3D Folding Dataset.",
    image: "/images/RNA.png",
    github: "https://github.com/rishi02102017/RNA3D-FoldNet-GNN-Transformer-Diffusion",
    category: ["AI/ML"],
    technologies: ["PyTorch", "PyTorch Geometric", "Transformers", "GNN", "DDPM", "Diffusion"]
  },
  {
    id: "voice-ai",
    title: "Interior Design Voice AI Agent",
    description: "AI-powered Voice Assistant for Interior Design lead qualification using Vapi, FastAPI, Replit, Airtable API, Mistral 7B (TogetherAI), Deepgram, & RimeAI with webhook logging, n8n automation (webhook to Airtable), and Postman-based API testing for seamless debugging and JSON log backups.",
    image: "/images/Interior_Design_Vapi.png",
    github: "https://github.com/rishi02102017/Multi-Agent-Voice-System",
    category: ["AI/ML"],
    technologies: ["FastAPI", "Replit", "Airtable", "Mistral", "Deepgram", "n8n", "Webhooks"]
  },
  {
    id: "lanenet",
    title: "LaneNet-Vision",
    description: "Real-time lane detection using OpenCV (Canny/Hough transforms, CLAHE, HLS) and Lane2Seq-ViT (Transformer-based sequence generation), with ENet segmentation (PyTorch) on TuSimple/LLAMAS datasets. Features multi-format, prompt-driven detection, MAE pre-training, and a deployable Streamlit UI.",
    image: "/images/Lane-detection.png",
    github: "https://github.com/rishi02102017/LaneNet-Vision",
    category: ["AI/ML"],
    technologies: ["OpenCV", "PyTorch", "Transformers", "ENet", "Streamlit", "Computer Vision"]
  },
  {
    id: "nmt",
    title: "Neural Machine Translation – English to Hindi",
    description: "Neural Machine Translation (NMT) system for English-to-Hindi using PyTorch — includes both LSTM with Attention and Transformer models. Trained on IIT Bombay parallel corpus with Word2Vec/FastText embeddings. BLEU evaluation, sample predictions, and loss visualizations included.",
    image: "/images/NMT.png",
    github: "https://github.com/rishi02102017/seq2seq-english-hindi-nmt-transformer-lstm",
    category: ["AI/ML"],
    technologies: ["PyTorch", "NLP", "LSTM", "Transformer", "Word2Vec", "FastText"]
  },
  {
    id: "sentiment",
    title: "Deep Sentiment Analysis with FFNN & LSTM",
    description: "Advanced sentiment classification pipeline using PyTorch, LSTM, FFNN, and spaCy — applied across IMDB, Sentiment140, and Twitter datasets with real-time tokenization, padding, and evaluation",
    image: "/images/Sentiment-Analysis.jpg",
    github: "https://github.com/rishi02102017/neurosemantics-networks",
    category: ["AI/ML"],
    technologies: ["PyTorch", "spaCy", "LSTM", "FFNN", "NLP", "Sentiment Analysis"]
  },
  {
    id: "onnx",
    title: "ONNX Model Deployment",
    description: "ONNX model deployment using PyTorch, ONNX Runtime C++ API (Windows) & Android (Java/Kotlin) with Visual Studio Build Tools, JNI, and Android Studio integration.",
    image: "/images/ONNX.jpg",
    github: "https://github.com/rishi02102017/ONNX-Cpp-Android-Deployment",
    category: ["Web Dev"],
    technologies: ["ONNX", "PyTorch", "C++", "Android", "Java", "Kotlin", "JNI"]
  }
];

const categories = ["All", "Hackathon", "AI/ML", "Web Dev"];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category.includes(selectedCategory));

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="py-20 px-4 md:px-8 lg:px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,204,255,0.1),transparent_60%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block text-text">Projects</h2>
          <p className="text-secondary-text max-w-3xl mx-auto mt-4">
            A collection of my work in AI, web development, and other areas. Each project
            showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-neon'
                  : 'bg-card-bg text-secondary-text hover:bg-primary/20'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="project-card glassmorphism overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => openModal(project)}
                    className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-secondary hover:bg-secondary hover:text-background transition-all duration-300"
                  >
                    <Info size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 text-text">{project.title}</h3>
                <p className="text-secondary-text text-sm line-clamp-3 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30">
                    {project.category.join(", ")}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-secondary transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-secondary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="glassmorphism max-w-3xl mx-auto mt-20 p-0 outline-none"
          overlayClassName="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex justify-center overflow-y-auto"
        >
          {selectedProject && (
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-white"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-4">{selectedProject.title}</h3>
                <p className="text-secondary-text mb-6">{selectedProject.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-display font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
