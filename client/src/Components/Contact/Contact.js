import React, { Component } from 'react'
import Fade from "../Animations/Smooth Transitions/Fade"

import "./Contact.css"

export default class Contact extends Component {
        constructor(){
            super()
            this.state = {
                name: '',
                email: '',
                subject: '',
                message: ''

            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }
            handleChange(e) {
                this.setState({
                    [e.target.name]: e.target.value})
            }
            handleSubmit(e){
                e.preventDefault();
                const {name,email,subject,message} = this.state
            }


    render() {
        return (
            <div>
                <Fade/>
                    <p><br/><br/><br/>This is the contact page</p>
                    <div>
            <form onSubmit={this.handleSubmit} className="align">
                <label>
                 <input type="text" id = "name"className="format" name = "name" 
                 placeholder = "Name" onChange={this.handleChange}/>
                </label>
                <label>
                 <input type="text" id = "email" className="format" name = "email"
                 placeholder = "Email" onChange={this.handleChange}/>
                </label>
                <label>
                  <input type="text" id = "subject" className="format" name = "subject"
                  placeholder = "Subject" onChange={this.handleChange}/>
                </label>
                <label>
                  <input type="textarea" id = "message" className="format message" name = "message" 
                  placeholder= "Message" onChange={this.handleChange}/>
                </label>
                <label>
                  <button id ="submit" className="submitForm">Submit</button>
                </label>
            </form>
      </div>




                
            </div>
        )
    }
}
