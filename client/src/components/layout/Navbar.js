import React, { Component } from "react";
import {Link, BrowserRouter, NavLink, Switch, Route} from "react-router-dom";
import '../../App.css';
import logo from '../images/logo.png';
import profilepic from '../images/profilepic.png';

class Navbar extends Component {
  render() {
    return (
        <div>
            
        <Link to='/dashboard'><img src={logo} width="22%" align="left"></img></Link>
        
        <div class = "container">
        <nav className = "navbar navbar-default navbar-fixed-top">
            <div class = "nav-wrapper white">
            
                <div class = "row" style = {{marginLeft: 7 + 'em'}}>
                    <div class = "column">
          <h4><Link style = {{color: "black", fontSize: 25}} to="/Connect">Connect</Link></h4>
          </div>
          <div class = "column">
          <h4><Link style = {{color: "black", fontSize: 25}} to="/Explore">Explore</Link></h4>
          </div>
          <div class = "column">
          <h4><Link style = {{color: "black", fontSize: 25}} to="/dashboard">My Profile</Link></h4>
          </div>
          </div>
        </div>
        
        </nav>
        </div>
    </div>
    );
  }
}
export default Navbar;