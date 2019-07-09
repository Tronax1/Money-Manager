import React, { Component } from 'react'

import '../Mortgage Form/MortgageForm.css'


export default class MortgageForm extends Component {

    state={
        HomePrice: "200000",
        DownPayment: "20000",
        InterestRate: "4.125",
        LoanLength: "30"
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state); 
    }

    render() {
        var NumberFormat = require('react-number-format');
        return (
            <div className="mAlignment">
                <form> 
                    <mortgage-form-p> Home Price </mortgage-form-p>
                    <label>
                        <NumberFormat 
                            prefix={'$'}
                            className="mText-box"
                            placeholder="$0"
                            thousandSeparator={true}
                            value={this.state.HomePrice}
                            onValueChange={(values) =>{
                                const {formattedValue, value} = values;
                                this.setState({HomePrice: value})
                            }}
                        />
                    </label>
                    <mortgage-form-p> Down Payment </mortgage-form-p>
                    <label>
                        <NumberFormat 
                            prefix={'$'}
                            className="mText-box"
                            placeholder="$0"
                            thousandSeparator={true}
                            value={this.state.DownPayment}
                            onValueChange={(values) =>{
                                const {formattedValue, value} = values;
                                this.setState({DownPayment: value})
                            }}
                        />
                    </label>
                    <mortgage-form-p> Interest Rate </mortgage-form-p>
                    <label>
                        <NumberFormat 
                            suffix={'%'}
                            className="mText-box" 
                            placeholder="0%"
                            value={this.state.InterestRate}
                            onValueChange={(values) =>{
                                const {formattedValue, value} = values;
                                this.setState({InterestRate: value})
                            }}
                        />
                    </label>
                    <mortgage-form-p> Loan Term </mortgage-form-p>
                    <label>
                        <NumberFormat 
                            className="mText-box" 
                            placeholder="0 years"
                            value={this.state.LoanLength}
                            onValueChange={(values) =>{
                                const {formattedValue, value} = values;
                                this.setState({LoanLength: value})
                            }}
                        />
                    </label>
                    <label className="button-wrapper">
                        <button className="Mortgage-Button" onClick={e => this.onSubmit(e)}>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}