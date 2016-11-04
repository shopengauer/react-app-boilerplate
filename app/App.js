import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {

  constructor(){
    super();
    this.state = {name: "Hello"}
  }

  tick() {
    this.setState({
      name: "Hello World"
    });
  }


  render(){
     return (

        <div>
          <button onClick = {()=>{this.tick()}}>Revert</button>
          <h1>{this.state.name}</h1>
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
