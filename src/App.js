import React, { Component } from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { SERVICES } from './shared/services';
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        services: SERVICES
      };
  }

  render() {
      return (
          <div className="App">
              <Navbar light color="warning">
              <div className="container">
                  <NavbarBrand href="/">Paw Palace</NavbarBrand>
              </div>
              </Navbar>
              <Directory services={this.state.services} />
          </div>
      );
  }
}

export default App;
