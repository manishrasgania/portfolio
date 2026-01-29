// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About'; // Add this import
import Contact from './components/ContactInfo';
import Insights from './components/Insights';
import Brands from './components/Brands';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Insights />
      <Brands/>
      <Portfolio />
      
      <Services />
      <Contact />
    </div>
  );
}

export default App;