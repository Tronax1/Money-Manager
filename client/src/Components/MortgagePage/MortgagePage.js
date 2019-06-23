import React, { Component } from 'react'
import MortgageForm from '../Mortgage Form/MortgageForm'
import Fade from '../Animations/Smooth Transitions/Fade'


export default class MortgagePage extends Component {

    onSubmit = (fields) => {
        console.log("Mortgage got: ", fields);
        var homePrice = parseFloat(fields.HomePrice);
        var downPayment = parseFloat(fields.DownPayment);
        var interest = parseFloat(fields.InterestRate);
        var loanLength = parseFloat(fields.LoanLength);
        var principal = homePrice - downPayment;
        var r = interest/100/12;
        var n = loanLength*12;
        var mortgage = (principal * r*(1+r)**n/((1+r)**n-1));
        console.log(mortgage);
    }

    render(){
        return(
            <div>
                <div>
                    <MortgageForm onSubmit={fields => this.onSubmit(fields)}/>
                </div>
            </div>
        )
    }
}