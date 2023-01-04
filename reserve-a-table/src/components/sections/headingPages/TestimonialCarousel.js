import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './TestimonialCard';

export default function CarouselPage() {
    return (
        <Carousel>
            <TestimonialCard name="Jack Hu" description="Ayo lets get this bitch"/>
            <TestimonialCard name="Alan Chen" description="I love mugi"/>
            <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
            <TestimonialCard name="Jim Reynor" description="Roll tide."/>
        </Carousel>
    )
}