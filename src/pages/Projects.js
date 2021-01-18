import React from 'react';
import styled from 'styled-components';
import findyou from '../img/findyou.png';
import weather from '../img/weather.png';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Titulo = styled.h1`
    font-size: 20px;
    color: white;
    @media (min-width: 768px){
        font-size: 28px;
    }
`

const ContainerProyecto = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: auto;
    margin-top: 20px;
`

const Proyecto = styled.div`
    width: 350px;
    height: auto;
    background-color: white;
    border-radius: 20px;
`

const TituloProyecto = styled.h2`
    font-size: 18px; 
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const Descripcion = styled.p`
    font-size: 17px;
    color: black;
`

const Tecnologias = styled.p`
    font-size: 15px;
    color: black;
    margin: 15px 15px;
`

const Separador = styled.hr`
    width: 90%;
    margin: 0 auto;
`

const Button = styled.button`
    background: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
`

const Link = styled.a`
    text-decoration: none;
`

const Projects = () => {
    return ( 
        <Container>
            <Titulo>Proyectos</Titulo>
            <ContainerProyecto>
                <Proyecto className="containerProyecto">
                    <TituloProyecto>Find You App</TituloProyecto>
                    <Image src={findyou} />
                    <Descripcion>App web para reportar personas</Descripcion>
                    <Separador />
                    {/* <Link href="https://fredonra.github.io/findYouComit/" target="_blank"><Button className="button">View DEMO</Button></Link> */}

                    <Tecnologias>React.js - MaterialUI - Firebase - Firestore - Storage - API</Tecnologias>

                </Proyecto>
                <Proyecto className="containerProyecto">
                    <TituloProyecto>Weather App</TituloProyecto>
                    <Image src={weather} />
                    <Descripcion>App web consultar el clima</Descripcion>
                    <Separador />

                    {/* <Link href="https://fredonra.github.io/weather-app/" target="_blank"><Button className="button">View DEMO</Button></Link> */}
                    <Tecnologias>React.js - Styled Components - API - Framer Motion</Tecnologias>
                </Proyecto>
            </ContainerProyecto>
        </Container>
    );
}
 
export default Projects;