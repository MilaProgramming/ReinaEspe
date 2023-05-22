import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "../styles/carrusel.css"


const MyComponent = () => {
  const [listaReinas, setListaReinas] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getReinas')
      .then((response) => {
        setListaReinas(response.data);
        console.log(listaReinas);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  });

  return (
    <div className='carousel-item-text'>
      {listaReinas.length > 0 ? (
        <React.Fragment>
          <div className="renglon"><h4>Nombre:</h4>&nbsp; {listaReinas[0].CAND_NOMBRE1}</div>
          <div className="renglon"><h4>Apellido:</h4>&nbsp; {listaReinas[0].CAND_APELLIDOPATERNO}</div>
        </React.Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyComponent;