import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'

import LoginPage from "../Login page/LoginPage"

import fire from "../../Config/Fire"

export default class Auth extends Component {
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
            <Route render={() => (
                this.state.user ? (
                    <Redirect to="/UserPage" />
                ) : (
                        <LoginPage />
                    )
            )} />
        )
    }
}
