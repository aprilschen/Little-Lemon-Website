import Heading from '../sections/mainPages/Heading';
import Specials from  '../sections/mainPages/Specials';
import Testimonials from '../sections/mainPages/Testimonials';
import About from '../sections/mainPages/About';
export default function Homepage() {
    return (
        <>
        <Heading />
        <main>
            <Specials />
            <Testimonials />
            <About />
        </main>
      </>
    );
}