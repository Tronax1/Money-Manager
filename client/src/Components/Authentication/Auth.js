import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'

import LoginPage from "../Login page/LoginPage"

import fire from "../../Config/Fire"

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
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
        console.log(this.state.user);
        return(
            <div>
            {this.state.user ? ( <Redirect to="/UserPage" /> ) : ( <LoginPage /> )} 
            </div>
        )
    }
}