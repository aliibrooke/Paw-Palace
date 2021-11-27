import React, { Component } from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar light color="warning">
              <div className="container">
                  <NavbarBrand href="/">Paw Palace</NavbarBrand>
              </div>
              </Navbar>
              <Directory />
          </div>
      );
  }
}

export default App;
