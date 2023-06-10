import React from 'react';
import Tags from './Tags';

const Card = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <Tags text="En adopción" color="success" />
    </div>
  );
};

export default Card;