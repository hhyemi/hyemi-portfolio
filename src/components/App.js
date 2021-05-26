import React from 'react';

import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Career from './Career/Career';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { prefix } from '../config/config';

function App() {
  return (
    <PortfolioProvider value={{ prefix }}>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Career />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
