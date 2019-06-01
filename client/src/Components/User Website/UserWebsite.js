import React, { Component } from 'react'

import LoginPage from "../Login page/LoginPage"
import UserPage from "../UserProfile/UserPage"
import fire from "../../Config/Fire"

export default class UserWebsite extends Component {
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
            {this.state.user ? (<UserPage/>) : (<LoginPage/>)}
           </div>
        )
    }
}
