import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="card-container">
        <Card
          image="ruta-de-la-imagen1.jpg"
          name="Perrito 1"
          description="Este es un adorable perrito buscando un hogar."
        />
        <Card
          image="ruta-de-la-imagen2.jpg"
          name="Perrito 2"
          description="Otro perrito en adopción que necesita amor y cuidado."
        />
        <Card
          image="ruta-de-la-imagen2.jpg"
          name="Perrito 3"
          description="Otro perrito en adopción que necesita amor y cuidado."
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;