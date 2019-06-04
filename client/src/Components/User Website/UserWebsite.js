import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import LoginPage from "../Login page/LoginPage"
import UserPage from "../UserProfile/UserPage"
import fire from "../../Config/Fire"

export default class UserWebsite extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/userLogin" component={LoginPage}/>
                    <Route path="/userRegister" component={UserPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
