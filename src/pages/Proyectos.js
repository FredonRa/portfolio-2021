import React from 'react';
import styled from 'styled-components';
import DivProyectos from '../components/Proyectos/Proyectos';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    `

const Titulo = styled.h1`
    color: white;
`



const Proyectos = () => {
    return (  
        <Container>
            <Titulo>
                Proyectos    
            </Titulo>
            <DivProyectos />
        </Container>
    );
}
 
export default Proyectos;