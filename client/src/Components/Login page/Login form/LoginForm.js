import React, { Component } from 'react'

import "./LoginForm.css"

export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <form className="Alignment">
                    <label>
                        <input type="text" placeholder="User"/>
                    </label>
                    <label>
                        <input type="text" placeholder="Password" />
                    </label>
                    <label>
                        <button>Login</button>
                    </label>
                </form>
            </div>
        )
    }
}
