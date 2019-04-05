import React, { Component } from 'react';


const form ={
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center'
}

const input={
  border: 'none',
  borderBottom: '2px solid #00A4D6',
  width: '300px',
  margin: '20px'
}

const button ={
  width: '200px',
  padding: '10px',
  color: '#00A4D6',
  borderRadius: '15px',
  border: '1px solid #00A4D6',
  background: 'white',
  margin: '20px 0',
  boxShadow: '0px 8px 15px black'
}
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
      this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div >
        <form style={form} onSubmit={this.addSmurf}>
          <input
            style={input}
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            required='required'
            name="name"
          />
          <input
            style={input}
            onChange={this.handleInputChange}
            type='number'
            placeholder="age"
            value={this.state.age}
            required='required'
            name="age"
          />
          <input
            style={input}
            onChange={this.handleInputChange}
            type='number'
            required='required'
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button style={button} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
