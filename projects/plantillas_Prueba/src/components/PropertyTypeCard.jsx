import React from 'react';
import '../css/PropertyTypeCard.css'; // Assuming you have a CSS file for styling
const PropertyTypeCard = ({ type }) => {
  return (
    <div className="property-card">
      <h3>{type}</h3>
    </div>
  );
};

export default PropertyTypeCard;