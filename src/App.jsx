import React from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="container">
        <div className="row">
          <div className="col">
            <Card
              imagen=""
              nombre="Apolo"
              descripcion="Descripción del perro 1"
              texto="Husky"
              color="success"
            />
          </div>
          <div className="col">
            <Card
              imagen="./assets/imgs/perrito1.jpeg"
              nombre="Baco"
              descripcion="Descripción del perro 1"
              texto="Pastor aleman"
              color="primary"
            />
          </div>
          <div className="col">
            <Card
              imagen="./assets/imgs/perrito1.jpeg"
              nombre="Chronos"
              descripcion="Descripción del perro 1"
              texto="Pastor suizo"
              color="danger"
            />
          </div>
          <div className="col">
            <Card
              imagen="./assets/imgs/perrito1.jpeg"
              nombre="Dionisio"
              descripcion="Descripción del perro 1"
              texto="Pug"
              color="warning"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;