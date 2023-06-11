import React from 'react';
import Tags from './Tags';

const Card = ({ imagen, nombre , descripcion }) => {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <Tags text="En adopción" color="success" />
    </div>
  );
};

export default Card;