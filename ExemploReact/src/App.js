import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Module from './wasm/fib.js'




class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      wasm: {}
    };
  }
  
  componentDidMount() {
    Module().then(function(mymod) {
      const int_sqrt = mymod.cwrap('fib', 'number', ['number']);
      console.log(int_sqrt(64));
    });
  }
  
  


  render() {
    
        
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div></div>
        </header>
      </div>
    );
  }
}

export default App;