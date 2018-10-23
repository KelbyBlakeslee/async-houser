import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './nav.css';
import Logo from '../assets/header_logo.png';


class Nav extends Component {
    constructor() {
        super();

        this.state = {

        }

        this.logoutUser = this.logoutUser.bind(this);
    }


    logoutUser() {
        axios.post('/api/logoutUser')
        console.log('You have been logged out')
    }

    render() {
        return (
            <div className="nav-div">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <img className="logo" src={Logo} alt="header_logo.png" />
                <h1 className="title">Houser Dashboard</h1>
                <Link to="/"><button className="logout-button" onClick={() => this.logoutUser()}>Logout</button></Link>
            </div>
        )
    }


}

export default Nav;