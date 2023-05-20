import React from 'react'
import ImagenOvalo from '../components/ImagenOvalo';
import CalificationButton from '../components/CalificationButton';
import "../styles/Traje.css"

function Traje() {
    return (
        <div className='trajes'>
            <div className='imagenTraje'>
                <ImagenOvalo dir = {require("../assets/pedro.jpg")}/>
            </div>

            <div className='botonTraje'>
                <CalificationButton/>
            </div>

        </div>
    )
}

export default Traje;