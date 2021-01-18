import React from 'react';
import styled from 'styled-components';
import ListarTechnologies from '../components/Technologies/Technologies';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Fade} from 'react-reveal/';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Titulo = styled.h1`
    width: 100%;
    color: white;
    margin-bottom: 20px 0 20px 0;
    
    `

const ContainerTecnologias = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    @media (min-width: 768px){
        width: 70%;
    }
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

const Technologies = () => {
    return ( 
        <Container>
            <Titulo>Tecnologías</Titulo>
            <ArrowUp><Fade><Link to="/portfolio/about"><KeyboardArrowUpIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowUp"/></Link></Fade>Sobre mi</ArrowUp>
            <ArrowDown>Proyectos<Fade><Link to="/portfolio/projects"><KeyboardArrowDownIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowDown"/></Link></Fade></ArrowDown>
            <ContainerTecnologias>
                <ListarTechnologies />
            </ContainerTecnologias>
        </Container>
    );
}
 
export default Technologies;