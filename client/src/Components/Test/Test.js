import React, { Component } from 'react'

import ExpenseForm from '../Expense form/ExpenseForm'
import Fade from '../Animations/Smooth Transitions/Fade'

import '../Expense form/ExpenseForm.css'

export default class TestPage extends Component {

    onSubmit = (fields) => {
        console.log("Test got: ", fields);
    }

    render(){
        return(
            <div>
                <p><br /><br /><br />This is the Test page</p>
                <Fade/>
                <div>
                    <ExpenseForm onSubmit={fields => this.onSubmit(fields)}/>
                </div>
            </div>
        )
    }
}