import React, { Component } from 'react'
import Fade from "../Animations/Smooth Transitions/Fade"

import "./LoginPage.css"

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Fade/>
                <div>
                    <p><br/><br/><br/>This is the Login Page</p>
                </div>
            </div>
        )
    }
}
