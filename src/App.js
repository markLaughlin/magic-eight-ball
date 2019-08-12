import React, { Component } from 'react';
import './App.css';
import Interface from "./Interface"
import eightBall from './eightBall.png';

class App extends Component{

  render(){

    return (
      <div className="App">
        <h1>Welcome To The Magic Eight Ball App!</h1>
        <img src={eightBall} alt={"Magic Eight Ball"}/>
        <Interface/>
      </div>
    );
  }

  }

export default App;
