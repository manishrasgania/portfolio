// src/components/About.jsx
import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import journeyImage from './journey.png';
import brandstrategist from './brandstrategist.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className={`about-container ${isVisible ? 'visible' : ''}`}>
        
        {/* Header */}
        <div className="about-header">
          <div className="title-container">
            <h2>My Story So Far</h2>
            <div className="title-accent"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="about-content">
          
          {/* Left Column - Journey & Stats */}
          <div className="main-content-column">
            <div className="content-cards">
              
              {/* Journey Card */}
              <div className="content-card journey-card">
                <div className="card-header">
                  
                  <h3>The Journey</h3>
                </div>
                
                <p>
                  I've hopped across numerous brands and hundreds of briefs — a speed-dating tour through FMCG, tech, fashion, skincare, and everything in between.
                </p>
                <div className="highlight-text">
                  The fun part? I didn't just work on the ones that went live — I explored the worlds of many that didn't, because curiosity doesn't need a campaign code.
                </div>
                <p>
                From FMGC to beauty or skincare, I've learned to shift gears faster than a Formula 1 pit stop. At my last firm, I worked with a senior strategist (an Ogilvy alum) and even teamed up with the CEO of one of their sister companies, which provided a wonderful opportunity to see and work on how ideas evolve from a spark to a full-blown marketing moment.
                </p>
              </div>

              {/* Stats Card */}
              <div className="content-card stats-card">
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-number">80-100</span>
                    <span className="stat-label">Brands Worked With</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">400+</span>
                    <span className="stat-label">Briefs</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Image */}
          <div className="image-column">
            <div className="main-image-placeholder">
              <div className="image-container">
                <img src={journeyImage} alt="Brand Strategy Work" />
              </div>
            </div>
            {/* Moved Closing Line Here */}
            <p className="closing-line-big">
              Still learning, always creating — and, well, occasionally getting it right.
            </p>
          </div>
        </div>

        {/* Why Strategist Section */}
        <div className="why-strategist-section">
          <div className="why-content-grid">
            
            {/* Left Column - Image */}
            <div className="why-image-column">
              <div className="why-image-placeholder">
                <div className="image-container">
                  <img src={brandstrategist} alt="Why Brand Strategy Matters" />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="why-content-column">
              <div className="why-main-card">
                <div className="why-header">
                  
                  <h3>Why You Do Need a Brand Strategist ?</h3>
                </div>
                
                <div className="why-content">
                  <div className="why-point-card">
                    <p className="why-intro">
                    When your brand hits a wall — be it low engagement [low awareness, considerations, retention or conversions], unclear positioning, or mixed messaging — that’s where a strategist steps in. 
                    </p>
                  </div>
                  
                  <div className="why-point-card">
                   
                    <p>A creative marketing/brand strategist digs into cultural and consumer insights to understand what’s actually holding you back. They help you see the gap between how you’re seen and how you want to be seen.</p>
                  </div>

                  <div className="why-point-card">
                    <h4>Here’s what having a strategist changes for you:</h4>
                    <p>- They make <b>every move guided by real TG insight</b> — not guesswork.                    </p>
                    <p>- They <b>help your brand story, positioning, and communication</b> make sense to the right TG.</p>
                    <p>- They ensure every idea not only looks good but is both <b>creatively and strategically driven.</b></p>
                  </div>

                  
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Skills Showcase 
        <div className="skills-showcase">
          <h3>What can I help you with?
          </h3>
          <div className="skills-grid">
            <div className="skill-item">
              <h4>Brand Strategy</h4>
              <p> Where your ‘why’ meets the world — with purpose, not buzzwords.
              </p>
            </div>
            <div className="skill-item">
              <h4>Content Strategy</h4>
              <p> Making sure every post, caption, and story earns its place online.</p>
            </div>
            <div className="skill-item">
              <h4>Influencer Marketing</h4>
              <p>Turning followers into fans and creators into brand storytellers.</p>
            </div>
            <div className="skill-item">
              <h4>Social Media Management</h4>
              <p>We don’t just manage your pages — we make them impossible to scroll past.</p>
            </div>
            <div className="skill-item">
              <h4>Content Writing</h4>
              <p>Words that sound good — and do good for your brand.</p>
            </div>
            <div className="skill-item">
              <h4>Copywriting</h4>
              <p>Because sometimes, a single line can sell better than a whole sales team.</p>
            </div>
            <div className="skill-item">
              <h4>SEO</h4>
              <p>Helping Google find you first — and your customers, right after.</p>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default About;