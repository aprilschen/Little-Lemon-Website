import Navbar from './components/Navbar';
import Routing from './components/Routing';
import Footer from './components/Footer';
import './App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routing />
      <Footer />
    </>
  );
}
