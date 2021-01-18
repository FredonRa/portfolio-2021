import './App.css';
import Header from './components/Header/Header';
import {
  Route,
} from "react-router-dom";

import Presentacion from './pages/Presentacion';
import { spring, AnimatedSwitch } from 'react-router-transition';
import Technologies from './pages/Technologies'
import Bienvenido from './components/SobreMi/Bienvenido';
import Education from './components/SobreMi/Education';
import Course from './components/SobreMi/Course';
import Proyectos from './pages/Proyectos';
import Contactame from './pages/Contactame';
import Trabajos from './pages/Trabajos';

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

function App() {
  return (
    <div className="App">
      <div id='stars' />
      <div id='stars2' />
      <div id='stars3' />
            <Header />
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
            >
              <Route exact path="/portfolio/" component={Presentacion}/>
              <Route exact path="/portfolio/technologies/" component={Technologies}/>
              <Route exact path="/portfolio/about/" component={Bienvenido} />
              <Route exact path="/portfolio/about/education/" component={Education} />
              <Route exact path="/portfolio/about/course/" component={Course} />
              <Route exact path="/portfolio/projects/" component={Trabajos}/>
              <Route exact path="/portfolio/contact/" component={Contactame}/>
            </AnimatedSwitch>
    </div>
  );
}

export default App;
