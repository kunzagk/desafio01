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
          imagen="./assets/imgs/perrito1.jpeg"
          nombre="Apolo"
          descripcion="Este es un adorable perrito buscando un hogar."
        />
        <Card
          imagen="./assets/imgs/perrito2.jpeg"
          nombre="Baco"
          descripcion="Otro perrito en adopción que necesita amor y cuidado."
        />
        <Card
          imagen="./assets/imgs/perrito3.jpeg"
          nombre="Chronos"
          descripcion="Otro perrito en adopción que necesita amor y cuidado."
        />
        <Card
          imagen="./assets/imgs/perrito4.jpeg"
          nombre="Chronos"
          descripcion="Otro perrito en adopción que necesita amor y cuidado."
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;