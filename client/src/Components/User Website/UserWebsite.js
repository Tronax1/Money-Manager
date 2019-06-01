import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Login from "../Login page/LoginPage"
import RegisterPage from "../Register Page/RegisterPage"
import UserPage from "../UserProfile/UserPage"

export default class UserWebsite extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/Login" component={Login} exact />
                    <Route path="/Register" component={RegisterPage} />
                    <Route path="/User" component={UserPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}
