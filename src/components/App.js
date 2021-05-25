import React from 'react';

import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Career from './Career/Career';
import Footer from './Footer/Footer';

function App() {
  const prefix = process.env.NODE_ENV === 'production' ? 'https://hhyemi.github.io/hyemi-portfolio' : '';
  return (
    <>
      <Header prefix={prefix} />
      <Home prefix={prefix} />
      <About prefix={prefix} />
      <Skills prefix={prefix} />
      <Projects prefix={prefix} />
      <Career prefix={prefix} />
      <Footer prefix={prefix} />
    </>
  );
}

export default App;
