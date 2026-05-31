import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load the 3D background for better performance
const Background3D = React.lazy(() => import('./components/Background3D'));

function App() {
  return (
    <div className="relative min-h-screen">
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
