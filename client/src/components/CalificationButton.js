import React, { useState } from 'react';
import CalificacionPopup from './CalificacionPOPUP';
import "../styles/calificationbutton.css";

const CalificacionButton = (props) => {
    //console.log(props.idReina);
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
            {mostrarPopup && <CalificacionPopup onClose={cerrarPopup} idReina={props.idReina} />}
        </div>
    );
};

export default CalificacionButton;

