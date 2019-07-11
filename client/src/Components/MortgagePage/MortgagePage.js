import React, { Component } from 'react'
import MortgageForm from '../Mortgage Form/MortgageForm'
import MortgageResult from './MortgageResult/MortgageResult'
import Fade from '../Animations/Smooth Transitions/Fade'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

import './MortgagePage.css'
import {connect} from 'react-redux';
import PremiumPage from '../Not Premium/PremiumPage'

let amortizationData = []
let monthlyAmortizationData = []

class MortgagePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            flag: false,
            mortgage: "0",
            loanLength: "0",
            Premium: []
        }
    }


    moreDetails(){
        var temp = [];
        for(var i = 0; i<monthlyAmortizationData.length; i++){
            temp.push(<li>{monthlyAmortizationData[i].name}</li>);
        }

        return <ul>{temp}</ul>;
    }
    componentDidMount(){
        this.setState({
            Premium: this.props.Premium
        })
    }
    onSubmit = (fields) => {
        var info = fillAmortizationData(fields);
        this.setState({mortgage: info[0].toFixed(2)});
        this.setState({loanLength: info[1]});
        this.setState({flag: true});
    }

    render(){ 
        console.log(this.props.Premium);
        if(this.state.Premium.length == 0){
            return (<PremiumPage/>)
        }
        return(
            <div className="mortgage-body">
                <Fade/>
                <div className='mortgage-form'>
                    <div className="mortgage-result">
                        <MortgageForm onSubmit={fields => this.onSubmit(fields)}/>
                        <div className="mortgage-result-data">
                            <div className="home-image"/>
                            <MortgageResult mortgage={this.state.mortgage} loanLength={this.state.loanLength} />
                        </div>
                    </div>
                    {this.state.flag ? showAmortizationSchedule() : null}
                    {this.state.flag ? <button onClick={moreDetails}> More Details</button> : null}
                </div>
            </div>
        )
    }
}

function moreDetails(){
    console.log("moreDetails");
}

function fillAmortizationData(fields){
    if(amortizationData.length > 0){
        amortizationData = [];
        monthlyAmortizationData = [];
    }
    console.log("Mortgage got: ", fields);
    var homePrice = parseFloat(fields.HomePrice);
    var downPayment = parseFloat(fields.DownPayment);
    var interest = parseFloat(fields.InterestRate);
    var loanLength = parseFloat(fields.LoanLength);
    var principal = homePrice - downPayment;
    var r = interest/100/12;
    var n = loanLength*12;
    var mortgage = (principal * r*(1+r)**n/((1+r)**n-1));

    var remainingPrincipal = principal;
    var monthlyInterestPayment;
    var monthlyPrincipalPayment;
    var totalInterestPaid = 0;
    var totalPrincipalPaid = 0;

    for(var i = 0; i < n + 1; i++){
        if(i == 0){
            amortizationData.push({name: i, Remaining: remainingPrincipal, Principal: 0, Interest: 0});
        } else {
            monthlyInterestPayment = r * remainingPrincipal;
            monthlyPrincipalPayment = mortgage - monthlyInterestPayment;
            remainingPrincipal -= monthlyPrincipalPayment;
            totalInterestPaid += monthlyInterestPayment;
            totalPrincipalPaid += monthlyPrincipalPayment;
            if(i % 12 == 0){
                if(i == n && remainingPrincipal < 0){
                    amortizationData.push({name: i/12, Remaining: 0, Principal: totalPrincipalPaid.toFixed(2), Interest: totalInterestPaid.toFixed(2)});
                } else {
                    amortizationData.push({name: i/12, Remaining: remainingPrincipal.toFixed(2), Principal: totalPrincipalPaid.toFixed(2), Interest: totalInterestPaid.toFixed(2)});
                }
            }
        }
        monthlyAmortizationData.push({name: 'Month '+i, Payment: mortgage.toFixed(2), Remaining: remainingPrincipal.toFixed(2), Principal: totalPrincipalPaid.toFixed(2), Interest: totalInterestPaid.toFixed(2)});
    }
    console.log(monthlyAmortizationData);
    var info = [mortgage,loanLength];
    return info;
}

function showAmortizationSchedule(){
    return(
        <div className = "amortization-schedule">
            <LineChart width={800} height={300} data={amortizationData}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="Remaining" stroke="#8884d8" activeDot={{r: 5}}/>
                <Line type="monotone" dataKey="Principal" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Interest" stroke="#f8bb32" />
            </LineChart>
        </div>
    )
}
function mapStatetoProps({Premium}){
    return {Premium};
}

export default connect(mapStatetoProps, null)(MortgagePage);

