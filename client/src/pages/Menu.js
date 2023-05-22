import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { CarouselItem } from "./CarouselItem"
import "../styles/carrusel.css"
import CalificationButton from '../components/CalificationButton';
const Menu = () => {
    
    const [activeQueen, setActiveQueen] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [listaReinas, setListaReinas] = useState([]);
    const [listaFotos, setListaFotos] = useState([]);
    const [primero, setPrimero] = useState(0);

    const actualizarListaFotos = (idCandidata) => {
        Axios.post('http://localhost:3001/api/getFotosReinas',
            {
                id: idCandidata
            }).then((response) => {
                //console.log(response.data);
                setListaFotos(response.data);
                console.log(listaFotos);
            });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getReinas')
            .then((response) => {
                setListaReinas(response.data);
                setPrimero(response.data[0].CANDIDATA_ID);
                console.log(listaReinas);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }, []);

    useEffect(() => {
        Axios.post('http://localhost:3001/api/getFotosReinas',
            {
                id: primero
            }).then((response) => {
                //console.log(response.data);
                setListaFotos(response.data);
                console.log(listaFotos);
            });
      }, [listaReinas]);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = listaFotos.length - 1;
        } else if (newIndex > listaFotos.length - 1) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };
    
    
};

    
export default Menu;