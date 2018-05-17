import React, { Component } from 'react';
import FaHome from 'react-icons/lib/fa/home';
import FaUser from 'react-icons/lib/fa/user';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaStar from 'react-icons/lib/fa/star';
import FaFolderOpen from 'react-icons/lib/fa/folder-open';

import IconText from '../../components/IconText';
import logo from '../../images/logo.svg';
import './App.css';
import SplashScreen from './SplashScreen';
import Navbar from '../../components/Navbar';
import Contact from '../contact/Contact';

class App extends Component {
  constructor(){
    super();
    this.state={
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar icon={<img src={logo} alt="logo" />}>
          <a href="asdas"><IconText text="Home" icon={<FaHome size={27} />} /></a>
          <a href="asdas"><IconText text="About" icon={<FaUser size={27} />} /></a>
          <a href="asdas"><IconText text="Skills" icon={<FaStar size={27} />} /></a>
          <a href="asdas"><IconText text="Work" icon={<FaFolderOpen size={27} />} /></a>
          <a href="asdas"><IconText text="Contact" icon={<FaPencil size={27} />} /></a>
        </Navbar>
        <div className="App-container">
          <SplashScreen />
          <Contact />
        </div>
      </div>
    );
  }
}
export default App;
