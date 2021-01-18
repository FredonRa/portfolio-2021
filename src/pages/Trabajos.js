import React from 'react';
import styled from 'styled-components';
import findyou from '../img/findyou.png';
import weather from '../img/weather.png';
import {Fade} from 'react-reveal/';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContainerTrabajos = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
    margin-top: 30px;
    /* background: red; */
    @media (max-width: 768px){
        display: none;
    }
`

const Titulo = styled.h1`
    font-size: 20px;
    color: white;
`

const Trabajo = styled.div`
    width: 300px;
    min-height: 270px;
    background: white;
    overflow: hidden;
    border-radius: 10px;
    transition: all .2s;
    z-index: 10;
    padding: 5px;
    margin-top: 20px;
    :hover {
        transform: scale(1.1);
        transition: transform .2s;
        cursor: pointer;
    }
`

const TituloTrabajo = styled.h2 `
    font-size: 15px;
`
const Descripcion = styled.p`
    font-size: 18px;
    font-weight: 500;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const TituloTecnologias = styled.h3`
    font-size: 16px;
    font-weight: 500;

`

const Tecnologias = styled.p`
    font-size: 14px;
    font-weight: 500;
`

const Separador = styled.hr`
    padding: 0;
    margin-bottom: 3px;
`

const Links = styled.a`
    all: unset;
    text-decoration: none;
    color: black;
`

const ArrowUp = styled.div`
    color: rgba(201, 201, 201, 0.638);
    position: absolute;
    top: 10%;
    transition: all .1s linear .1s;
    :hover{
        color: white;
        transition: all .1s linear .1s;
    }
`

const ArrowDown = styled.div`
    color: rgba(201, 201, 201, 0.638);
    position: absolute;
    bottom: 5%;
    transition: all .1s linear .1s;
    :hover{
        color: white;
        transition: all .1s linear .1s;
    }
`

const Trabajos = () => {
    return (  
        <Container>
            <ArrowUp><Fade><Link to="/portfolio/technologies/"><KeyboardArrowUpIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowUp"/></Link></Fade>Tecnologías</ArrowUp>
            <ArrowDown>Contáctame<Fade><Link to="/portfolio/contact"><KeyboardArrowDownIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowDown"/></Link></Fade></ArrowDown>
            <Fade top><Titulo>Proyectos</Titulo></Fade>
            <ContainerTrabajos>
                <Links href="https://fredonra.github.io/findYouComit/" target="_blank">
                    <Fade left>
                        <Trabajo>
                            <TituloTrabajo>Find You App</TituloTrabajo>
                            <Separador />
                            <Image src={findyou} />
                            <Separador />
                            <Descripcion>App web para reportar personas</Descripcion>
                            <TituloTecnologias>Tegnologías usadas</TituloTecnologias>
                            <Tecnologias>React.js - MaterialUI - Firebase - Firestore - Storage - API</Tecnologias>
                        </Trabajo>
                    </Fade>
                </Links>
                <Links href="https://fredonra.github.io/weather-app/" target="_blank">
                    <Fade right>
                        <Trabajo > 
                            <TituloTrabajo>Weather App</TituloTrabajo>
                            <Separador />
                            <Image src={weather} />
                            <Separador />
                            <Descripcion>App web consultar el clima</Descripcion>
                            <TituloTecnologias>Tegnologías usadas</TituloTecnologias>
                            <Tecnologias>React.js - Styled Components - API - Framer Motion</Tecnologias>
                        </Trabajo>
                    </Fade>
                </Links>
            </ContainerTrabajos>
            <div className="carousel">
            <Carousel >
                <Links href="https://fredonra.github.io/findYouComit/" target="_blank">
                    <Fade left>
                        <Trabajo>
                            <TituloTrabajo>Find You App</TituloTrabajo>
                            <Separador />
                            <Image src={findyou} />
                            <Separador />
                            <Descripcion>App web para reportar personas</Descripcion>
                            <TituloTecnologias>Tegnologías usadas</TituloTecnologias>
                            <Tecnologias>React.js - MaterialUI - Firebase - Firestore - Storage - API</Tecnologias>
                        </Trabajo>
                    </Fade>
                </Links>
                <Links href="https://fredonra.github.io/weather-app/" target="_blank">
                    <Fade right>
                        <Trabajo > 
                            <TituloTrabajo>Weather App</TituloTrabajo>
                            <Separador />
                            <Image src={weather} />
                            <Separador />
                            <Descripcion>App web consultar el clima</Descripcion>
                            <TituloTecnologias>Tegnologías usadas</TituloTecnologias>
                            <Tecnologias>React.js - Styled Components - API - Framer Motion</Tecnologias>
                        </Trabajo>
                    </Fade>
                </Links>
            </Carousel>
            </div>
        </Container>
    );
}
 
export default Trabajos;