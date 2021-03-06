import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




//import Example from './wasm/example.js'
//import Add from './wasm/add.js'
import ProcessMessage from './wasm/ProcessMessage.js'
//import ProcessMessage from './wasm/app_wasm.js'

import webp from './wasm/webp.js'

import {WW_Wasm} from './util/functions'




class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      wasm: {}
    };
  }
  
  componentDidMount() {

    
    /*
    
    Example().then(function(mymod) {
      const int_sqrt = mymod.cwrap('int_sqrt', 'number', ['number']);
      console.log(int_sqrt(64));
    });
    
    */
    
    /* 
    Add().then(function(mymod) {
      console.log(mymod.add(1, 2.3));
      console.log(mymod.exclaim("hello world"));
    });
    */

    webp().then(function(mymod) {
      console.log(mymod.version());
    });

    ProcessMessage().then(function(mymod) {
    
      console.log(mymod.processMessage(
        "hello world",
        {
            reverse: false,
            exclaim: true,
            repeat: 3
        }
      ));


    });

    
    WW_Wasm().then((result) => {
      console.log("wasm worker")
      console.log(result)
    })


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