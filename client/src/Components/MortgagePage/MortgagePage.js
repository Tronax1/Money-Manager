import React, { Component } from 'react'
import MortgageForm from '../Mortgage Form/MortgageForm'
import Fade from '../Animations/Smooth Transitions/Fade'

export default class MortgagePage extends Component {

    onSubmit = (fields) => {
        console.log("Mortgage got: ", fields);
    }

    render(){
        return(
            <div>
                <p><br /><br /><br />This is the Mortgage page</p>
                <Fade/>
                <div>
                    <MortgageForm onSubmit={fields => this.onSubmit(fields)}/>
                </div>
            </div>
        )
    }
}