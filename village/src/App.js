import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import UpdateForm from './components/UpdateForm'
import Header from './components/Header'

const app={
  fontFamily: 'Sniglet, cursive',
  color: '#00A4D6',
  
}
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
        alert('Smurf Added')
        this.setState({ smurfs: response.data })
        
      })
      .catch(error => console.log('You Smurfed Up',error))
  }

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({smurfs:response.data})
      })
      .catch(err => console.log(err));
  }

  updateSmurf = (state, id) => {
    axios
    .put(`http://localhost:3333/smurfs/${id}`, state)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => {
        console.log('You Smurfed Up', err);
      });
  };

  render() {
    return (
      <div style={app}>
      <Header/>
      <Route exact path="/" render={ (props) => {
          return(<Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />)
        }} />
        <Route path="/SmurfForm" render={ (props) => {
          return(<SmurfForm {...props} addSmurf={this.addSmurf} smurfs={this.state.smurfs} />)
        }} />

          <Route path="/UpdateForm" render={ (props) => {
          return(<UpdateForm {...props} updateSmurf={this.addSmurf} smurfs={this.state.smurfs} />)
        }} />
         
      </div>
    );
  }
}

export default App;
