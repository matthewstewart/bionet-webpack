import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bionetLogo from './assets/bionet_logo.png';
import labIcon from './assets/lab_icon.png';
import './style.scss';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar is-dark is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://biobricks.org/bionet/">
            <img 
              id="bionet-logo"
              src={ bionetLogo } 
              alt="Bionet"
            />
          </a>

          <Link className="navbar-item" to="/">
            <img 
              id="lab-icon"
              src={ labIcon } 
              alt="Lab Icon"
            />
            EndyLab
          </Link>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    );
  }

}

export default Navbar;