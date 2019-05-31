import React, { Component } from 'react'

import "./LoginForm.css"
import fire from '../../../Config/Fire';

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <div>
                <form className="Alignment">
                    <label>
                        <input type="email" className="Text-box" placeholder="User" name="email"
                        value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <input type="text" className="Text-box" placeholder="Password" name="password" 
                        value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <button className="Login-Register-Button">LOGIN</button>
                    </label>
                </form>
            </div>
        )
    }
}
