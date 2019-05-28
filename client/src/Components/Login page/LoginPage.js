import React, { Component } from 'react'
import Fade from "../Animations/Smooth Transitions/Fade"
import LoginForm from "./Login form/LoginForm"

import "./LoginPage.css"

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Fade/>
                <div>
                    <LoginForm/>
                </div>
            </div>
        )
    }
}
