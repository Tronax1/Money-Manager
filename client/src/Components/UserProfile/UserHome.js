import React, { Component } from 'react'
import DonutChart from 'react-donut-chart'
import Savingscalc from './Savingscalc'
import Fade from '../Animations/Smooth Transitions/Fade'
import "./UserHome.css"
import fire from '../../Config/Fire'
import Firebase from 'firebase'
import fetchData from '../../index'
import {connect} from 'react-redux'
import {fetchIncome, addIncome} from '../../actions'


class UserPage extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            total1: this.props.Income,
            total2: 0,
            Income: ""
        } 
    }

    componentWillMount(){
        this.props.fetchIncome();
        console.log(this.props.Income);
        let userKey = fire.auth().currentUser.uid;
        let database = fire.database().ref().child('Users').child(userKey).child('Expenses');
        let newState = [];
        database.on('value', (snapshot)=>{
            let items = snapshot.val();
            for(let item in items){
                console.log("expense");
                newState.push({
                    ammount: items[item].ammount,
                })
            }
        })
        var totalExpense = 0;
        for(var i = 0; i < newState.length; i++){
            console.log(newState[i].ammount);
            totalExpense += parseFloat(newState[i].ammount);
        }
        console.log(totalExpense);
        this.setState({
            total2: totalExpense,
        })
        
    }   
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addIncome(this.state.Income);
        this.setState({
            Income: "",
            total1: this.props.Income
        })
    }

    render() {

        return (   

            <div>   
                <Fade />
                 <div className = "Dash">
                    <h2 className = "Dash-text">Dashboard </h2>

                 </div>
        
                <div className = "Align">

                <div className ="donut1"> 
                <h3 className = "donut1-text"> Income </h3>
        
                <input type="text" name="Income" 
                onChange={this.handleChange} value={this.state.Income}></input>
                <button onClick={this.handleSubmit}>Add income</button>
              <DonutChart
              
              data = {[{
                    label: '$'+this.state.total1,
                    value: this.state.total1,                       
              }, 

             ]}/>
                </div>
                <div className = "donut2"> 
                <h3 className = "donut2-text"> Expense </h3>
       
              
            <DonutChart
              data = {[{
                    label: '$'+this.state.total2,
                    value: this.state.total2, 
                    
                    
              },
            
                ]}/>
                  </div>
                  </div>
                
                    
                        <div className = "Total">
                        Total: ${this.state.total1 - this.state.total2}
                    </div>
                    {this.state.total1 > this.state.total2 ? addInvestNotes() : null}

                    
            </div>
        )
    }
}

function addInvestNotes(){
    return(<div className='Notes'>
            <table border='1'>
                <tr>
                    <th>Notes</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>Your income is greater than your expenses. A general rule is to save 20% of your income</td>
                    <td>Think about investing! View stocks with our stock searching tool
                        <br /> Invest in Real Estate! Calculate Mortgage with our Mortagage Calculating tool
                    </td>
                </tr>
            </table>
            </div>)
}
function mapStatetoProps({Income}){
    return {Income};
}

export default connect (mapStatetoProps,{addIncome, fetchIncome})(UserPage)
