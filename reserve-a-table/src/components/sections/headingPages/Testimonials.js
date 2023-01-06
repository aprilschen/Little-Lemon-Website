import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>

            <section className="testimonials-cards">
                <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
                <TestimonialCard name="Alan Chen" description="I love mugi"/>
                <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
                <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
                <TestimonialCard name="Jim Reynor" description="Roll tide."/>
                <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
                <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
                <TestimonialCard name="Jack Hu" description="Ayo lets get this bitch"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}