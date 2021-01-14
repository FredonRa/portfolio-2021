import React from 'react';
import styled from 'styled-components';
import findyou from '../../img/findYou.png';
import weather from '../../img/weatherapp.png';
import '../../App.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
    justify-content: space-around;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    @media (max-width: 996px) {
        display: none;
    }
`

const ContainerProyecto = styled.div`
    background: white;
    width: 60%;
    padding: 10px;
    max-width: 350px;
    margin: 20px;
    border-radius: 20px;
    overflow: hidden;
    transition: transform .2s;
    z-index: 1;
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

const ContainerButton = styled.div`
    display: hidden;
    width: 100%;
    /* background: red; */
`

const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    z-index: 1;
    transition: transform .2s;
    font-weight: 700;
    :active {
        transform: scale(.8);
        transition: transform .2s;
    }
`

const Descripcion = styled.p`
    font-size: 20px;
`

const ListarProyectos = proyectos.map((proyecto, index) => {
    return(
        <>
            <ContainerProyecto key={index} className="containerProyecto">
                <Titulo>{proyecto.nombre}</Titulo>
                <Image src={proyecto.foto} alt="imagen de proyecto"/>
                <ContainerButton><a href={proyecto.link} target="_blank" rel="noopener noreferrer"><Button className="button">VIEW DEMO</Button></a></ContainerButton>
                <Descripcion>{proyecto.descripcion}</Descripcion>
                <hr/>
                {proyecto.tecnologias}
            </ContainerProyecto>
        </>
    )
})

    class DivProyectos extends React.Component {
        constructor() {
          super()
          this.state = { value: 0 };
          this.onChange = this.onChange.bind(this);
        }
      
        onChange(value) {
          this.setState({ value });
        }
      
        render() {
          return (
                <>
              <div className="carusel">
            <Carousel
              value={this.state.value}
              onChange={this.onChange}
              slides={[
                  (            <ContainerProyecto className="containerProyecto">
                <Titulo>{proyectos[0].nombre}</Titulo>
                <Image src={proyectos[0].foto} alt=""/>
                <ContainerButton><a href={proyectos[0].link} target="_blank" rel="noopener noreferrer"><Button className="button">VIEW DEMO</Button></a></ContainerButton>
                <Descripcion>{proyectos[0].descripcion}</Descripcion>
                <hr/>
                {proyectos[0].tecnologias}
            </ContainerProyecto>),
                (            <ContainerProyecto className="containerProyecto">
                <Titulo>{proyectos[1].nombre}</Titulo>
                <Image src={proyectos[1].foto} alt=""/>
                <ContainerButton><a href={proyectos[1].link} target="_blank" rel="noopener noreferrer"><Button className="button">VIEW DEMO</Button></a></ContainerButton>
                <Descripcion>{proyectos[1].descripcion}</Descripcion>
                <hr/>
                {proyectos[1].tecnologias}
            </ContainerProyecto>)
              ]}
              plugins={[
                  'arrows',
                  'clickToChange'
                ]}
                />
          </div>
          <Container>
              {ListarProyectos}
          </Container>
            </>
          );
        }
      }

export default DivProyectos;