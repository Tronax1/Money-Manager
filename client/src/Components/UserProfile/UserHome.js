import React, { Component } from 'react'
import DonutChart from 'react-donut-chart'
import Savingscalc from './Savingscalc'
import Fade from '../Animations/Smooth Transitions/Fade'
import "./UserHome.css"
import fire from '../../Config/Fire'
import Firebase from 'firebase'
import fetchData from '../../index'


export default class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            total1: 5000,
            total2: 0
        } 
    }

    componentWillMount(){
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
              {
                label: ' ',
                value: this.state.total1,
                }
                ]}/>
                  </div>
                  </div>
                
                    
                        <div className = "Total">
                        Total: ${this.state.total1 - this.state.total2}
                    </div>
                    
            </div>
        )
    }
}
