import React from 'react';
import './App.css'; // Import your CSS styles if you have any
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BlogInsights from './components/BlogInsights';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutMe />
      <Services />
      <Portfolio />
      <BlogInsights />
      <Contact />
    </div>
  );
}

export default App;