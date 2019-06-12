import React, { Component } from 'react'
import DonutChart from 'react-donut-chart'

import "./UserPage.css"

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
                <div class = "background">

                
                 <div className = "Dash">
                    <h2 className = "Dash-text">Dashboard </h2>

                 </div>
                
                    <div className ="donut1"> Income
                </div>

                <div className = "donut2"> Expenses
                </div>
                
              
                <div className = "Align">
              <DonutChart
              
              data = {[{
                    label: '$'+this.state.total1,
                    value: this.state.total1                        
              }, 

             ]}/>

            <DonutChart
              data = {[{
                    label: '$'+this.state.total2,
                    value: this.state.total2, 
                    
              },
              {
                label: ' ',
                value: this.state.total2 * 1.5,
                isEmpty: true
                }
                ]}/>
                </div>
                    
                        <div className = "Total">
                        Total: ${this.state.total1 - this.state.total2}
                    </div>
                    </div>
                    
            </div>
        )
    }
}
