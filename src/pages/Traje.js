import React from 'react'
import ImagenOvalo from '../components/ImagenOvalo'

function Traje() {
  return (
    <div className='trajes'>
        <ImagenOvalo dir = {require("../assets/pedro.jpg")}/>
    </div>
  )
}

export default Traje