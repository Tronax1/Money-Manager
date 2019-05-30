import React, { Component } from 'react'

import "./LoginForm.css"

export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <form className="Alignment">
                    <label>
                        <input type="text" className="Text-box" placeholder="User"/>
                    </label>
                    <label>
                        <input type="text" className="Text-box" placeholder="Password" />
                    </label>
                    <label>
                        <button className="Login-Register-Button">LOGIN</button>
                    </label>
                </form>
            </div>
        )
    }
}
