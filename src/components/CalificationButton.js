import React, { useState } from 'react';
import CalificacionPopup from './CalificacionPOPUP';
import "../styles/calificationbutton.css";

const CalificacionButton = () => {
    const [mostrarPopup, setMostrarPopup] = useState(false);

    const abrirPopup = () => {
    setMostrarPopup(true);
    };

    const cerrarPopup = () => {
    setMostrarPopup(false);
    };

    return (
        <div className='calificacion-container'>
            <button className='calificacion-button' onClick={abrirPopup}>
                <span>Calificar</span>
                </button>
            {mostrarPopup && <CalificacionPopup onClose={cerrarPopup} />}
        </div>
    );
};

export default CalificacionButton;

