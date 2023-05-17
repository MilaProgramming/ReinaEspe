import React from 'react'
const imagen = require.context("../img/");

const Barra = () => (
    <div className="container_cont">
        <div className="barras">
            <h2>Etapa 3 Calificacion de Barras</h2>
            <img className="circleGreen" src={(imagen("./circleVo.png"))} alt="" />
            <img className="circleOrange" src={(imagen("./circleO.png"))} alt="" />
            <div className="barra">
                <img className="circle-image" src={(imagen("./reina.jpg"))} alt="" />
                <h2>Califique la barra del departamento</h2>
            </div>
        </div>
    </div>
);

export default Barra;