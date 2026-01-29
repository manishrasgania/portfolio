// src/components/Insights.jsx
import React from 'react';
import './Insights.css';

// Import your images - update these paths to match your actual image files
import consumerPsychologyImage from '../assets/insights/consumer-psychology.png';
import culturalNuancesImage from '../assets/insights/cultural-nuances.png';
import marketPatternsImage from '../assets/insights/market-patterns.png';
import audienceBehaviorImage from '../assets/insights/audience-behavior.png';

const Insights = () => {
  const insights = [
    {
      title: "Consumer Psychology",
      description: "Understanding why people buy what they buy—spoiler alert: it's rarely just about the product.",
      image: consumerPsychologyImage
    },
    {
      title: "Cultural Insights",
      description: "Every region, every demographic has its own product integration language. I try to learn as many as I can.",
      image: culturalNuancesImage
    },
    {
      title: "Market Patterns",
      description: "Spotting trends before they become trends (with a healthy dose of luck and good timing)",
      image: marketPatternsImage
    },
    {
      title: "Audience Behavior",
      description: "What makes people pause, engage, share, and ultimately trust a brand enough to choose it",
      image: audienceBehaviorImage
    }
  ];

  return (
    <section id="insights" className="insights">
      <div className="insights-container">
        <div className="insights-header">
          <h2>What I've Learned About People & Brands</h2>
          <p className="insights-subtitle">(The stuff that actually matters)</p>
        </div>
        
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <div className="insight-image-container">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="insight-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="insight-content">
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;