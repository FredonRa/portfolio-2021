import React from 'react';
import styled from 'styled-components';
import findyou from '../../img/findYou.png';
import weather from '../../img/weatherapp.png';

const proyectos = [
    {
        nombre: "Find You App",
        descripcion: "App web para reportar personas desaparecidas.",
        tecnologias: "React.JS - Material UI - FireBase - FireStore - Storage - Consumo de API",
        link: "https://fredonra.github.io/findYouComit/",
        foto: findyou
    },
    {
        nombre: "Wheater App",
        descripcion: "App web para consultas de temperatura climatica.",
        tecnologias: "React.JS - Styled Components - Framer Motion - Consumo de API",
        link: "https://fredonra.github.io/weather-app/",
        foto: weather
    },
]

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`

const ContainerProyecto = styled.div`
    
    background: white;
    width: 90%;
    max-width: 300px;
    margin: 20px;
    border-radius: 20px;
    overflow: hidden;
    transition: transform .2s;

    :hover {
        transform: scale(1.1);
        opacity: 40%;
        transition: all .2s;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        width: 60%;
        max-width: 400px;
    }
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
`

const Titulo = styled.h1`
    font-size: 24px;
    letter-spacing: 2px;
    font-weight: 700;
`

const ContainerDemo = styled.div`
    position: absolute;
    z-index: 1;
    width: 90%;
    max-width: 300px;
    height: 200px;
    background-color: red;
`

const ListarProyectos = proyectos.map((proyecto, index) => {
    return(
        <>
        <ContainerProyecto>
            <Titulo>{proyecto.nombre}</Titulo>
            <Image src={proyecto.foto} alt=""/>
            {proyecto.descripcion}
            {proyecto.tecnologias}
        </ContainerProyecto>
            {/* <ContainerDemo /> */}
        </>
    )
})

const DivProyectos = () => {

    return ( 
        <Container>
            
            {ListarProyectos}
        </Container>
    );
}
 
export default DivProyectos;