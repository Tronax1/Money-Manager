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
                    <NavLink id = "Home-link" to="/">Home</NavLink>
                    <NavLink id = "Nav-Links" to="/About">About</NavLink>
                    <NavLink id = "Nav-Links" to="/Contact">Contact</NavLink>
                    <NavLink id = "Nav-Links" to="/Login" target="_blank">Login</NavLink>
                    <NavLink id="Nav-Links" to="/Register">Register</NavLink>
                    <button id= "Hamburger" onClick={this.showMenu}> 
                        <div id="Line"/>
                        <div id="Line"/>
                        <div id="Line"/>
                    </button>
                </div>
                
                <DropDown onClose={this.showMenu} show={this.state.show}/>
            </div>
        )
    }
}
