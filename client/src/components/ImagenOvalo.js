import React from 'react'
import "../styles/imagenOvalo.css"

const ImagenOvalo = (props) => {
  return (
    <div className='imagen'>

        <div className='imagen'>
            <img src = {props.dir}></img>
        </div>

    </div>
  )
}

export default ImagenOvalo
