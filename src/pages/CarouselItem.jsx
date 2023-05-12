import React from 'react'
import "../styles/carrusel.css"

export const CarouselItem=( {item}) => {
  return (
    <div className='carousel-item'>
        <div></div>
        <figure className='carousel-img'>
          <img src={item.icon.default} />
        </figure>
        <div className='carousel-item-text'>{item.description}</div>
        <div></div>
    </div>
  );
};

/* export default CarouselItem */