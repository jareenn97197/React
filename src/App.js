import React from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome'
import Menu from './components/MenuComponent'
function App() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>

      <Menu/>
      
    </div>
  );
}

export default App;
