import React, { useState } from 'react'
import {CarouselItem} from "./CarouselItem"
import "../styles/carrusel.css"
import reina1 from "../assets/reina1.jpg"
import reina2 from "../assets/reina1_2.jpg"
import reina3 from "../assets/reina1_3.jpg"
import reina4 from "../assets/reina2.jpg"
import reina5 from "../assets/reina2_1.jpg"
import reina6 from "../assets/reina2_2.jpg"
import reina7 from "../assets/reina3.jpeg"
import reina8 from "../assets/reina3_2.jpg"
import reina9 from "../assets/reina3_3.jpg"

export const Carousel=() => {
    const [activeQueen,setActiveQueen] = useState(0);
    const [activeIndex,setActiveIndex] = useState(0);
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
            
            icons: [
                {ic: reina1
                },
                {ic: reina2
                },
                {ic: reina3
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
                {ic: reina4
                },
                {ic: reina5
                },
                {ic: reina6
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
                {ic: reina7
                },
                {ic: reina8
                },
                {ic: reina9
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
            <div className="renglon"><h4>Nombre:</h4>&nbsp; {items[activeQueen].nombreCompleto}</div>
            <div className="renglon"><h4>Fecha de Nacimiento:</h4> &nbsp;{items[activeQueen].fechaNacimiento}</div>
            <div className="renglon"><h4>Estatura:</h4>&nbsp; {items[activeQueen].estatura}</div>
            <div className="renglon"><h4>Descripción:</h4>{items[activeQueen].description}</div>
            <div className="renglon"><h4>Idiomas:</h4>&nbsp; {items[activeQueen].idiomas}</div>
            <div className="renglon"><h4>Color de ojos:</h4>&nbsp; {items[activeQueen].colorOjos}</div>
            <div className="renglon"><h4>Color de cabello:</h4>&nbsp; {items[activeQueen].colorCabello}</div>
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

