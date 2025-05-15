import React from 'react';
import '../components/PropertyTypeCard.css'; // Ensure you have this CSS file for styling

const PropertyTypeCard = ({ type }) => {
  return (
    <div className="property-card">
      <h3>{type}</h3>
    </div>
  );
};

export default PropertyTypeCard;