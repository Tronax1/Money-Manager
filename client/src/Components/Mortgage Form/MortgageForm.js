import React, { Component } from 'react'

import '../Mortgage Form/MortgageForm.css'


export default class MortgageForm extends Component {

    state={
        Principal: "",
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
        this.setState({
            Principal: "",
            InterestRate: "",
            LoanLength: ""
        })
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
                            displayType={'Text'}
                            placeholder="Principal"
                            thousandSeparator={true}
                            value={this.state.Principal}
                            onValueChange={(values) =>{
                                const {formattedValue, value} = values;
                                this.setState({Principal: value})
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