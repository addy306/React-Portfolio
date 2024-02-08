import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills';
import Socials from './components/Socials';
import ProjectGallery from './components/pages/ProjectGallery';
import './index.css'

function App() {
  return (
    <Router>
      <Socials/>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projectgallery" element={<ProjectGallery/>} />
      </Routes>
    </Router>
  );
}

export default App