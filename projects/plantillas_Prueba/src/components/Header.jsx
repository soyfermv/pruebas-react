import React from 'react';
import '../css/Header.css'; // Ensure you have this CSS file for styling
const Header = () => {
  return (
    <header className="header">
      <div className="logo">INMBRIJARIA</div>
      <nav className="nav-menu">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/inmuebles">Inmuebles</a></li>
          <li><a href="/desarrollos">Desarrollos</a></li>
          <li><a href="/mapa">Mapa</a></li>
          <li><a href="/lotes">Lotes</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/asesores">Asesores</a></li>
        </ul>
      </nav>
      <div className="search">
        <button>Buscar</button>
      </div>
    </header>
  );
};

export default Header;