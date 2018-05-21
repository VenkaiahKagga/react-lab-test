// IMPORT PACKAGE REFERENCES

import React from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENT

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light nav-color">
        <a className="navbar-brand" href="/">
            <i style={{color: 'white'}}>Lab </i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="search"/>
            </form>   
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/' activeClassName='menu selected' exact={true}>HOME</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/zipcodes' activeClassName='menu selected'>ZIP CODES</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/about' activeClassName='menu selected'>ABOUT</NavLink>
                    </div>
                </li>
            </ul>
        </div>
        <div className="nav navbar-brand pull-right">
            <span className="glyphicons glyphicons-bell">1</span>
           
        </div>
    </nav>
);