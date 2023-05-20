import React from 'react'
import '../styles/Barra.css';
import CalificationButton from '../components/CalificationButton';
const imagen2 = require.context("../assets/");
const data = [
    { id: 1, sede:"MATRIZ",departamento: "Dpto de Ciencias de la Computación", nombre: "Maria", foto:"../assets/chica4.jpg"},
    { id: 2, sede:"LTCGA",departamento: "Dpto de Ciencias Médicas", nombre: "Karelis",foto:"./chica7.jpg" },
    { id: 3, sede:"MATRIZ",departamento: "Dpto de Ciencias de la Energia y Mecánica", nombre: "Elizabeth",foto:"./chica2.jpg" },
    { id: 4, sede:"MATRIZ",departamento: "Dpto de Ciencias de la Tierra y Construcción", nombre: "Josselin",foto:"./chica7.jpg" },
    { id: 5, sede:"MATRIZ",departamento: "Dpto de Ciencias de la Vida y Agricultura", nombre: "Mishel", foto:"./chica5.jpg"},
    { id: 6, sede:"MATRIZ", departamento: "Dpto de Ciencias Económicas, Administrativas y del Comercio", nombre: "Pamela",foto:"./chica7.jpg" },
    { id: 7, sede:"MATRIZ", departamento: "Dpto de Ciencias Humanas y Sociales", nombre: "Pamela",foto:"./chica6.jpg" },
    { id: 8, sede:"MATRIZ", departamento: "Dpto de Seguridad y Defensa", nombre: "FRANCISCA",foto:"./chica7.jpg" },
    { id: 6, sede:"MATRIZ", departamento: "Dpto de Electrica, Electrónica y Teliecomunicaciones", nombre: "DANIELA",foto:"./chica1.jpg" },
    { id: 6, sede:"MATRIZ", departamento: "Dpto de Ciencias Exactas", nombre: "VANESSA",foto:"./chica6.jpg" },
    { id: 6, sede:"MATRIZ", departamento: "Dpto de Ciencias ------------", nombre: "NAYELI",foto:"./chica7.jpg" },
];
const capturar = () => {
    localStorage.setItem("nota",document.getElementById("call-barra").value)
}


const Barra = () => (
   <> <div className="container_cont">
        <div className="barras">
            <h2>Etapa 3 Calificación de Barras</h2>
            <div className="barra">
                <h2>Califique la barra del departamento</h2>
                <img src={imagen2("./indicador.png")}/>
            </div>
        </div>
        
        
    </div>
    <div className="container-general">
    <div className='filas'>
    
    { data.map((datos)=>
    <div className='contenedor-candidatas'>
    
    <div className='green-round'>
    <br/><br/>
        <h5>{datos.departamento}</h5>
        <br/>
        <h4>{datos.nombre}</h4>
    </div>
    <div className='orange-round'> 
    <br/>
    <p>{datos.sede}</p>
    
    </div>
    <img src={imagen2(datos.foto)}></img>
    <div className='botones-calificacion'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
          </div>
        <input id="cal-barra" type='range' min="1" max="5" step="1"/>
        
        <button>
        ✔
        </button>
    </div>
    )
        
    }</div></div>
    </>
);

export default Barra;