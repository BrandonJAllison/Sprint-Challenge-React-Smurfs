import React from 'react'
import {NavLink} from 'react-router-dom'


const header = {
    background: 'silver',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#00A4D6',
    zIndex: '2',
    boxShadow: '0px 6px 10px gray'
    
}
const link ={
    color: '#00A4D6',
    textDecoration: 'none'
    
}


const Header = () => {

return (

    <div style={header}>
        <NavLink style={link}
            to = {'/'}
            activeClassName="active-link">
            <span style={link}>Home</span>
        </NavLink>
        <NavLink style={link}
            to ='/SmurfForm'
            activeClassName="active-link">
            <span style={link}>Add Smurf</span>
        </NavLink>
        <NavLink style={link}
            to ='/UpdateForm'
            activeClassName="active-link">
            <span style={link}>Update Smurf</span>
        </NavLink>

        
    </div>
)


}




export default Header