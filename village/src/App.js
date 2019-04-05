import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios
    .get(`http://localhost:3333/smurfs`)
    .then (response => {
      this.setState(() => ({ smurfs: response.data }));
    })
    .catch(error => {
      console.error('Your smurfed up', error);
    })
  }

  addSmurf = (smurf) => {
    axios
      .post(`http://localhost:3333/smurfs`, smurf )
      .then( response => {
        console.log(response)
        this.setState({ smurfs: response.data })
        window.location.reload();
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
      <Header/>
      <Route exact path="/" render={ (props) => {
          return(<Smurfs {...props} smurfs={this.state.smurfs} />)
        }} />
        <Route path="/SmurfForm" render={ (props) => {
          return(<SmurfForm {...props} addSmurf={this.addSmurf} />)
        }} />
      </div>
    );
  }
}

export default App;
