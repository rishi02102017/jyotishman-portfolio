import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-20 px-4 md:px-8 lg:px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(110,86,207,0.1),transparent_60%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block text-text">Contact Me</h2>
          <p className="text-secondary-text max-w-3xl mx-auto mt-4">
            Get in touch for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism p-8"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-text">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-text">Email</h4>
                  <a href="mailto:jyotishmandas85p@gmail.com" className="text-secondary-text hover:text-secondary transition-colors">
                    jyotishmandas85p@gmail.com
                  </a>
                  <br />
                  <a href="mailto:m24csa013@iitj.ac.in" className="text-secondary-text hover:text-secondary transition-colors">
                    m24csa013@iitj.ac.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-text">Phone</h4>
                  <p className="text-secondary-text">+91-9101284785</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-text">Location</h4>
                  <p className="text-secondary-text">Jodhpur, Rajasthan, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-text">Connect With Me</h4>
              <div className="flex space-x-4">
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
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glassmorphism p-8"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-text">Send a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-text">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card-bg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-text"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card-bg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-text"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-text">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card-bg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-text"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card-bg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-text resize-none"
                  placeholder="Hello! I'd like to discuss a project with you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="glow-button w-full flex items-center justify-center gap-2"
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
              
              {success && (
                <div className="text-success text-sm flex items-center justify-center">
                  Your message has been sent successfully!
                </div>
              )}
              
              {error && (
                <div className="text-error text-sm flex items-center justify-center">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <div className="text-center text-sm text-secondary-text mt-4">
                <p>💬 Quick Response: I typically respond within 24–48 hours.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;