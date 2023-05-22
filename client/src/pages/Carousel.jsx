import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { CarouselItem } from "./CarouselItem"
import "../styles/carrusel.css"
import CalificationButton from '../components/CalificationButton';

function Carousel() {
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
    
    return (
        <div className="general">
            <div className="container">
                <div className="macrocarrusel">
                    <button onClick={() => {
                        updateIndex(activeIndex - 1);
                    }} className='button-arrow'>
                        <span className="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                    </button>
                    {listaFotos.length > 0 ? (
                        <React.Fragment>
                            <div className='carousel'>
                                <div className='inner' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                                    {listaFotos.map((item) => { return <CarouselItem item={item} width={"100%"} />; })}
                                </div>
                                <div className="carousel-buttons">
                                    <div className='indicators'>
                                        {listaFotos.map((item, index) => {
                                            return (
                                                <button
                                                    className="indicator-buttons"
                                                    onClick={() => {
                                                        updateIndex(index);
                                                    }}
                                                >

                                                    <span
                                                        className={`material-symbols-outlined ${index === activeIndex
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
                        </React.Fragment>
                    ) : (
                        <div>Loading...</div>
                    )}

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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='carousel-item-text'>
                    {listaReinas.length > 0 ? (
                        <React.Fragment>
                            <div className="renglon"><h4>Nombre Completo:</h4>&nbsp; {listaReinas[activeQueen].CAND_NOMBRE1} {listaReinas[activeQueen].CAND_APELLIDOPATERNO}</div>
                            <div className="renglon"><h4>Fecha Nacimiento:</h4>&nbsp; {listaReinas[activeQueen].CAND_FECHANACIMIENTO}</div>
                            <div className="renglon"><h4>Estatura:</h4>&nbsp; {listaReinas[activeQueen].CAND_ESTATURA}</div>
                            <div></div>
                            <div className="renglon"><h4>Idiomas: </h4>&nbsp; {listaReinas[activeQueen].CAND_IDIOMAS}</div>
                            <div className="renglon"><h4>Color de Cabello:</h4>&nbsp; {listaReinas[activeQueen].CAND_COLORCABELLO}</div>
                            <div className="renglon"><h4>Color de Ojos:</h4>&nbsp; {listaReinas[activeQueen].CAND_COLOROJOS}</div>


                        </React.Fragment>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
            <div className="boton-siguiente">
                {(activeQueen < listaReinas.length - 1) && (
                    <button onClick={() => { setActiveQueen(activeQueen + 1); actualizarListaFotos(listaReinas[activeQueen + 1].CANDIDATA_ID); setActiveIndex(0);}}>Siguiente</button>
                )}
                {(activeQueen > 0) && (
                    <button onClick={() => { setActiveQueen(activeQueen - 1); actualizarListaFotos(listaReinas[activeQueen - 1].CANDIDATA_ID); setActiveIndex(0);}}>Anterior</button>
                )}

            </div>
            <div className="boton-siguientePestaña">
                <button onClick={() => { window.location.href = '/Barra'; }}>Siguiente votación </button>
                </div>
            {listaReinas.length > 0 ? (
                        <React.Fragment>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                                    <CalificationButton idReina={listaReinas[activeQueen].CANDIDATA_ID}/>

                        </React.Fragment>
                    ) : (
                        <div>Loading...</div>
            )}
            
        </div>
    )
};

export default Carousel;