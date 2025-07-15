import React, { useState } from 'react';
import parentsImg from "@/assets/patrents .png";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add logic to send the form data to an API or email service
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Contact <span className="text-gradient">Us</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 text-center">
          Have a question or want to get in touch? Fill out the form below and we’ll get back to you soon!
        </p>
        <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center max-w-4xl mx-auto">
          {/* Founder Info & Image */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left bg-white rounded-2xl shadow-lg p-8 min-h-full">
            <img 
              src={parentsImg} 
              alt="Founders Devi Pokhrel and Tila Pokhrel" 
              className="w-full max-w-xs md:max-w-full md:w-auto h-56 md:h-[320px] object-cover rounded-xl shadow mb-6 mx-auto md:mx-0" 
              style={{ aspectRatio: '4/3' }}
            />
            <h3 className="text-2xl font-bold text-primary mb-2">Devi Pokhrel & Tila Pokhrel</h3>
            <p className="text-muted-foreground mb-2">Founders of Devi Kiwi Farm</p>
            <p className="text-base text-muted-foreground max-w-xs md:max-w-none">
              With a passion for sustainable farming and a love for the land, Devi and Tila Pokhrel have nurtured Devi Kiwi Farm from the ground up, bringing the freshest kiwis from Nepal's Tehrathum, Solma to your table.
            </p>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex-1 bg-white rounded-2xl shadow-lg p-8 space-y-6 w-full max-w-md flex flex-col justify-center min-h-full">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-primary text-primary-foreground font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-300"
              disabled={submitted}
            >
              {submitted ? 'Thank you for contacting us!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 