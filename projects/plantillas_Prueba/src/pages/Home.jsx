import React from 'react';
import PropertyTypeCard from '../components/PropertyTypeCard';
import '../css/Home.css'; // Ensure you have this CSS file for styling
const Home = () => {
  const popularLocations = [
    "Chicxulub, Chicxulub Pueblo, Yucatán, México",
    "Santa Gertrudis Copo, Mérida, Yucatán, México",
    "Polanco 1a Sección, Miguel Hidalgo, Distrito Federal, México",
    "Temozon Norte, Mérida, Yucatán, México",
    "Xmatkuil, Mérida, Yucatán, México",
    "El Colorado, El Marqués, Querétaro, México",
    "Juriquilla, Querétaro, Querétaro, México"
  ];

  const propertyTypes = [
    "Terreno", "Casa", "Departamento", "Oficina", 
    "Bodega", "Local comercial", "Hacienda"
  ];

  return (
    <main className="home-container">
      <section className="demo-section">
        <h1>DEMO INMBRIJARIA</h1>
        
        <div className="contact-section">
        {
          //logo de la empresa
         // <img src="https://img.freepik.com/vector-gratis/logotipo-soluciones-inmobiliarias-hogar-que-es-solucion-hogar_527952-33.jpg?semt=ais_hybrid&w=740" alt="INMBRIJARIA Logo"/>
        }
          <h2>Contáctenos</h2>
          <p><strong>Oficina Mérida</strong></p>
          <p><strong>Mérida, Yucatán, México</strong></p>
        </div>
      </section>

      <hr className="divider" />

      <section className="popular-locations">
        <h2>Localidades populares</h2>
        <ul>
          {popularLocations.map((location, index) => (
            <li key={index}><strong>{location}</strong></li>
          ))}
        </ul>
      </section>

      <hr className="divider" />

      <section className="property-types">
        <h2>¿Qué estás buscando?</h2>
        <div className="property-grid">
          {propertyTypes.map((type, index) => (
            <PropertyTypeCard key={index} type={type} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;