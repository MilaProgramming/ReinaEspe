import React from 'react'
import '../styles/Barra.css';
import CalificationButton from '../components/CalificationButton';
const imagen = require.context("../img/");

const Barra = () => (
    <div className="container_cont">
        <div className="barras">
            <h2>Etapa 3 Calificacion de Barras</h2>
            <div className="barra">
                <h2>Califique la barra del departamento</h2>
            </div>
        </div>
        <div className="matriz">
            <h2>Matriz</h2>
            <img className="circleGreen" src={(imagen("./circleVo.png"))} alt="" />
            <img className="circleOrange" src={(imagen("./circleO.png"))} alt="" />
            <div className="sangolqui">
                <h2>Departamento de Ciencias Medicas</h2>

                <img className="circle-image" src={(imagen("./reina.jpg"))} alt="" />
            </div>
            <CalificationButton/>
        </div>
        <div className="latacunga">
            
            <h2>latacunga</h2>
            <img className="circleGreenLatacunga" src={(imagen("./circleVo.png"))} alt="" />
            <img className="circleOrangeLatacguna" src={(imagen("./circleO.png"))} alt="" />
            <div className="lata">
                <h2>   Departamento de     Ciencias de la          Computación</h2>

                <img className="circle-image" src={(imagen("./reina.jpg"))} alt="" />
            </div>
        </div>
    </div>
);

export default Barra;