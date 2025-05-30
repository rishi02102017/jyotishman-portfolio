import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  date: string;
}

const blogData: BlogPost[] = [
  {
    id: "ai-model-ecosystem",
    title: "The Hidden Layer: Understanding the AI Model Ecosystem",
    summary: "Dive into the AI Model Ecosystem—discover how creators (OpenAI, Anthropic), providers (Hugging Face, AWS), and accelerators (GroqCloud, Nvidia DGX) shape the AI landscape. This guide breaks down their roles, pricing, and value, helping developers, leaders, and enthusiasts navigate the world of AI services.",
    url: "https://medium.com/@jyotishmandas85p/the-hidden-layer-understanding-the-ai-model-ecosystem-from-creators-to-providers-to-accelerators-44cff56b985b",
    image: "/images/Blog1.jpg",
    date: "April 2025"
  },
  {
    id: "gen-ai-models-2025",
    title: "The Latest Generative AI Models in 2025: A Comprehensive Guide",
    summary: "Explore the most advanced generative AI models of 2025, including GPT-4.5(orion), Gemini 2.5, Claude 3.7 Sonnet, Qwen 3 and more. This guide covers features, release timelines, multimodal capabilities, open-source options, and future trends—all in one place.",
    url: "https://medium.com/@jyotishmandas85p/the-latest-generative-ai-models-in-2025-a-comprehensive-guide-58f7dcb9f8f3",
    image: "/images/Blog2.jpg",
    date: "March 2025"
  },
  {
    id: "cursor-vs-windsurf",
    title: "Cursor vs Windsurf: The AI Coding Assistant Showdown for 2025",
    summary: "In-depth comparison of Cursor and Windsurf — two leading AI IDE assistants reshaping software engineering productivity.",
    url: "https://medium.com/@jyotishmandas85p/cursor-vs-windsurf-the-ai-coding-assistant-showdown-for-2025-af6f61d0fca2",
    image: "/images/Blog3.jpg",
    date: "February 2025"
  },
  {
    id: "darwix-hackathon",
    title: "Winning the Darwix AI Hackathon: Real-Time Transcription and AI Blog Title Generation in 90 Minutes",
    summary: "Built a fully functional AI system in 90 minutes — combining real-time transcription with AI-powered blog title generation. This article breaks down the architecture, tools (Whisper + GPT-4), and lessons from the Darwix AI Hackathon victory.",
    url: "https://medium.com/@jyotishmandas85p/winning-the-darwix-ai-hackathon-real-time-transcription-and-ai-blog-title-generation-in-90-minutes-071add759605",
    image: "/images/Blog4.jpg",
    date: "January 2025"
  }
];

const Blogs: React.FC = () => {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,0,170,0.05),transparent_60%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block text-text">Blog Posts</h2>
          <p className="text-secondary-text max-w-3xl mx-auto mt-4">
            Sharing insights, tutorials, and thoughts on AI, technology, and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogData.map((blog, index) => (
            <motion.a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              key={blog.id}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="glassmorphism overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-secondary mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{blog.date}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-secondary transition-colors text-text">
                  {blog.title}
                </h3>
                <p className="text-secondary-text line-clamp-3 mb-4">{blog.summary}</p>
                <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                  <span className="mr-2">Read on Medium</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://medium.com/@jyotishmandas85p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-primary text-primary hover:text-white hover:bg-primary/20 px-6 py-3 rounded-lg transition-all duration-300"
          >
            <span className="mr-2">View All Articles</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;