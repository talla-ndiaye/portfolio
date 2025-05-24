import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Talla Ndiaye | Portfolio";
  }, []);

  return (
    <ThemeProvider>
      <div className="  min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
