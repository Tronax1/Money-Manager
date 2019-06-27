import React, { Component } from 'react'
import Fade from "../Animations/Smooth Transitions/Fade"

import "./Contact.css"

export default class Contact extends Component {
        constructor(props){
            super(props)
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
                <div className = "back">
                <h2 className = "contact-header">
                <br/>Let's Connect! 
                </h2>
                <h4 className = "contact-headerbelow"> We'd love to help you start saving money.</h4>
                </div>

                <h2 className = "contactquestion">
                    Do you need help? Have a tech question? Want to give feedback? <br/>
                    Our support team is here to help! Contact us today!  
                </h2>

                   
                    <div>
            <form onSubmit={this.handleSubmit} className="alignit">
                <label>
                 <input type="text" id = "name"className="format" name = "name" 
                 placeholder = "Full Name" onChange={this.handleChange}/>
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
                  placeholder= "Message..." onChange={this.handleChange}/>
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
