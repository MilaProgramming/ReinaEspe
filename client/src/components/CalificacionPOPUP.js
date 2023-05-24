import React, { useState } from 'react';
import Modal from 'react-modal'; /* Libreria para mensaje personalizado */
import "../styles/calificacionpopup.css"

const customModalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '180px',
        padding: '20px',
        borderRadius: '5px',
        background: '#fff',
        textAlign: 'center'
    }
};

const CalificacionPopup = ({ onClose }) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    const handleClose = () => {
        if (selectedButton !== null) {
            onClose();
        } else {
            setModalOpen(true);
        }
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <div className="calificacion-popup">
            <h2>Seleccione la Puntuación</h2>
            <div className="botones-calificacionTraje">
                {Array.from({ length: 10 }, (_, index) => ( /*Arreglo de botonos del 1 al 10 para calificación */
                <button 
                    key={index} 
                    className={`numeros ${selectedButton === index ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(index)}>
                    {index + 1}
                </button>
                ))}
            </div>
            <button className='botonAceptar' onClick={handleClose}>Aceptar</button>

            <Modal isOpen={modalOpen}
                onRequestClose={handleModalClose}
                style={customModalStyles}
                ariaHideApp={false}>

            <h2>Se informa que:</h2>
            <p>Por favor, debe seleccionar una calificación antes de cerrar esta sección.</p>
            <button onClick={handleModalClose}>Aceptar</button>
        </Modal>
        </div>
    );
};

export default CalificacionPopup;