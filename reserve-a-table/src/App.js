import Navbar from './components/Navigation';
import Heading from './components/Homepage/Heading';
import Specials from  './components/Homepage/Specials';
import Testimonials from './components/Homepage/Testimonials';
import About from './components/Homepage/About';
import Footer from './components/Footer';

import './App.css'
export default function App() {
  return (
    <>
      <Navbar/>
      <Heading />

      <main>
          <Specials />
          <Testimonials />
          <About />
      </main>

      <Footer />
    </>
  );
}
