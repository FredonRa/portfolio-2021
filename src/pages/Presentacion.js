import React, { useEffect } from 'react';
import styled from 'styled-components';
import Video from '../components/Background/Video';
import {Fade, Bounce} from 'react-reveal/';
import { useDencrypt } from "use-dencrypt-effect";
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
  import { AnimatePresence, motion } from "framer-motion";

  import { AnimatedSwitch } from 'react-router-transition';
import ArrowsLinks from '../components/Arrows/ArrowsLinks';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`
const Presentation = styled.div`
    position: relative;
`

const Nombre = styled.h1`
    color: #f0c38e;
    font-size: 40px;
`

const Profesion = styled.h2`
    color: #f1aa9b;
    font-size: 25px;
    height: 60px;

`
const SaberMas = styled.h3`
    color: white;

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

const Presentacion = () => {
    const values = ["Desarrollador Front End",];
    const { result, dencrypt } = useDencrypt();

    useEffect(() => {
        let i = 0;
        const action = setInterval(() => {
          dencrypt(values[i]);
          i = i === values.length - 1 ? 0 : i + 1;
        }, 1000);
        return () => clearInterval(action);
    }, []);

    return ( 

        <Bounce bottom>


        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        >

        <Container>
            {/* <Fade>
                <Video />
            </Fade> */}
            <Presentation>
                    <Nombre>Federico Iván Leiva</Nombre>
                <Profesion>{result}</Profesion>
                <div>
                    <SaberMas>Saber más</SaberMas>
                    <Link to="/about"><KeyboardArrowDownIcon className="arrow" style={{ fontSize: 60 }}/></Link>
                </div>
            </Presentation>
            {/* <ArrowsLinks /> */}
        </Container>
        </motion.div>
        </Bounce>
    );
}
 
export default Presentacion;