import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import "./DropDown.css"

export default class DropDown extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div>
                <div className="Hamburger-elements">
                    <NavLink id = "Nav-Links-hamburger" to="/About" onClick={this.props.onClose}>About</NavLink>
                    <NavLink id = "Nav-Links-hamburger" to="/Contact" onClick={this.props.onClose}>Contact</NavLink>
                    <NavLink id = "Nav-Links-hamburger" to="/Login" onClick={this.props.onClose}>Login</NavLink>
                    <NavLink id="Nav-Links-hamburger" to="/Register" onClick={this.props.onClose}>Register</NavLink>
                </div>
            </div>
        )
    }
}
