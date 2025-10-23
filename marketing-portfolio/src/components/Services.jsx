// src/components/Services.jsx
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Marketing Strategy",
      description: "Comprehensive market analysis and strategic planning",
      icon: "🎯"
    },
    {
      title: "Brand Development",
      description: "Building memorable and impactful brand identities",
      icon: "🌟"
    },
    {
      title: "Digital Campaigns",
      description: "Data-driven digital marketing campaigns",
      icon: "📱"
    },
    {
      title: "Content Strategy",
      description: "Engaging content that converts",
      icon: "✍️"
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;