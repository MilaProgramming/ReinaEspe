import React, { useState } from 'react';
import "../styles/calificacionpopup.css";
import Axios from "axios";

const CalificacionConf = ({onClose, idReina}) => {
    const [cali, setCali] = useState(0);

    const subirReview = () => {
        const boton = document.getElementsByClassName('selected');
        const cali = boton[0].classList[0];
        
        Axios.post('http://localhost:3001/api/calificar',
        {cali: cali,
            idReina: idReina
            
        });
          alert("Insertado exitosamente!");
         };

    return (
        <div className="calificacion-popup">
            <h2>ESTA SEGURO QUE DESEA INGRESAR ESTA CALIFICACION:</h2>

            {/* <button id='acepta' onClick={()=>{onClose, subirReview()}}>Aceptar</button> */}
            <button id="acepta" onClick={() => { onClose(); subirReview()}}>Aceptar</button>
            <button onClick={onClose}>Recalificar</button>

        </div>
    );
};

export default CalificacionConf;
