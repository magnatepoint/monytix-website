import React from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './sections/Hero.tsx';
import Features from './sections/Features.tsx';
import InteractiveDemo from './sections/InteractiveDemo.tsx';
import Security from './sections/Security.tsx';
import About from './sections/About.tsx';
import Footer from './components/Footer.tsx';
import MolyBot from './components/MolyBot.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <InteractiveDemo />
        <Security />
        <About />
      </main>
      <Footer />
      <MolyBot />
    </div>
  );
}

export default App;
