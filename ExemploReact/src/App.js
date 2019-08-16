import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      wasm: {}
    };
  }
  
  componentDidMount() {
    this.loadWasm();
  }
  
  loadWasm = async () => {
    try {
      const wasm = await import('external');
      this.setState({wasm});
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };


  render() {
    
    const { wasm = {} } = this.state;

    console.log(wasm.hello('hello'))
    
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