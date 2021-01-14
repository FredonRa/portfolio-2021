import React from 'react';
import styled from 'styled-components';
import ListarTechnologies from '../components/Technologies/Technologies';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: blue; */
`

const Titulo = styled.h1`
    width: 100%;
    /* background-color: red; */
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

const Technologies = () => {
    return ( 
        <Container>
            <Titulo>Tecnologías</Titulo>
            <ContainerTecnologias>
                <ListarTechnologies />
            </ContainerTecnologias>
        </Container>
    );
}
 
export default Technologies;