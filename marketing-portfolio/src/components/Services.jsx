// src/components/Services.jsx
import React from 'react';
import './Services.css';

// Import your custom images
import brandStrategy from '../assets/services/brand-strategy.png';
import contentStrategy from '../assets/services/content-strategy.png';
import influencerMarketing from '../assets/services/influencer-marketing.png';
import socialMediaManagement from '../assets/services/social-media-management.png';
import contentWriting from '../assets/services/content-writing.png';
import copywriting from '../assets/services/copywriting.png';
import seo from '../assets/services/seo.png';

const Services = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "Where your 'why' meets the world — with purpose, not buzzwords.",
      image: brandStrategy,
      color: "#7E6961"
    },
    {
      title: "Content Strategy",
      description: "Making sure every post, caption, and story earns its place online.",
      image: contentStrategy,
      color: "#7E6961"
    },
    {
      title: "Influencer Marketing",
      description: "Turning followers into fans and creators into brand storytellers.",
      image: influencerMarketing,
      color: "#7E6961"
    },
    {
      title: "Social Media Management",
      description: "We don't just manage your pages — we make them impossible to scroll past.",
      image: socialMediaManagement,
      color: "#7E6961"
    },
    {
      title: "Content Writing",
      description: "Words that sound good — and do good for your brand.",
      image: contentWriting,
      color: "#7E6961"
    },
    {
      title: "Copywriting",
      description: "Because sometimes, a single line can sell better than a whole sales team.",
      image: copywriting,
      color: "#7E6961"
    },
    {
      title: "SEO",
      description: "Helping Google find you first — and your customers, right after.",
      image: seo,
      color: "#7E6961"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-header">
        <h2>What can I help you with?</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
            style={{ backgroundColor: service.color }}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="card-hover-effect"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;