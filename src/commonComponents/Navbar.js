//Ismael Rodriguez, ismaro.394 at gmail dot com
//Navbar component
import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ol className="breadcrumb">
        	<a href="/"><b className="name">Ismael Rodríguez</b></a>
        	<div style={{float:'right'}}>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
        		&nbsp;/&nbsp;
        		<NavLink to="/resume" activeClassName="active">Resume</NavLink>
        		&nbsp;/&nbsp;
        		<NavLink to="/projects" activeClassName="active">Projects</NavLink>
        		&nbsp;/&nbsp;
        		<a href="http://blog.ismaelrh.com">Blog</a>
        		&nbsp;/&nbsp;
        		<NavLink to="/hackathons" activeClassName="active">Hackathons</NavLink>
        	</div>
  			
		</ol>
      </div>
    );
  }
}

export default Navbar;
