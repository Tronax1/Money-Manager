import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class DropDown extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div>
                <div>
                    <NavLink id = "Nav-Links" to="/">Home</NavLink>
                    <NavLink id = "Nav-Links" to="/About">About</NavLink>
                    <NavLink id = "Nav-Links" to="/Contact">Contact</NavLink>
                    <NavLink id = "Nav-Links" to="/Login">Login</NavLink>
                    <NavLink id="Nav-Links" to="/Register">Register</NavLink>
                </div>
            </div>
        )
    }
}
