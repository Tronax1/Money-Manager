import React, { Component } from 'react'

import Fade from "../Animations/Smooth Transitions/Fade"
import "./Home.css"
export default class Home extends Component {
    render() {
        return (
            <div>
                <Fade />
                <div>  
                    <p><br /><br /><br />This is the Home page</p>
                </div>
            </div>
        )
    }
}
