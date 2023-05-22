import React, { useState } from 'react';
import "../styles/calificacionpopup.css"
import CalificacionConf from './CalificacionConf';

const CalificacionPopup = ({ onClose, idReina }) => {
    console.log(idReina);
    const [selectedButton, setSelectedButton] = useState(null);
    const [mostrarPopup, setMostrarPopup] = useState(false);

    const abrirPopup = () => {
        setMostrarPopup(true);
    };

    const cerrarPopup = () => {
        setMostrarPopup(false);
    };

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    return (
        <div className="calificacion-popup">
            <button onClick={onClose}>Cerrar</button>
            <h2>Seleccione la Puntuación</h2>
            <div className="botones-calificacion">
                {Array.from({ length: 10 }, (_, index) => (
                    <button
                        key={index}
                        className={`${index + 1} numeros ${selectedButton === index ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(index)}>
                        {index + 1}
                    </button>
                ))}
            </div>
            {/* <button onClick={onClose}>Aceptar</button> */}
            <div className='calificacion-container'>
                <button className='calificacion-button' onClick={abrirPopup}>
                    <span>Votar</span>
                </button>
                {mostrarPopup && <CalificacionConf onClose={cerrarPopup} idReina={idReina}/> }
            </div>
        </div>
    );
};

export default CalificacionPopup;
