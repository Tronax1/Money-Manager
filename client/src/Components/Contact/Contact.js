import React, { Component } from 'react'

import Fade from "../Animations/Smooth Transitions/Fade"

import "./Contact.css"

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Fade/>
                <div>
                    <p><br/><br/><br/>This is the contact page</p>
                </div>
            </div>
        )
    }
}
