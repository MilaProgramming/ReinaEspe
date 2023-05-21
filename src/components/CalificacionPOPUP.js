import React, { useState} from 'react';
import "../styles/calificacionpopup.css"

const CalificacionPopup = ({ onClose }) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [verificator, setVerificator] = useState(false);

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
        setVerificator(true);
    };


    return (
        <div className="calificacion-popup">
            <h2>Seleccione la Puntuación</h2>
            <div className="botones-calificacionTraje">
                {Array.from({ length: 10 }, (_, index) => (
                <button 
                    key={index} 
                    className={`numeros ${selectedButton === index ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(index)}>
                    {index + 1}
                </button>
                ))}

            </div>
            <button className='botonAceptar' onClick={onClose}>Aceptar</button>
        </div>
    );
};

export default CalificacionPopup;
