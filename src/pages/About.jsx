import React from 'react';
import Layout from '../components/Layout.jsx';
import TextAnimation from '../components/TextAnimation.jsx';
import SlickCarousel from '../components/SlickCarousel.jsx';


function About() {
    return (
        <Layout>

            <h2>
                <TextAnimation text="Sobre mí" />
            </h2>
            <SlickCarousel /> 

        </Layout>
    );
}

export default About;