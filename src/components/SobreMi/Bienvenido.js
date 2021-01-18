import React from 'react';
import styled from 'styled-components'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import {Bounce} from 'react-reveal/';

const Titulo = styled.h1`
    font-size: 20px;
    @media (min-width: 768px){
        font-size: 28px;
    }
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
    font-size: 18px;
    color: white;
    font-weight: 500;
    margin: 20px 10% 0 10%;

    @media (min-width: 768px){
        margin: 20px 30% 0 30%;
        font-size: 22px;
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

const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  }

const Bienvenido = () => {
    return (  
        <>

            <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            delay={1000}
            >

                <Container>
                <Bounce left>
                    <Titulo>¡Bienvenid@!</Titulo>
                </Bounce>
                    <div>
                        <Bounce right>
                            <Parrafo>Me presento, mi nombre es Federico. Soy Desarrollador Front-End, apasionado por la informática, el hardware 
                                    y la pizza. 
                            </Parrafo>
                        </Bounce>
                        <Bounce bottom>
                            <ContainerArrow>
                                <Arrow>
                                    <Link to="/portfolio/about/education/">
                                        <KeyboardArrowRightIcon style={{fontSize: 60, textDecoration: "none"}} className="arrowRight"/>
                                    </Link>
                                </Arrow>
                            </ContainerArrow>
                        </Bounce>
                    </div>
                </Container>
            </motion.div>
        </>
    );
}
 
export default Bienvenido;