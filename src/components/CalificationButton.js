import React, { useState } from 'react';
import CalificacionPopup from './CalificacionPOPUP';
import "../styles/calificationbutton.css";

const CalificacionButton = () => {
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [contentB, setContentB] = useState("Calificar");

    const abrirPopup = () => {
        setMostrarPopup(true);
    };

    const cambiarBoton = () => {
        setContentB("Re-Calificar");
    }
        


    const cerrarPopup = () => {
        setMostrarPopup(false);
    };

    return (
        <div className='calificacion-container'>
            <button className='calificacion-button' onClick={abrirPopup}>
                <span>{contentB}</span>
                </button>
            {mostrarPopup && <CalificacionPopup onClose={() => {cerrarPopup(); cambiarBoton()}} />}
        </div>
    );
};

export default CalificacionButton;

