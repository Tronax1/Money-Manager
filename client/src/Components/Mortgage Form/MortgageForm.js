import React, { Component } from 'react'

import '../Mortgage Form/MortgageForm.css'


export default class MortgageForm extends Component {

    state={
        HomePrice: "",
        DownPayment: "",
        InterestRate: "",
        LoanLength: ""
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
                    <label>
                        <NumberFormat 
                            prefix={'$'}
                            className="mText-box"
                            placeholder="Home Price"
                            thousandSeparator={true}
                            value={this.state.HomePrice}
                            onValueChange={(values) =>{
                                const {formattedValue, value} = values;
                                this.setState({HomePrice: value})
                            }}
                        />
                    </label>
                    <label>
                        <NumberFormat 
                            prefix={'$'}
                            className="mText-box"
                            placeholder="Down Payment"
                            thousandSeparator={true}
                            value={this.state.DownPayment}
                            onValueChange={(values) =>{
                                const {formattedValue, value} = values;
                                this.setState({DownPayment: value})
                            }}
                        />
                    </label>
                    <label>
                        <NumberFormat 
                            suffix={'%'}
                            className="mText-box" 
                            placeholder="Interest rate"
                            value={this.state.InterestRate}
                            onValueChange={(values) =>{
                                const {formattedValue, value} = values;
                                this.setState({InterestRate: value})
                            }}
                        />
                    </label>
                    <label>
                        <NumberFormat 
                            className="mText-box" 
                            placeholder="Loan Timelength in Years"
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