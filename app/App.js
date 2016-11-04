import React, { Component } from 'react';
import {render} from 'react-dom';
import Panel from "../components/Panel.jsx";

class App extends Component {

  constructor(){
    super();
    this.state = {parentState: "parentstate"}
  }

  tick() {
    this.setState({
      parentState: "New parent state"
    });
  }


  render(){
     return (

        <div>
          <button onClick = {()=>{this.tick()}}>Revert</button>
          <h1>{this.state.parentState}</h1>
          <Panel>
            {this.state.parentState}
          </Panel>

        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
