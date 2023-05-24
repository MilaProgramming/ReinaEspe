import React, { useState } from 'react';
import CalificacionPopup from './CalificacionPOPUP';
import Modal from 'react-modal'; /* Libreria para mensaje personalizado */
import "../styles/calificationbutton.css";

const customModalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999
    },
    content: {
        position: 'absolute',
        top: '55%',
        left: '72%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '280px',
        padding: '20px',
        borderRadius: '5px',
        background: '#fff',
        textAlign: 'center'
    }
};

const CalificacionButton = () => {
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [contentB, setContentB] = useState("Calificar");
    const [mostrarEnvio, setMostrarEnvio] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirPopup = () => {
        setMostrarPopup(true);
    };

    const abrirModal = () => {
        setMostrarModal(true);
    };
    
    const cambiarBoton = () => {
        setContentB("Re-Calificar");
        setMostrarEnvio (true);
    }
        

    const cerrarPopup = () => {
        setMostrarPopup(false);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    };

    return (
        <div className='calificacion-container'>
            <button className='calificacion-button' onClick={abrirPopup}>
                <span>{contentB}</span>
                </button>
            {mostrarPopup && <CalificacionPopup onClose={() => {cerrarPopup(); cambiarBoton()}} />}
            {mostrarEnvio && (
                <button className='boton-envio' onClick={abrirModal}>
                Enviar Calificación
                </button>
            )}
            <Modal isOpen={mostrarModal} onRequestClose={cerrarModal} style={customModalStyles}>
                <h2>Finalización de Etapa</h2>
                <p>Una vez se envíe su calificacion no podra modificarla ni volver a esta etapa. <br/> <br/> ¿Esta seguro que desea enviar su calificacion? </p>
                <button onClick={cerrarModal}>Volver</button>
                <button onClick={cerrarModal}>Enviar</button> {/* Modificar boton para enviar a la base de datos o cambiar de pantalla a la espera*/}
            </Modal>
        </div>
    );
};

export default CalificacionButton;

