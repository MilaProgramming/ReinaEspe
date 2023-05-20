import React from 'react'
import '../styles/Barra.css';
import CalificationButton from '../components/CalificationButton';
const imagen = require.context("../img/");
const imagen2 = require.context("../assets/");
const data = [
    { id: 1, sede:"MATRIZ",departamento: "Dpto de Ciencias de la Computacion", nombre: "Maria", foto:"./chica4.jpg" },
    { id: 2, sede:"LTCGA",departamento: "Dpto de Ciencias Medicas", nombre: "Karelis",foto:"./chica7.jpg" },
    { id: 3, sede:"MATRIZ",departamento: "Dpto de Mecanica", nombre: "Elizabeth",foto:"./chica2.jpg" },
    { id: 4, sede:"MATRIZ",departamento: "Dpto de Electronica", nombre: "Josselin",foto:"./chica7.jpg" },
    { id: 5, sede:"MATRIZ",departamento: "Dpto de Ciencias", nombre: "Mishel", foto:"./chica5.jpg"},
    { id: 6, sede:"MATRIZ", departamento: "Dpto de Ciencias Ambientales", nombre: "Pamela",foto:"./chica6.jpg" },
  ];


const Barra = () => (
   <> <div className="container_cont">
        <div className="barras">
            <h2>Etapa 3 Calificacion de Barras</h2>
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
        <h3>{datos.departamento}</h3>
        <br/>
        <h3>{datos.nombre}</h3>
    </div>
    <div className='orange-round'> 
    <br/>
    <h5>{datos.sede}</h5>
    
    </div>
    <img src={imagen2(datos.foto)}></img>
    <div className='botones-calificacion'><button>
        1
        </button> <button>
        2
        </button> <button>
        3
        </button> <button>
        4
        </button> 
        <button>
        5
        </button>   </div>
    </div>
    )
        
    }</div></div>
    </>
);

export default Barra;