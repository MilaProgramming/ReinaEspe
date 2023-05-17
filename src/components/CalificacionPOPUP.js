import React, { useState} from 'react';
import "../styles/calificacionpopup.css"

const CalificacionPopup = ({ onClose }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    return (
        <div className="calificacion-popup">
            <h2>Seleccione la Puntuación</h2>
            <div className="botones-calificacion">
                {Array.from({ length: 10 }, (_, index) => (
                <button 
                    key={index} 
                    className={`numeros ${selectedButton === index ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(index)}>
                    {index + 1}
                </button>
                ))}
            </div>
            <button onClick={onClose}>Aceptar</button>
        </div>
    );
};

export default CalificacionPopup;
