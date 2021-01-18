import React from 'react';
import styled from 'styled-components';
import Formulario from '../components/Contactame/Formulario';
import wsp from '../img/wsp.png';
import mail from '../img/mail.png';
import linkedin from '../img/linkedin.png';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;

`

const Titulo = styled.h1`
    color: white;
`

const Icono = styled.img `
    width: 50px;
    transition: transform .2s;
    :hover{
        transform: scale(1.1);
        cursor: pointer;
        transition: transform .2s;
    }
`

const ContainerIconos = styled.div `
    display: flex;
    width: 70%;
    max-width: 400px;
    justify-content: space-evenly;
    margin-top: 30px;
`

const Contactame = () => {
    return ( 
        <Container>
            <Titulo>Contáctame</Titulo>
            <Formulario />
            <ContainerIconos>
                <a href="mailto: fedeleiva20@gmail.com"><Icono src={mail} /></a>
                <a href="https://www.linkedin.com/in/federico-leiva/" target="_blank"><Icono src={linkedin} /></a>
                <a href="https://wa.me/+541140566523" target="_blank"><Icono src={wsp} /></a>
            </ContainerIconos>
        </Container>
    );
}
 
export default Contactame;