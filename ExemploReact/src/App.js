import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const wasm = import("./wasm/process_message.wasm");

//let Module = require('./wasm/process_message.js'); // Your Emscripten JS output file
//let pingIt = Module().cwrap('pingIt'); // Call Module as a function



class App extends Component {
  
  render() {

    /*
    const instance = wasmModule({
        onRuntimeInitialized() {
            //instance.sayHelloLibvpx();

            console.log(instance.processMessage(
                "hello world",
                {
                    reverse: false,
                    exclaim: true,
                    repeat: 3
                }
            ));

        }
    });

    */
    
    


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
        </header>
      </div>
    );
  }
}

export default App;