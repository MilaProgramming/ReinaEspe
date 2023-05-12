
import './preguntas.css';
import chica1 from '../../assets/chica1.jpg'
import chica2 from '../../assets/chica2.jpg'
import chica3 from  '../../assets/chica7.jpg'
import chica4 from '../../assets/chica4.jpg'
import chica5 from '../../assets/chica5.jpg'
import chica6 from '../../assets/chica6.jpg'
import chica7 from '../../assets/chica7.jpg'
import logoReina from '../../assets/logo_Reina_SinFondo.png'
import logoEspe from '../../assets/logo_100anios.jpg'
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