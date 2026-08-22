import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal the title section
    sr.reveal('.contact-title', {
      origin: 'bottom',
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
    });

    // Reveal the contact information section
    sr.reveal('.contact-info', {
      origin: 'left',
      distance: '100px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
    });

    // Reveal the contact form section
    sr.reveal('.contact-form', {
      origin: 'right',
      distance: '100px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error('Message could not be sent — contact form is not configured yet.');
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      toast.success("Message sent — I'll get back to you soon!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS send failed:', error);
      toast.error('Something went wrong sending your message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id='contact' className="min-h-screen gradient-background text-white pt-20 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="contact-title text-center mb-12 text-3xl md:text-4xl font-bold">
          <span className="gradient-text">Get in Touch</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10">
              <h2 className="gradient-text mb-8 text-2xl font-bold">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-blue-400">Email</h3>
                    <a href="mailto:ngetich.gideon@outlook.com" className="text-gray-300 hover:text-white transition-colors">
                      ngetich.gideon@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-blue-400">Phone</h3>
                    <a href="tel:+254742252910" className="text-gray-300 hover:text-white transition-colors">
                      +254 742 252 910
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-blue-400">Location</h3>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4 text-blue-400">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Ngetich-86"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-2xl text-blue-400 hover:text-white transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gideon-ngetich/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-2xl text-blue-400 hover:text-white transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10">
              <h2 className="gradient-text mb-8 text-2xl font-bold">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold text-blue-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-blue-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold text-blue-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-blue-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-semibold text-blue-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/10 border border-blue-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
