
import './preguntas.css';
import chica7 from '../../assets/chica7.jpg'
import React from 'react';


const Preguntas = () => (
  
   <>


    <div>
      <h1 className='tituloSecundario'>Ronda de preguntas</h1>
    </div>


   <div className='Cuerpo'>
   <table class="table">
  <tr>
    <td><img src={chica7}className='rounded-circle img-fluid'/>
      <br/>
    RUTH
    </td>
    <td><img src={chica7}className='rounded-circle img-fluid' /><br/>
    LAURA</td>
    <td><img src={chica7}className='rounded-circle img-fluid'/><br/>
    DANIELA</td>
    <td><img src={chica7}className='rounded-circle img-fluid' /><br/>
    CRIS</td>
  </tr>
  <tr>
    <td><img src={chica7}className='rounded-circle img-fluid'/><br/>
        CANELA</td>
    <td><img src={chica7}className='rounded-circle img-fluid' /><br/>
    CAMILA</td>
    <td><img src={chica7}className='rounded-circle img-fluid' /><br/>
    GABBY</td>
    <td><img src={chica7}className='rounded-circle img-fluid' /><br/>
    LUNA</td>
  </tr>
</table>
   </div>
   </>
  
);

export default Preguntas;