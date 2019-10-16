import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {


  render(){
    return (
      <header>
        <h1 className="site-title">Student Taco Shop<br />
          <small>super cheap tacos </small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/auth">Login</Link></li>
            <li><Link className="nav-link" to="/tacos">Tacos</Link></li>
            <li><Link className="nav-link" to="/users">Users</Link></li>
            <li><Link className="nav-link" to="/views">Orders</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;