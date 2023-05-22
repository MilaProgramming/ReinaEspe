import '../styles/Barra.css';
import React, { useEffect } from 'react'
import '../styles/Barra.css';
import NavBar from '../components/NavBar';
const imagen2 = require.context("../assets/");



const imagen = require.context("../img/");


//para probar datos
const data = [
    { id: 1, sede: "MATRIZ", departamento: "Dpto de Ciencias de la Computación", nombre: "Maria", foto: "./chica7.jpg" },
    { id: 2, sede: "LTCGA", departamento: "Dpto de Ciencias Médicas", nombre: "Karelis", foto: "./chica7.jpg" },
    { id: 3, sede: "MATRIZ", departamento: "Dpto de Ciencias de la Energia y Mecánica", nombre: "Elizabeth", foto: "./chica7.jpg" },
    { id: 4, sede: "MATRIZ", departamento: "Dpto de Ciencias de la Tierra y Construcción", nombre: "Josselin", foto: "./chica7.jpg" },
    { id: 5, sede: "MATRIZ", departamento: "Dpto de Ciencias de la Vida y Agricultura", nombre: "Mishel", foto: "./chica7.jpg" },
    { id: 6, sede: "MATRIZ", departamento: "Dpto de Ciencias Económicas, Administrativas", nombre: "Pamela", foto: "./chica7.jpg" },
    { id: 7, sede: "MATRIZ", departamento: "Dpto de Ciencias Humanas y Sociales", nombre: "Pamela", foto: "./chica7.jpg" },
    { id: 8, sede: "MATRIZ", departamento: "Dpto de Seguridad y Defensa", nombre: "FRANCISCA", foto: "./chica7.jpg" },
    { id: 6, sede: "MATRIZ", departamento: "Dpto de Electrica, Electrónica y Telcom", nombre: "DANIELA", foto: "./chica7.jpg" },
    { id: 6, sede: "MATRIZ", departamento: "Dpto de Ciencias Exactas", nombre: "VANESSA", foto: "./chica7.jpg" },
    { id: 6, sede: "MATRIZ", departamento: "Dpto de Ciencias ------------", nombre: "NAYELI", foto: "./chica7.jpg" },
];

function Barra() {
    useEffect(() => {
        document.title = "Calificación de Barras"

    });
    useEffect(() => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'https://cliply.co/wp-content/uploads/2021/03/392103930_CROWN_EMOJI_STICKER_400.png';
    }, []);

    return (
        <>

            <NavBar texto="Calificación de Barras" /> {/*Cambio de texto de texto de header*/}
            <div className="container_cont">
                <div className="barras">

                    <div className="barra">
                        <h2>Califique la barra del departamento</h2>
                        <img src={imagen2("./indicador.png")} />
                    </div>
                </div>


            </div>
            <div className="container-general">
                <div className='filas'>

                    {data.map((datos) =>
                        <div className='contenedor-candidatas'>

                            <div className='green-round'>

                                <h5>{datos.departamento}</h5>

                                <h4>{datos.nombre}</h4>
                            </div>
                            <div className='orange-round'>

                                <p>{datos.sede}</p>

                            </div>
                            <img src={imagen2(datos.foto)}></img>
                            <div className='botones-calificacion'>
                                <div><p>1</p></div>
                                <div><p>
                                    2</p></div>
                                <div><p>3</p></div>
                                <div><p>4</p></div>
                                <div><p>5</p></div>
                            </div>
                            <input id="cal-barra" type='range' min="1" max="5" step="1" />

                            <button>
                                ✔
                            </button>
                        </div>
                    )

                    }</div></div>
        </>)
};

export default Barra;