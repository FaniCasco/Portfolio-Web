import React from 'react';
import './Footer.css';



function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-h3">Fani M. Casco</h3>
      <ul className="footer-ul">
        <li className="footer-contact">
          <a href="mailto:fanymar@live.com">
            <img src="assets/logos/outlook.png" alt="Email" className="icon" />
           
          </a>
        </li>
        <li className="footer-contact">
          <a href="https://www.linkedin.com/in/fani-casco/" target="_blank" rel="noopener noreferrer">
            <img src="assets/logos/linkedin.png" alt="LinkedIn" className="icon" />
           
          </a>
        </li>
        <li className="footer-contact">
          <a href="https://github.com/FaniCasco" target="_blank" rel="noopener noreferrer">
            <img src="assets/logos/github-logo.png" alt="GitHub" className="icon" />
          
          </a>
        </li>
      </ul>

 
          <ul className="nav-footer">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Sobre mí</a>
            </li>
            <li>
              <a href="/projects">Proyectos</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </ul>
      
      <p className="footer-copyright">&copy; 2023 Fani M. Casco. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
