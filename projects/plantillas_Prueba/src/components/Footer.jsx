import React from 'react';
import '../css/Footer.css'; // Ensure you have this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Inmobiliaria</h3>
          <p>Tu socio confiable en bienes raíces</p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: contacto@inmbrijaria.com</p>
          <p>Teléfono: +52 999 123 4567</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Inmobiliaria. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;