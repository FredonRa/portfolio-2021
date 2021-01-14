import React from 'react';
import styled from 'styled-components';
import DivProyectos from '../components/Proyectos/Proyectos';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Fade} from 'react-reveal/';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    `

const Titulo = styled.h1`
    color: white;
`

const ArrowUp = styled.div`
    color: rgba(201, 201, 201, 0.638);
    position: absolute;
    top: 5%;
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


const Proyectos = () => {
    return (  
        <Container>
            <Titulo>
                Proyectos    
            </Titulo>
            <DivProyectos />
            <ArrowUp><Fade><Link to="/portfolio/technologies"><KeyboardArrowUpIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowUp"/></Link></Fade>Tecnologías</ArrowUp>
            <ArrowDown>Contáctame<Fade><Link to="/portfolio/contact"><KeyboardArrowDownIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowDown"/></Link></Fade></ArrowDown>
        </Container>
    );
}
 
export default Proyectos;