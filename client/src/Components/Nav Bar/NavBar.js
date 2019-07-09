import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import DropDown from "./Drop Down/DropDown"
import AfterLoginRouter from "../AfterLoginRouter/AfterLoginRouter"
import "./NavBar.css"

 class NavBar extends Component {
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
            <div>
            {!this.props.auth ? (<div className = "Nav">
                <div className = "Nav-elements">
                    <NavLink id = "Home-link" to="/">Home</NavLink>
                    <NavLink id = "Nav-Links" to="/About">About</NavLink>
                    <NavLink id = "Nav-Links" to="/Contact">Contact</NavLink>
                    <NavLink id = "Nav-Links" to="/Login">Login</NavLink>
                    <NavLink id="Nav-Links" to="/Register">Register</NavLink>
                    <button id= "Hamburger" onClick={this.showMenu}> 
                        <div id="Line"/>
                        <div id="Line"/>
                        <div id="Line"/>
                    </button>
                </div>
                
                <DropDown onClose={this.showMenu} show={this.state.show}/>
            </div>) :
            <div/>
            //(<AfterLoginRouter/>)
            }
            </div>
        )
    }
}
function mapStatetoProps({auth}){
    return {auth};
}
export default connect(mapStatetoProps)(NavBar)