// src/components/Brands.jsx
import React from 'react';
import './Brands.css';

// Import brand logos
import niveaLogo from '../assets/brand-logos/nivea.png';
import catchFoodsLogo from '../assets/brand-logos/catch-foods.png';
import tataLogo from '../assets/brand-logos/tata.png';
import creme21Logo from '../assets/brand-logos/creme21.png';
import dexogrowLogo from '../assets/brand-logos/dexogrow.png';
import mrsBectorsLogo from '../assets/brand-logos/mrs-bectors.png';
import niharLogo from '../assets/brand-logos/nihar.png';
import maricoLogo from '../assets/brand-logos/marico.png';
import raymondLogo from '../assets/brand-logos/raymond.png';

const Brands = () => {
  const brands = [
    { name: "NIVEA", logo: niveaLogo },
    { name: "Catch Foods", logo: catchFoodsLogo },
    { name: "Tata Simply Better", logo: tataLogo },
    { name: "Creme21", logo: creme21Logo },
    { name: "Dexogrow", logo: dexogrowLogo },
    { name: "Mrs. Bector's", logo: mrsBectorsLogo },
    { name: "Nihar Naturals", logo: niharLogo },
    {name: "Raymonf", logo: raymondLogo },
    {name: "Marico", logo: maricoLogo },

  ];

  // Increased to 10 sets for super smooth looping
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands, 
                           ...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <section id="brands" className="brands-section">
      <div className="brands-container">
        <div className="brands-header">
          <h2>Brands That Trusted Me with Their Stories</h2>
          <p className="brands-subtitle">(Grateful for every opportunity)</p>
        </div>
        
        <div className="brands-marquee">
          <div className="marquee-track">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="brand-item">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="brands-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;