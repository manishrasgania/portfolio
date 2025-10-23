// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2>A Brand & Marketing Strategist</h2>
          <div className="header-accent"></div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - Story */}
          <div className="story-column">
            <div className="story-content">
              <p className="story-intro">
                I've spent five years writing, creating, strategizing, and occasionally crying over campaign decks — starting as a content writer, jumping to copy and social media, and now carving my path out as a creative marketing/brand strategist.
              </p>
              
              <p className="story-continued">
                You've probably scrolled through a dozen portfolios already (and mine won't be your last). But before you go — here's my story in a nutshell:
              </p>

              <div className="highlight-stats">
                <div className="stat-item">
                  <span className="stat-number">80-100</span>
                  <span className="stat-label">Brands Worked With</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">400+</span>
                  <span className="stat-label">Briefs Executed</span>
                </div>
              </div>

              <p>
                I've hopped across 80–100 brands and nearly 400 briefs — a speed-dating tour through FMCG, tech, fashion, skincare, and everything in between.
              </p>

              <p className="highlight-text">
                The fun part? I didn't just work on the ones that went live — I explored the worlds of many that didn't, because curiosity doesn't need a campaign code.
              </p>

              <p>
                From hair oils to SaaS software, I've learned to shift gears faster than a Formula 1 pit stop. I've worked under Qoruz's senior strategist (an Ogilvy alum) and even teamed up with the CEO of one of their sister companies — which means I've seen how ideas grow from a spark to a full-blown marketing moment.
              </p>

              <p className="closing-line">
                Still learning, always creating — and, well, occasionally getting it right. ✨
              </p>
            </div>
          </div>

          {/* Right Column - Why Section */}
          <div className="why-column">
            <div className="why-card">
              <div className="why-icon">💡</div>
              <h3>Why Do You Need a Marketing Strategist?</h3>
              
              <div className="why-content">
                <p className="why-intro">
                  Because every brand has stories to tell — but not every story gets heard.
                </p>
                
                <p>
                  A creative strategist bridges that gap — translating your "what we do" into "why people should care."
                </p>

                <div className="value-proposition">
                  <p>
                    I don't just help brands look good; I help them mean something — whether that's through a one-line hook, a meme campaign that trends, or a long-term brand story that actually moves people.
                  </p>
                </div>

                <div className="portfolio-cta">
                  <p>
                    Not the first portfolio you'll see, not the last—but here's the work I actually got done:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;