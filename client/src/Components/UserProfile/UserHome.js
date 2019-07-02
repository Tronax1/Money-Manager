import React, { Component } from 'react'
import DonutChart from 'react-donut-chart'
import Savingscalc from './Savingscalc'
import "./UserHome.css"

export default class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            total1:5000,
            total2:2000
        } 
    }
    render() {
        return (
            <div>   
        

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
                value: this.state.total2 * 1.5,
                isEmpty: true,
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
