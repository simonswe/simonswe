import { useEffect } from 'react';
import WebFont from 'webfontloader';

import NavBar from './components/NavBar';
//import SideNav from './components/SideNav';
import About from './components/About';
import Satellite from './components/Satellite';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ButtonTop from './components/ButtonTop';

import './App.scss';


const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Source Sans Pro']
      }
    });
   }, []);

  return (
    <div className="App">
      <ButtonTop />
      <NavBar />
      {//<SideNav />
      }
      <Satellite />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
