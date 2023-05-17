import React from 'react'
import ImagenOvalo from '../components/ImagenOvalo';
import CalificationButton from '../components/CalificationButton';

function Traje() {
    return (
        <div className='trajes'>
            <ImagenOvalo dir = {require("../assets/pedro.jpg")}/>
            <CalificationButton/>
        </div>
    )
}

export default Traje;