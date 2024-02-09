import React from 'react';
import './App.css'; // Import your CSS styles if you have any
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BlogInsights from './components/BlogInsights';
//import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
//import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Navigation /> */}
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/blog" element={<BlogInsights/>} />
            {/* <Route path="/contact" element={<Contact/>} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;