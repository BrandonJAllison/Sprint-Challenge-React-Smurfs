import React from 'react';


const smurf ={
  display: 'flex',
  justifyContent:'center',
  alignItems:'center'
}

const items ={
margin: '15px'
}
const Smurf = props => {
  return (
    <div style={smurf}>
      <h3 style={items}>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p style={items}>{props.age} smurf years old</p>
      <span className="far fa-trash-alt delete-btn" onClick={() => props.deleteSmurf(props.id)}></span>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

