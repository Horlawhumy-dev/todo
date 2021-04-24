import React, { Component } from 'react';
import Hello from './components/Hello/Hello'
import classes from './App.css';

import HandleForm from './components/HandleForm/HandleForm'
import Container from './components/Container/container'
import { render } from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* This method handles submission of the form*/

  handleSubmit(e){
    e.preventDefault();
    const words = e.target.value;
    this.setState({
      inputVal: words
    })
  }
  render(){
    return (
      <div className={classes.App}>
        <header className="App-header">
          <Hello  name="Arafat" />
          <HandleForm onSubmit={this.handleSubmit} placeholder="Type here ..." value={this.state.inputVal}/>
          <Container inputVal={this.state.inputVal} />
        </header>
      </div>
    );
  }
}
 
  


export default App;
