import React from 'react'
import "../styles/carrusel.css"

export const CarouselItem=( {item}) => {
  return (
    <div className='carousel-item'>
        <div></div>
        <figure className='carousel-img'>
          <img src={item.ic} alt = "imagen"/>
        </figure>
    </div>
  );
};

/* export default CarouselItem */