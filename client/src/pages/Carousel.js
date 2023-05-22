import React, { useState } from 'react'
import {CarouselItem} from "./CarouselItem.js"
import "../styles/carrusel.css"
import NavBar from "../components/NavBar.js"

export const Carousel=() => {

    const [activeQueen,setActiveQueen] = useState(0);//Para seleccionar la reina que se muestra en determinado momento.
    //Cambia con los botones de administrador.
    const [activeIndex,setActiveIndex] = useState(0);//Para el carrusel de imágenes.

    //En este arreglo pusimos datos quemados de las reinas. Llénenlo en su lugar de los datos de la
    //bdd.

    const items = [
        {
            nombreCompleto:"Alejandra Gonzales",
            fechaNacimiento:"14-04-2000",
            estatura:"1.70cm",
            idiomas:"Ingles-Italiano",
            colorOjos:"Marron",
            colorCabello:"Negro",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Nam hendrerit nisl turpis, quis tempor urna tincidunt ut.",
          
            //Este arreglo son las imágenes para cada reina. Dentro del require, recuperen el url de la bdd.
            icons: [
                {ic: require("../assets/reina1.jpg")
                },
                {ic: require("../assets/reina1_2.jpg")
                },
                {ic: require("../assets/reina1_3.jpg")
                }
            ]
        },

        {
            nombreCompleto:"Dolores Enriquez",
            fechaNacimiento:"28-10-1999",
            estatura:"1.75cm",
            idiomas:"Ingles-Francés",
            colorOjos:"Azules",
            colorCabello:"Rubio",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Nam hendrerit nisl turpis, quis tempor urna tincidunt ut.",
            
            icons: [
                {ic: require("../assets/reina2.jpg")
                },
                {ic: require("../assets/reina2_1.jpg")
                },
                {ic: require("../assets/reina2_2.jpg")
                }
            ]
           
        },

        {
            nombreCompleto:"Mariana del Río",
            fechaNacimiento:"01-01-2001",
            estatura:"1.60cm",
            idiomas:"Japonés",
            colorOjos:"verdes",
            colorCabello:"Marrón",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Nam hendrerit nisl turpis, quis tempor urna tincidunt ut.",
            icons:[
                {ic: require("../assets/reina3.jpeg")
                },
                {ic: require("../assets/reina3_2.jpg")
                },
                {ic: require("../assets/reina3_3.jpg")
                }
            ]
        },
        

    ];
    //Esta función permite mover el carrusel hacia adelante o hacia atrás según el botón que se presione.
    const updateIndex = (newIndex) =>{
        if(newIndex < 0){
            newIndex=items.length-1;//Muestra la última foto del carrusel si se presiona la flecha izquierda estando en la primera foto.
        }else if (newIndex > items.length-1){
            newIndex = 0; //Muestra la primera foto del carrusel si se presiona la flecha derecha estando en la última foto.
        }
        setActiveIndex(newIndex); //Cambia activeIndex.
    };
  return (
    <div className="general">

        <NavBar texto="Elección Reina"/> {/*Cambio de texto de texto de header*/}

        <div className= "container">
            <div className="macrocarrusel">
                <button onClick={()=>{//Este botón retrocede en el carrusel.
                    updateIndex(activeIndex - 1); 
                    }} className='button-arrow'>
                        <span className="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                </button>
                <div className='carousel'>
                    <div 
                        className='inner'
                        style={{transform: `translate(-${activeIndex * 100}%)`}}
                    >    
                    {items[activeQueen].icons.map((item)=>{ /* El indice debe ser parametrizado */
                        //Crea instancias de CarruselItem enviándole las fotos de la reina actual para que aparezcan dentro del carrusel.
                        return  <CarouselItem item={item} width={"100%"}/>;
                    })}
                    </div>
                    <div className = "carousel-buttons">
                        <div className='indicators'>
                            {items.map((item,index)=>{
                                //Indica en qué posición del carrusel se encuentra el usuario. También permiten cambiar la posición al hacer click.
                                return (
                                    <button 
                                            className="indicator-buttons"
                                            onClick={() => {
                                                updateIndex(index); 
                                            }}
                                        >
                                        
                                            <span 
                                            className={`material-symbols-outlined ${
                                                index === activeIndex
                                                ? "indicator-symbol-active"
                                                : "indicator-symbol"
                                            }`}
                                            >
                                                •
                                            </span>

                                    </button>
                                );
                            })}
                            

                        </div>
                    </div>
                </div>
                <button 
                    className='button-arrow'
                    onClick={() => {//Avanza en el carrusel.
                    updateIndex(activeIndex + 1);
                    }}
                >
                    <span class="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
            {/*Se muestra la información de la reina.*/}
            <div className='carousel-item-text'>
                <div className="renglon">
                    <h4>Nombre:</h4>&nbsp;
                    <span className='renglon_info'>{items[activeQueen].nombreCompleto}</span>
                </div>
                <div className="renglon">
                    <h4>Fecha de Nacimiento:</h4> &nbsp;
                    <span className='renglon_info'>{items[activeQueen].fechaNacimiento}</span>
                </div>
                <div className="renglon">
                    <h4>Estatura:</h4>&nbsp;
                    <span className='renglon_info'>{items[activeQueen].estatura}</span>
                </div>
                <div className="renglon">
                    <h4>Descripción:</h4>
                    <span className='renglon_info'>{items[activeQueen].description}</span>
                </div>
                <div className="renglon">
                    <h4>Idiomas:</h4>&nbsp;
                    <span className='renglon_info'>{items[activeQueen].idiomas}</span>
                </div>
                <div className="renglon">
                    <h4>Color de ojos:</h4>&nbsp;
                    <span className='renglon_info'>{items[activeQueen].colorOjos}</span>
                </div>
                <div className="renglon">
                    <h4>Color de cabello:</h4>&nbsp;
                    <span className='renglon_info'>{items[activeQueen].colorCabello}</span>
                </div>
            </div> {/* El indice debe ser parametrizado */}
        </div>
        <div className="boton-siguiente">
            {/*Con estos botones es posible cambiar entre las diferentes candidatas registradas y ver su información.
            Como los administradores son los encargados de gestionar lo que aparece en la página durante las diferentes etapas del 
            evento, estos botones deberían configurarse para que solo usuarios administradores puedan verlos.*/}
            {(activeQueen > 0) &&(
                <button onClick={() => {setActiveQueen(activeQueen-1)}}>Anterior</button>
            )}
            {(activeQueen < items.length-1) &&(
                <button onClick={() => {setActiveQueen(activeQueen+1)}}>Siguiente</button>
            )}
        </div>
    </div>
  )
}

