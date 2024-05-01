import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Projects } from './components/projects/projects';
import { Services } from './components/services/services';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from 'scrollreveal';



function App() {


  ScrollReveal({
    distance: '50px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img , .services-container', { origin: 'bottom' });
  ScrollReveal().reveal('.about-img , .home-content h1', { origin: 'left' });
  ScrollReveal().reveal('.home-content p , .about-content ', { origin: 'right' });


  const ref = useRef(null);
  useInView(ref);




  return (
    <>
      <Header />
      < motion.main
        ref={ref}
      >
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </motion.main>

    </>
  )
}

export default App
