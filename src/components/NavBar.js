import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkgreen'
          }}
        >Home</NavLink>
        <NavLink
          to="/actors"
          exact
          style={link}
          activeStyle={{
            background: 'darkgray'
          }}
        >Actors</NavLink>
        <NavLink
          to="/directors"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Directors</NavLink>
        <NavLink
          to="/movies"
          exact
          style={link}
          activeStyle={{
            background: 'darkred'
          }}
        >Movies</NavLink>
    </div>
  );
};

export default NavBar;
