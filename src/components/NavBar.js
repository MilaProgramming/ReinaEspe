import React from 'react'
import "../styles/barraNavegacion.css"

const NavBar = (props) => {
  return (
    <div className='barraNavegacion'>
        <h1>{props.texto}</h1>
    </div>
  )
}

export default NavBar