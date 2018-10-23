import React, { Component } from 'react';
import axios from 'axios';
import logo from '../assets/auth_logo.png';
import './login.css'


class Login extends Component {
    constructor() {
        super();

        this.state = {
            username_input: '',
            password_input: ''
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.loginUser = this.loginUser.bind(this);

    }


    handleUsername(e) {
        e.preventDefault();
        this.setState({ username_input: e.target.value })
    }

    handlePassword(e) {
        e.preventDefault();
        this.setState({ password_input: e.target.value })
    }

    registerUser() {
        axios.post('/api/registerUser', { username: this.state.username_input, password: this.state.password_input })
            .then(response => {
                this.props.history.push('/Dashboard')
            })
        console.log('Successfully Registered!')

    }

    loginUser() {
        axios.post('/api/getUser', { username: this.state.username_input, password: this.state.password_input })
        .then(response => {
            this.props.history.push('/Dashboard')
        })
        console.log('Login Successful')
    }

    render() {
        return (
            <div className="Login-div">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <div>
                    <img src={logo} alt="auth_logo" />
                </div>
                <div className="username-div">
                    <h2>Username</h2>
                </div>
                <div>
                    <input className="username-input" value={this.username_input} onChange={(e) => this.handleUsername(e)} />
                </div>
                <div className="password-div">
                    <h2>Password</h2>
                </div>
                <div>
                    <input className="password-input" value={this.password_input} onChange={(e) => this.handlePassword(e)} />
                </div>
                <div className="div-around-buttons">
                    <div className="login-button-div">
                        <button className="login-button" onClick={() => this.loginUser(this.state.username_input, this.state.password_input)}>Login</button>
                    </div>
                    <div>
                        <button className="register-button" onClick={() => this.registerUser(this.state.username_input, this.state.password_input)}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login