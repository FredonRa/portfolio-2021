import './App.css';
import Header from './components/Header/Header';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

import Presentacion from './pages/Presentacion';
import SobreMi from './pages/SobreMi'
import { spring, AnimatedSwitch } from 'react-router-transition';
import Technologies from './pages/Technologies'
import Bienvenido from './components/SobreMi/Bienvenido';
import Education from './components/SobreMi/Education';
import Course from './components/SobreMi/Course';
import Proyectos from './pages/Proyectos';
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
              <Route exact path="/" component={Presentacion}/>
              {/* <Route exact path="/about/" component={SobreMi}/> */}
              <Route exact path="/technologies/" component={Technologies}/>
              <Route exact path="/about/" component={Bienvenido} />
              <Route exact path="/about/education" component={Education} />
              <Route exact path="/about/course" component={Course} />
              <Route exact path="/projects" component={Proyectos}/>

         </AnimatedSwitch>
    </div>
  );
}

export default App;
