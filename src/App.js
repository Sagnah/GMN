import logo from './logo.svg';
import './App.css';
import React from 'react';
const numR = Math.floor(Math.random() * 100 + 1);
let intentos=0;

console.log(numR);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
  if(this.state.value==numR){
    alert("pilin");
    alert("fallaste esta cantidad de veces: "+(intentos));
  }
  if(this.state.value<numR){
    alert("te quedaste a: "+(numR-this.state.value));
    intentos++;
  }
  if(this.state.value>numR){
    alert("te quedaste a: "+ (this.state.value-numR));
    intentos++;
  }
  
  event.preventDefault();
}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <center>
        <h1>Adivina el numero: </h1>
        <br/>
        <input type="number" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Pilin"/>
        </center>
      </form>
    );
  }
}

export default App;
