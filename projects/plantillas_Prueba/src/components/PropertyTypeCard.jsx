import React from 'react';
import 'PropertyTypeCard.css';

const PropertyTypeCard = ({ type }) => {
  return (
    <div className="property-card">
      <h3>{type}</h3>
    </div>
  );
};

export default PropertyTypeCard;