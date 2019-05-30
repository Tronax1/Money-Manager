import React, { Component } from 'react'

import RegisterForm from "./Register Form/RegisterForm"
import Fade from "../Animations/Smooth Transitions/Fade"
import "./RegisterPage.css"

export default class RegisterPage extends Component {
    render() {
        return (
            <div>
                <Fade/>
                <RegisterForm/>
            </div>
        )
    }
}
