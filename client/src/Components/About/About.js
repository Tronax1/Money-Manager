import React, { Component } from 'react'

import Fade from "../Animations/Smooth Transitions/Fade"

import "./About.css"

export default class About extends Component {
    render() {
        return (
            <div>
                <Fade/>
                <div>
                    <p><br/><br/><br/>This is the About page</p>
                </div>
            </div>
        )
    }
}
