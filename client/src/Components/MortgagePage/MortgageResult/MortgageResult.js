import React, { Component } from 'react'

import "./MortgageResult.css"

export default class MortgagePage extends Component{

    render(){
        return(
            <div>
                <m-r-h2>Monthly payment</m-r-h2>
                <br /><br />
                <m-r-h1>${this.props.mortgage}</m-r-h1>
                <br /><br />
                <m-r-h2>{this.props.loanLength} year fixed loan term</m-r-h2>
            </div>
        )
    }
}