import React from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header titulo="Adopta un perrito" />
      <div className="container">
        <div className="row">
          <div className="col">
            <Card
              imagen="https://media.istockphoto.com/id/695394394/es/foto/husky-rassehund-de-hund-schlittenhund-liegt-gelangweilt-m%C3%BCde-g%C3%A4hnend-auf-boden.jpg?s=612x612&w=0&k=20&c=GQOgAcy3MBuishM-oyiEbpYBbzrbJ7oYD3ivQnIQ8eU="
              nombre="Apolo"
              descripcion="Jugueton y muy bueno con los niños pequeños."
              texto="Husky"
              color="success"
            />
          </div>
          <div className="col">
            <Card
              imagen="https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              nombre="Baco"
              descripcion="Se destaca por ser un excelente guardián."
              texto="Pastor aleman"
              color="primary"
            />
          </div>
          <div className="col">
            <Card
              imagen="https://media.istockphoto.com/id/1423854846/es/foto/perro-blanco-y-hermoso-pastor-suizo-el-perro-est%C3%A1-posando-un-perro-blanco-en-la-hierba-pastor.jpg?s=612x612&w=0&k=20&c=7EYQRRFrz7XiRm8KkWA4b5isLxsVM7eZYAFRsEjA6kg="
              nombre="Chronos"
              descripcion="Tranquilo, le encanta regalonear y come de todo."
              texto="Pastor suizo"
              color="danger"
            />
          </div>
          <div className="col">
            <Card
              imagen="https://media.istockphoto.com/id/1007461118/es/foto/peque%C3%B1o-pug-corriendo-sobre-una-pasarela-en-parque-p%C3%BAblico.jpg?s=612x612&w=0&k=20&c=RvusElypmr1yAl5x1ACMkA4x4KT0vFvZ6mns5g_P69k="
              nombre="Dionisio"
              descripcion="El mejor compañero que puedes tener. Te sigue para todas partes."
              texto="Pug"
              color="warning"
            />
          </div>
        </div>
      </div>
      <Footer
        contenido = "Navega en nuestra pagina y podras ver la gran cantidad de perritos llenos de amor que buscan un hogar. "
      />
    </div>
  );
};

export default App;