import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

import "./NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <div className = "Nav">
                <div className = "Nav-elements">
                    <NavLink id = "Nav-Links" to="/">Home</NavLink>
                    <NavLink id = "Nav-Links" to="/About">About</NavLink>
                    <NavLink id = "Nav-Links" to="/Contact">Contact</NavLink>
                    <NavLink id = "Nav-Links" to="/Login">Login</NavLink>
                </div>
            </div>
        )
    }
}
