import React from 'react';
import './Layout.css';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';
import SlickCarousel2 from '../components/SlickCarousel2.jsx';



function Layout({ children }) {
  return (
    <div>
      <header>
        <h1 className='brand'>Fani M. Casco</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active">Sobre mí</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeclassname="active">Proyectos</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeclassname="active">Contacto</NavLink>
            </li>
          </ul>
        </nav>
       
      </header>

      <main>{children}
      <SlickCarousel2 /></main>
      <Footer  />

    </div>
  );
}

export default Layout;
