import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "../Home Page/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import NavBar from "../Nav Bar/NavBar"

export default class MainWebsite extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        )
    }
}
