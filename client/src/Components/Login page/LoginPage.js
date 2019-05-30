import React, { Component } from 'react'
import {Route} from "react-router-dom"

import Fade from "../Animations/Smooth Transitions/Fade"
import LoginForm from "./Login form/LoginForm"
import UserPage from "../UserProfile/UserPage"

//import "./UserPage.css"
import "./LoginPage.css"

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Fade/>
                <div>
                    <LoginForm/>
                    <Route path="/User" component={UserPage}/>
                </div>
            </div>
        )
    }
}
