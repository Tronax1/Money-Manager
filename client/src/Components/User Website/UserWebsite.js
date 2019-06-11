import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Auth from "../Authentication/Auth"
import UserPage from "../UserProfile/UserPage"

export default class UserWebsite extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/Login" component={Auth} />
                    <Route path="/UserPage" component={UserPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}
