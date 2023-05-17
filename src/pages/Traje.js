import React from 'react'
<<<<<<< HEAD
import ImagenOvalo from '../components/ImagenOvalo';
import CalificationButton from '../components/CalificationButton';

function Traje() {
  return (
    <div className='trajes'>
        <ImagenOvalo dir = {require("../assets/pedro.jpg")}/>
        <CalificationButton/>
    </div>
  )
}
=======
import ImagenOvalo from '../components/ImagenOvalo'
const imagen = require.context("../img/");

const Traje = () => (
  <div className="container_cont">
      <div className="borde">
          <h2>Traje Típico</h2>
          <img src={(imagen("./borde.jpg"))} alt="" />
          <div className="reina">
              <img className="circle-image" src={(imagen("./reina.jpg"))} alt="" />
              <h2>Daniela Juvera Rajmond</h2>
          </div>
          <img className="boton" src={(imagen("./boton.jpeg"))} alt="" />
      </div>
      
  </div>
);
>>>>>>> 738fc8719fdd7c5ccbd2e405f6c9908aaf4f2b0b

export default Traje;