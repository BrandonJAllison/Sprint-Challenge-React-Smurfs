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
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let obj = this.props.smurfs.filter(obj => obj.name === this.state.name)[0];
    let id;
    if(obj === undefined){
      id = 0;
    }
    else{
      id = obj.id;
    }
    
    this.props.updateSmurf(this.state, id);
    alert("Smurf Updated")
    this.setState({
      
        name: '',
        age: '',
        height: ''
      
    });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div >
        <p>Here you can update the information for your smurfs.</p>
        <form style={form} onSubmit={this.handleSubmit}>
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
          <button style={button} type="submit">Update Smurf</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
