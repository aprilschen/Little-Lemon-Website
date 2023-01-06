import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
            <TestimonialCard name="Alan Chen" description="I love mugi"/>
            <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
            <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
            <TestimonialCard name="Jim Reynor" description="Roll tide."/>
            <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
            <TestimonialCard name="Brian Dean" description="USACO USACO USACO"/>
            <TestimonialCard name="Jack Hu" description="Ayo lets get this bitch"/>
        </Carousel>
    )
}