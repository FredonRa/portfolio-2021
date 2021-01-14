import React from 'react';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Bienvenido from '../components/SobreMi/Bienvenido';
import Education from '../components/SobreMi/Education';
import Course from '../components/SobreMi/Course';

import { spring, AnimatedSwitch } from 'react-router-transition';

function bounce(val) {
    return spring(val, {
      stiffness: 400,
      damping: 40,
    });
}

const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 2,
      scale: 1.4,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(2),
      scale: bounce(2),
    },
};

const ConfirmarUrl = () => {
  while(window.location.href === "http://localhost:3000/about/course"){
    return(
      <h1>HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
    )
  }
}

const SobreMi = () => {
    return ( 
        <>
            <Router>
                <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                >
                  <Route exact path="/about/" component={Bienvenido} />
                  <Route exact path="/about/education" component={Education} />
                  <Route exact path="/about/course" component={Course} />
                </AnimatedSwitch>
                {ConfirmarUrl}
            </Router>
        </>
    );
}
 
export default SobreMi;