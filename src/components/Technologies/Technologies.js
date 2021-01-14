import React from 'react';
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/js.png';
import bootstrap from '../../img/bootstrap.png';
import react from '../../img/react.png';
import materialUi from '../../img/materialUi.png';
import git from '../../img/git.png';
import npm from '../../img/npm.png';
import styledFoto from '../../img/styled.png'
import styled from 'styled-components';
import {Bounce, LightSpeed, Fade} from 'react-reveal'


const Imagen = styled.img`
    width: 40px;
    @media (min-width: 768px){
        width: 70px;
    }
`

const NombreTecnologia = styled.p`
    font-size: 20px;
`

const ContainerTecnologia = styled.div`
    /* background: red; */
    width: 130px;
    margin: 10px;
    border-radius: 10px;
    transition: all .3s linear .3s;
    padding: 7px;
    color: #d6b0b1;
    :hover{
        background: white;
        color: black;
        transition: all .1s linear .1s;
    }
`

const tecnologias = [
    {
        tecnologia: 'HTML',
        foto: html
    },
    {
        tecnologia: 'CSS',
        foto: css
    },
    {
        tecnologia: 'Bootstrap',
        foto: bootstrap
    },
    {
        tecnologia: 'JavaScript',
        foto: js
    },
    {
        tecnologia: 'ReactJS',
        foto: react
    },
    {
        tecnologia: 'Material UI',
        foto: materialUi
    },
    {
        tecnologia: 'Styled Components',
        foto: styledFoto
    },
    {
        tecnologia: 'npm',
        foto: npm
    },
    {
        tecnologia: 'GIT',
        foto: git
    },
]

const Lista = tecnologias.map((tecnologia, index) => {
    return(<ContainerTecnologia key={index}>
            <Fade>
                <Imagen src={tecnologia.foto} />
                <NombreTecnologia>{tecnologia.tecnologia}</NombreTecnologia>
            </Fade> 
        </ContainerTecnologia>)
})

const ListarTechnologies = () => {
    return ( 
        <>{Lista}</>
    );
}
 
export default ListarTechnologies;