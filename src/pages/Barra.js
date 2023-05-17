import React from 'react'
const imagen = require.context("../img/");

const Barra = () => (
  <div className="container_cont">
      <div className="borde">
          <h2>Etapa 3 Calificacion de Barras</h2>
          <img src={(imagen("./borde.jpg"))} alt=""/>
          <div className="reina">
              <img className="circle-image" src={(imagen("./reina.jpg"))} alt="" />
              <h2>Daniela Juvera Rajmond</h2>
          </div>
          <img className="boton" src={(imagen("./boton.jpeg"))} alt="" />
      </div>
      
  </div>
);

export default Barra;