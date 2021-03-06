import React, { Component } from 'react';
import Smurf from './Smurf';
const heading ={
  textAlign: 'center'
}
class Smurfs extends Component {

 

  render() {
    return (
      <div className="Smurfs">
        <h1 style={heading}>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
