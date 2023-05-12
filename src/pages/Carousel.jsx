import React, { useState } from 'react'
import {CarouselItem} from "./CarouselItem"
import "./carrusel.css"

export const Carousel=() => {
    const [activeIndex,setActiveIndex] = useState(0);
    const items = [
        {
            title:"None",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Nam hendrerit nisl turpis, quis tempor urna tincidunt ut.",
            
            icon: require("./Media/p1.svg"),
        },

        {
            title:"None",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing Nam hendrerit nisl turpis, quis",
            icon: require("./Media/p2.svg"),
        },

        {
            title:"None",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing Nam hendrerit nisl turpis, quis",
            icon: require("./Media/p3.svg"),
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
    <div className= "container">
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
            {items.map((item)=>{
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
    
  )
}

