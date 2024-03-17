import React from 'react';
import Layout from '../components/Layout.jsx';
import TextAnimation from '../components/TextAnimation.jsx';
import SlickCarousel from '../components/SlickCarousel.jsx';

function Projects() {
    return (
        <Layout>
              <h2>
        <TextAnimation text="Proyectos" />
      </h2>
      <SlickCarousel /> 
        </Layout>
    );
}

export default Projects;
