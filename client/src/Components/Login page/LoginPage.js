import React, { Component } from 'react'

import Fade from "../Animations/Smooth Transitions/Fade"
import LoginForm from "./Login form/LoginForm"
import fire from "../../Config/Fire"
import "./LoginPage.css"

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
            else {
                this.setState({ user: null });
            }
        })
    }
    render() {
            return (
                <div>
                    <Fade />
                    <div>
                        <LoginForm />
                    </div>
                </div>
            )
        }
}
