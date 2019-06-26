import React, { Component } from 'react'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'

import RegisterForm from "./Register Form/RegisterForm"
import Fade from "../Animations/Smooth Transitions/Fade"
import "./RegisterPage.css"

class RegisterPage extends Component {
    render() {
        return (
            <div>
                <Fade/>
                {this.props.auth ? (<Redirect to="/Login" />) : (<RegisterForm />)}
            </div>
        )
    }
}
function mapStatetoProps({auth}){
    return {auth};
}
export default connect(mapStatetoProps)(RegisterPage)
