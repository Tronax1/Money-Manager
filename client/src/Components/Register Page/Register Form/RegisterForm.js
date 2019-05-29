import React, { Component } from 'react'

import "./RegisterForm.css"

export default class RegisterForm extends Component {
    render() {
        return (
            <div>
                <form className="Alignment">
                    <label>
                        <input type="text" placeholder="User" />
                    </label>
                    <label>
                        <input type="text" placeholder="Password" />
                    </label>
                    <label>
                        <input type="text" placeholder="Email" />
                    </label>
                    <label>
                        <button>Register</button>
                    </label>
                </form>
            </div>
        )
    }
}
