import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {Fade, Bounce} from 'react-reveal/';

const Titulo = styled.h1`
    top: 40px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    z-index: 1;
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

const ContainerArrow = styled.div`
    color: white;
    text-decoration: none;
`

const Arrow = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px 10% 0 10%;
    @media (min-width: 768px){
        margin: 20px 30% 0 30%
    }
`

const Education = () => {
    return ( 
        <Container>
            <Bounce top>
                <Titulo>Educación</Titulo>
            </Bounce>
            <div>
                <Bounce bottom>
                    <Parrafo>Arranqué mi carrera en Programación en la E.E.S.T n°1 Manuel Belgrano,
                            donde me recibí como Tecnico en Programación. Allí obtuve las bases, vi Bases
                            de Datos, lenguajes como Java y Visual Basic. También un poco de desarrollo web 
                            (HTML y CSS).       
                    </Parrafo>
                </Bounce>
                <Fade>
                    <Bounce right>
                        <ContainerArrow>
                                <Arrow>
                                    <Link to="/portfolio/about/course">
                                        <KeyboardArrowRightIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowRight"/>
                                    </Link>
                                </Arrow>
                        </ContainerArrow>
                    </Bounce>
                </Fade>
            </div>
        </Container>
    );
}
 
export default Education;