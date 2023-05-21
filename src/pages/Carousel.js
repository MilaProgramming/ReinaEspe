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
    const updateIndex = (newIndex) =>{
        if(newIndex < 0){
            newIndex=items.length-1;
        }else if (newIndex > items.length-1){
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };
  return (
    <div className="general">

        <NavBar texto="Elección Reina"/> {/*Cambio de texto de texto de header*/}

        <div className= "container">
            <div className="macrocarrusel">
                <button onClick={()=>{
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
                        return  <CarouselItem item={item} width={"100%"}/>;
                    })}
                    </div>
                    <div className = "carousel-buttons">
                        <div className='indicators'>
                            {items.map((item,index)=>{
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
                    onClick={() => {
                    updateIndex(activeIndex + 1);
                    }}
                >
                    <span class="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
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
            {(activeQueen < items.length-1) &&(
                <button onClick={() => {setActiveQueen(activeQueen+1)}}>Siguiente</button>
            )}
            {(activeQueen > 0) &&(
                <button onClick={() => {setActiveQueen(activeQueen-1)}}>Anterior</button>
            )}
            
        </div>
    </div>
  )
}

