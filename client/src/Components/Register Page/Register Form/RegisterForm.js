import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signUp} from "../../../actions"

import "./RegisterForm.css"

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            Name:'',
            email:'',
            password:'',
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.signUp(this.state.email, this.state.password);
    }
    render() {
        return (
            <div>
                <form className="Alignment" onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" className="Text-box" placeholder="Name" name="Name"
                        onChange={this.handleChange} />
                    </label>
                    <label>
                        <input type="email" className="Text-box" placeholder="Email" name="email"
                        onChange={this.handleChange} />
                    </label>
                    <label>
                        <input type="password" className="Text-box" placeholder="Password" name="password" 
                        onChange={this.handleChange}/>
                    </label>
                    <label>
                        <button className="Login-Register-Button">REGISTER</button>
                    </label>
                </form>
            </div>
        )
    }
}
export default connect(null, {signUp})(RegisterForm)
