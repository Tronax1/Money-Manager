import React, { Component } from 'react'
import {connect} from "react-redux"
import {signIn} from "../../../actions"

import "./LoginForm.css"

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.signIn(this.state.email, this.state.password);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <div>
                <form className="Alignment" onSubmit={this.handleSubmit}>
                    <h1 className="Login-Register">Log In</h1>
                    <label>
                        <input type="email" className="Text-box" placeholder="User" name="email"
                         onChange={this.handleChange}/>
                    </label>
                    <label>
                        <input type="password" className="Text-box" placeholder="Password" name="password" 
                         onChange={this.handleChange}/>
                    </label>
                    <label>
                        <button className="Login-Register-Button" 
                        >LOGIN</button>
                    </label>
                </form>
            </div>
        )
    }
}
export default connect(null, {signIn})(LoginForm);