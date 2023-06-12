import React from 'react';
import Tags from './Tags.jsx';

const Card = ({ imagen, nombre, descripcion, texto, color }) => {
  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <Tags text={texto} color={color} />
      </div>
    </div>
  );
};

export default Card;
