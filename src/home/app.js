import React, { Component } from 'react';
import HomeLayout from './../menu/home-layout.js';
import Logo from './../menu/logo.js';
import './app.css';

class App extends Component {
  render() {
    return (
      <HomeLayout>
        <Logo />
      </HomeLayout>


    );
  }
}

export default App;
