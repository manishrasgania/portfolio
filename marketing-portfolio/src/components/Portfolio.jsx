// src/components/Portfolio.jsx
import React, { useState } from 'react';
import './Portfolio.css';

// Import brand logos (you'll need to add these images to your assets)
import catchFoodsLogo from '../assets/brand-logos/catch-foods.png';
import creme21Logo from '../assets/brand-logos/creme21.png';
import dexogrowLogo from '../assets/brand-logos/dexogrow.png';
import mrsBectorsLogo from '../assets/brand-logos/mrs-bectors.png';
import niharLogo from '../assets/brand-logos/nihar.png';
import niveaLogo from '../assets/brand-logos/nivea.png';
import niveaSunLogo from '../assets/brand-logos/nivea.png';
import tataLogo from '../assets/brand-logos/tata.png';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioData = [
    {
      id: 1,
      client: "Catch Foods",
      product: "Ginger-Garlic Paste & Schezwan Paste",
      logo: catchFoodsLogo,
      category: "food-beverage",
      brandColor: "#D35400", // Muted Orange
      objective: "Build awareness around the new functional squeeze packaging of Catch Ginger-Garlic Paste and position Catch Schezwan Paste as the go-to choice for bold, Indo-Chinese flavors.",
      campaignIdea: "Home cooking often feels messy and time-consuming — people crave quick, versatile solutions without compromising on taste. We built a high-energy, entertainment-first campaign that turned everyday cooking into a social moment. The focus was on humor, cultural relevance, and showing functionality through fun.",
      execution: [
        "#WhatsYourPerfectCatch: A vox-pop format where the public shared their 'perfect catch,' ending in a surprise brand reveal.",
        "Rajkumar Rao × Patralekha Collab: Entertainment-led reels around Schezwan Fried Rice moments — equal parts chemistry and chaos.",
        "#UltimateSchezwanChallenge: A blindfolded Indo-Chinese cooking challenge showcasing Catch Schezwan Paste as the hero.",
        "Mix of celebrity integrations, challenges, and snackable storytelling carousels across Instagram and YouTube."
      ],
      budget: "₹1.3 Crores",
      results: "Generated massive social buzz, strengthened Catch's youth appeal, and created high recall for its functional packaging innovation.",
      status: "📊 Campaign ongoing — performance results to follow post-completion."
    },
    {
      id: 2,
      client: "Creme21 India",
      product: "Moisturizer",
      logo: creme21Logo,
      category: "beauty-skincare",
      brandColor: "#8E44AD", // Muted Purple
      objective: "Position Creme21 as a hydrating, all-season skincare essential and highlight its 5-in-1 moisturizing power infused with Vitamins E & B5.",
      campaignIdea: "Winter skincare routines often feel tedious — people want hydration without heavy layering. We built a campaign that positioned Creme21 as the trusted, go-to rescue product for everyday hydration — fun, light-hearted, and rooted in real-life creator moments.",
      execution: [
        "#SneakPeekWithCreme21: BTS-style influencer content showing hectic schedules, with Creme21 as their on-the-go hydration savior.",
        "#MyFavorite5: Influencers shared 5 favorite winter hacks or stories with Creme21 integrated through personal anecdotes.",
        "Relatable storytelling using warm tones, cozy winter setups, and playful skincare confessions."
      ],
      budget: "₹4.3 Lakhs",
      results: "Delivered relatable, lifestyle-driven visibility and positioned Creme21 as the everyday moisturizer for all skin types and ages."
    },
    {
      id: 3,
      client: "Dexogrow",
      product: "Kids' Nutrition Supplement",
      logo: dexogrowLogo,
      category: "health-wellness",
      brandColor: "#27AE60", // Muted Green
      objective: "Position Dexogrow as a must-have daily supplement for kids aged 2–6 years, focusing on brain development as much as physical growth.",
      campaignIdea: "Most parenting advice centers around physical milestones, overlooking cognitive growth. We introduced the message: 'Don't let your toddler's brain fall behind while their body races ahead.' The campaign — #DimagKoBhiPoshanDo — educated moms on balanced nutrition while blending science with heartwarming storytelling.",
      execution: [
        "Mom creators + pediatricians collaborated to discuss brain and gut health.",
        "Influencers conducted fun, brain development 'tests' and shared results with Dexogrow as the enabler.",
        "YouTube long-form video explained DHA, ARA, Iron, and Prebiotic benefits.",
        "Conversion-focused CTAs directed viewers to Flipkart & Amazon listings."
      ],
      budget: "₹9.7 Lakhs",
      results: "Created an emotional and educational narrative around brain nourishment — increasing brand trust and awareness across Tier 2 & 3 audiences."
    },
    {
      id: 4,
      client: "Mrs. Bector's English Oven",
      campaign: "#SliceOfTrust",
      logo: mrsBectorsLogo,
      category: "food-beverage",
      brandColor: "#E67E22", // Muted Orange
      objective: "Build reach and trust on World Health Day, positioning English Oven as the authentic, healthy bread choice.",
      campaignIdea: "Most 'brown breads' in the market are simply white bread with coloring. We built a trust-based campaign that spotlighted English Oven's honesty — no added colors, no trans fats, high fiber — through relatable storytelling by parents and homemakers.",
      execution: [
        "Influencers documented their switch from ultra-processed breads to English Oven.",
        "Real-life mom creators shared personal baking fails, ending with discovering the 'slice of trust.'",
        "Used IG Reels & YouTube Shorts with strong visual proof points and conversational storytelling."
      ],
      budget: "₹4.79 Lakhs",
      results: "Reinforced English Oven's credibility as the genuine healthy bread brand and drove engagement on authenticity-led narratives."
    },
    {
      id: 5,
      client: "Nihar Naturals",
      product: "Hair Oil - Mother's Day Campaign",
      logo: niharLogo,
      category: "beauty-skincare",
      brandColor: "#C0392B", // Muted Red
      objective: "Celebrate Mother's Day by strengthening emotional connection and reviving the tradition of nurturing through a champi.",
      campaignIdea: "We reimagined the iconic 'champi' moment — where sons reverse roles and oil their mothers' hair — to rekindle emotional bonds and nostalgia. Positioned Nihar Shanti Amla Oil as more than hair care — a bridge between generations.",
      execution: [
        "Sons gifting 'Lifetime Champi Coupons' to moms, symbolizing love and care.",
        "Real, conversational storytelling blending humor and emotion.",
        "Creator-led videos capturing laughter, nostalgia, and heartfelt memories through the act of a champi."
      ],
      budget: "₹2.49 Lakhs",
      results: "A heartfelt campaign that redefined Nihar as a symbol of love and care — transforming a product into a shared family ritual."
    },
    {
      id: 6,
      client: "NIVEA",
      product: "Caring Beauty Lip & Cheek 3-in-1",
      logo: niveaLogo,
      category: "beauty-skincare",
      brandColor: "#2980B9", // Muted Blue
      objective: "Launch and build awareness for NIVEA Caring Beauty Lip & Cheek 3-in-1 — a single stick combining color, care, and SPF 30 protection.",
      campaignIdea: "Consumers seek affordable multitaskers that deliver care and color in one go. We positioned the product as the most affordable, versatile beauty essential — a stick that goes from lip to cheek to eye effortlessly.",
      execution: [
        "Creators across skincare, hacks, and makeup categories showcased the multitasking benefit within 25-second reels.",
        "Consistent sonic branding and on-screen text RTBs.",
        "Key Concepts: 'One Product, Multiple Benefits', 'Most Affordable Lip Balm That Has It All', 'One Product, Many Avatars'",
        "Sustenance phase with FOMO edits and creator-led silent reviews."
      ],
      budget: "₹13.5 Lakhs",
      results: "Boosted awareness and relatability in the affordable beauty segment. Strengthened NIVEA's equity as a care-meets-cosmetics brand."
    },
    {
      id: 7,
      client: "NIVEA Sun",
      product: "SPF 50 Sunscreen - #LetsFaceTheFacts",
      logo: niveaSunLogo,
      category: "beauty-skincare",
      brandColor: "#16A085", // Muted Teal
      role: "Content Strategist | Influencer Marketing",
      objective: "Educate audiences about year-round UV protection and establish NIVEA Sun SPF 50 as a daily essential — beyond just summers.",
      campaignIdea: "Most people believe sunscreen is seasonal. We challenged that mindset through a fact-led campaign — #LetsFaceTheFacts — designed to shock, educate, and convert. Messaging revolved around UV rays passing through glass and clouds, highlighting the need for daily protection.",
      execution: [
        "Deployed creators across beauty, fashion, sports & fitness.",
        "Beauty creators: 'Sunscreen = Anti-aging Essential.'",
        "Fashion creators: 'Sunscreen as the Ultimate Accessory.'",
        "Fitness creators: 'I may skip a workout, but never sunscreen.'",
        "Every content piece carried mandatory RTBs: Instant UV protection, 0% sticky, no white cast, SPF 50."
      ],
      budget: "₹9.5 Lakhs",
      results: "Strengthened NIVEA's position as the go-to expert in suncare, driving awareness on year-round sunscreen usage through relatable creator storytelling."
    },
    {
      id: 8,
      client: "Tata Simply Better",
      product: "Cold Pressed Oils - #HoliBiteFest",
      logo: tataLogo,
      category: "food-beverage",
      brandColor: "#E74C3C", // Muted Coral
      role: "Content Strategist | Influencer Marketing",
      objective: "Build top-of-mind recall for Tata Simply Better during Holi by associating the brand with festive food culture and cross-regional storytelling.",
      campaignIdea: "Every Indian state has its own Holi snacks — yet few people know what's cooked beyond their borders. We launched #HoliBiteFest, a creator challenge where influencers cooked regional Holi dishes from other states using Tata Simply Better Oils, celebrating cultural diversity through food.",
      execution: [
        "Regional creators recreated snacks from another state and tagged peers to continue the chain.",
        "IG Reels & YouTube Shorts showcased snack-making with 'cold-pressed oil = guilt-free indulgence' messaging.",
        "Brand positioned as the nutritional hero enhancing festive snacking without compromising taste."
      ],
      budget: "₹17.6 Lakhs",
      results: "Created a vibrant digital moment around Holi that merged food, culture, and wellness — making Tata Simply Better a household name during the festive season."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Campaigns', color: '#667eea' },
    { id: 'food-beverage', name: 'Food & Beverage', color: '#D35400' },
    { id: 'beauty-skincare', name: 'Beauty & Skincare', color: '#8E44AD' },
    { id: 'health-wellness', name: 'Health & Wellness', color: '#27AE60' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>Campaign Portfolio</h2>
          <p>Strategic marketing campaigns that delivered measurable results across diverse industries</p>
        </div>
        
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
              style={{
                '--category-color': category.color,
                '--category-color-light': category.color + '15'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
              style={{
                '--brand-color': project.brandColor,
                '--brand-color-light': project.brandColor + '15'
              }}
            >
              <div className="card-header">
                <div className="brand-logo">
                  <img src={project.logo} alt={`${project.client} logo`} />
                </div>
                <div className="budget-badge">
                  <span className="budget">{project.budget}</span>
                </div>
              </div>
              
              <div className="card-content">
                <h3>{project.client}</h3>
                <p className="product">{project.product}</p>
                {project.role && <span className="role">{project.role}</span>}
                
                <p className="objective-preview">{project.objective.substring(0, 100)}...</p>
                
                <div className="card-footer">
                  <div className="view-case-study">
                    View Case Study <span className="arrow">→</span>
                  </div>
                  <div className="category-tag" style={{ backgroundColor: project.brandColor + '15', color: project.brandColor }}>
                    {categories.find(cat => cat.id === project.category)?.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
            
            <div className="modal-header" style={{ '--brand-color': selectedProject.brandColor }}>
              <div className="modal-brand">
                <div className="modal-logo">
                  <img src={selectedProject.logo} alt={`${selectedProject.client} logo`} />
                </div>
                <div className="modal-client-info">
                  <h2>{selectedProject.client}</h2>
                  <p className="modal-product">{selectedProject.product}</p>
                  {selectedProject.role && <span className="modal-role">{selectedProject.role}</span>}
                </div>
              </div>
              <div className="modal-budget">
                <span className="budget-amount">{selectedProject.budget}</span>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="section">
                <h4 style={{ color: selectedProject.brandColor }}>Objective</h4>
                <p>{selectedProject.objective}</p>
              </div>
              
              <div className="section">
                <h4 style={{ color: selectedProject.brandColor }}>Campaign Idea</h4>
                <p>{selectedProject.campaignIdea}</p>
              </div>
              
              <div className="section">
                <h4 style={{ color: selectedProject.brandColor }}>Execution</h4>
                <ul className="execution-list">
                  {selectedProject.execution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="section">
                <h4 style={{ color: selectedProject.brandColor }}>Results</h4>
                <p>{selectedProject.results}</p>
                {selectedProject.status && (
                  <p className="campaign-status">{selectedProject.status}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;