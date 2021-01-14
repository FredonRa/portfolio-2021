import React from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Fade, Bounce} from 'react-reveal/';
import { Link } from 'react-router-dom';
import CV from './CV-Leiva-Federico-Ivan.pdf'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    z-index: 1;
    color: white;
`

const Titulo = styled.h1`
    color: white;
`

const Parrafo = styled.p`
    font-size: 22px;
    color: white;
    font-weight: 500;
    margin: 20px 10% 0 10%;
    @media (min-width: 768px){
        margin: 20px 30% 0 30%
    }
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

const Download = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: auto;
    margin-top: 20px;
`

const Parrafo2 = styled.p`
    font-size: 18px;
    color: white;
    font-weight: 500;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  transition: all .5s;
  text-decoration: none;
  &:hover{
    background-color: white;
    color: black;
    transition: all .5s !important ;
    }
`

const Curso = () => {
    return ( 
        <Container>
            <Bounce top>
                <Titulo>Cursos</Titulo>
            </Bounce>
            <Bounce left>
                <Parrafo>
                    Una vez finalizada la cursada en 2019, comencé a ver desarrollo web por mi cuenta, y ahí fue cuando
                    me encantó. En 2020 Seguí reforzando HTML y CSS, y dando mis primeros pasos en JavaScript. A fines de Agosto, 
                    ComunidadIT me comunicó que había calificado para una de sus becas, así que elegí aprender React.JS
                </Parrafo>
            </Bounce>
            <ArrowUp><Fade><Link to="/portfolio/"><KeyboardArrowUpIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowUp"/></Link></Fade>Home</ArrowUp>
            <ArrowDown>Tecnologías<Fade><Link to="/portfolio/technologies/"><KeyboardArrowDownIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowDown"/></Link></Fade></ArrowDown>
            <Bounce right>
                <Download><Parrafo2>¿Querés descargar mi CV?</Parrafo2> <Bounce bottom><Button href={CV} download>Download</Button> </Bounce></Download>
            </Bounce>
        </Container>
    );
}
 
export default Curso;