import React, { Component } from 'react'

import Fade from "../Animations/Smooth Transitions/Fade"
import LoginForm from "./Login form/LoginForm"
import LoginBackground from "../Images/LoginBackground.jpg"
import "./LoginPage.css"

const imageStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1
}
export default class LoginPage extends Component {
    render() {
            return (
                <div>
                    <Fade />
                    <LoginForm />
                    <img src={LoginBackground} alt="" style={imageStyle}/>
                </div>
            )
        }
}
