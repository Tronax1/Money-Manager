import React, { Component } from 'react'
import DonutChart from 'react-donut-chart'

import "./UserPage.css"

export default class UserPage extends Component {
    render() {
        return (
            <div>            
              <form className = "Alignment">

              <DonutChart
              data = {[{
                    label: 'Income',
                    value: 50000 
              },
             ]}/>

            <DonutChart
              data = {[{
                    label: 'Expenses',
                    value: 20000 
              },
                ]}/>

                </form>
                <label>
                        <label className="Text"/>
                        <h2>Total:</h2>
                    </label>
            </div>
        )
    }
}
