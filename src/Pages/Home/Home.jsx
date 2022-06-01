import React from 'react';
import About from './About';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <div class="divider text-black container mx-auto mb-16"></div>
            <About/>
            
        </div>
    );
};

export default Home;