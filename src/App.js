import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SPIN IT</h1>
        </header>
        <p>
       <Button> Click to spin</Button>
       </p> 

       
      </div>
    );
  }
}

export default App;
