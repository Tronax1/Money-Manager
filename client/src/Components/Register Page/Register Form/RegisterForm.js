import React, { Component } from 'react'

import "./RegisterForm.css"

export default class RegisterForm extends Component {
    render() {
        return (
            <div>
                <form className="Alignment">
                    <label>
                        <input type="text" className="Text-box" placeholder="User" />
                    </label>
                    <label>
                        <input type="text" className="Text-box" placeholder="Password" />
                    </label>
                    <label>
                        <input type="text" className="Text-box" placeholder="Email" />
                    </label>
                    <label>
                        <button className="Login-Register-Button">REGISTER</button>
                    </label>
                </form>
            </div>
        )
    }
}
