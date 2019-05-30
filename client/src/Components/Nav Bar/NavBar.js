import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

import DropDown from "./Drop Down/DropDown"

import "./NavBar.css"

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }
    showMenu = ()=>{
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        return (
            <div className = "Nav">
                <div className = "Nav-elements">
                    <NavLink id = "Nav-Links" to="/">Home</NavLink>
                    <NavLink id = "Nav-Links" to="/About">About</NavLink>
                    <NavLink id = "Nav-Links" to="/Contact">Contact</NavLink>
                    <NavLink id = "Nav-Links" to="/Login">Login</NavLink>
                    <NavLink id="Nav-Links" to="/Register">Register</NavLink>
                </div>
                <button onClick={this.showMenu}> S</button>
                <DropDown onClose={this.showMenu} show={this.state.show}/>
            </div>
        )
    }
}
