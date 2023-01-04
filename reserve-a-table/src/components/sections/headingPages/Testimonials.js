import TestimonialCard from './TestimonialCard';
import Carousel from './TestimonialCarousel'
export default function Testimonials() {
    return (
        <>
            <section className="testimonial-cards">
                <TestimonialCard name="Jack Hu" description="Ayo lets get this bitch"/>
                <TestimonialCard name="Alan Chen" description="I love mugi"/>
                <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
                <TestimonialCard name="Jim Reynor" description="Roll tide."/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </>
    );
}