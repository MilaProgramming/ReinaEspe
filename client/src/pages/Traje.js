import React, { useEffect } from 'react'
import ImagenOvalo from '../components/ImagenOvalo';
import CalificationButton from '../components/CalificationButton';
import "../styles/Traje.css"
import NavBar from "../components/NavBar.js";

function Traje() {
    useEffect(() => {
        document.title = "Traje Reinas"
        
    });

    useEffect(() => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'https://cliply.co/wp-content/uploads/2021/03/392103930_CROWN_EMOJI_STICKER_400.png';
    }, []);

    return (

        <div>
                <NavBar texto="Ronda de trajes"/> {/*Cambio de texto de texto de header*/}

                <div className='trajes'>

                <div className='imagenTraje'>
                    <ImagenOvalo dir = {require("../assets/pedro.jpg")}/>
                </div>

                <div className='botonTraje'>
                    <CalificationButton/>
                </div>

                </div>
        </div>

    )
}

export default Traje;