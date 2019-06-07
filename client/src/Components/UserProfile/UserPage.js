import React, { Component } from 'react'
import DonutChart from 'react-donut-chart'

import "./UserPage.css"

export default class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            total1:50000,
            total2:20000
        } 
    }
    render() {
        return (
            <div>   
                <div class = "background">

                
                 <div class = "Dash">
                    <h2 class = "Dash-text">Dashboard </h2>

                 </div>
    
                    <div class ="donut1"> Income
                </div>

                <div class = "donut2"> Expenses
                </div>
                
              <div class = "Alignment">

              <DonutChart
              data = {[{
                    label: '$'+this.state.total1,
                    value: this.state.total1                        
              }, 

             ]}/>

            <DonutChart
              data = {[{
                    label: '$'+this.state.total2,
                    value: this.state.total2 
              },
              {
                label: ' ',
                value: this.state.total2 * 1.5,
                isEmpty: true
                }
                ]}/>
                </div>
                    
                        <div class = "Total">
                        Total: ${this.state.total1 - this.state.total2}
                    </div>
                    </div>
                    
            </div>
        )
    }
}
