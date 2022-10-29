import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import Space from './components/Space';
import About from './components/About';
import Satellite from './components/Satellite';
import ButtonTop from './components/ButtonTop';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <ButtonTop />
      <NavBar />
      <SideNav />
      <Satellite />
      <About />
      <Space />
    </div>
  );
}

export default App;
