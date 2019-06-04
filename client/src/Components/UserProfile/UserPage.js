import React, { Component } from 'react'
//import {Doughnut} from 'react-chartjs-2'
import DonutChart from 'react-donut-chart'

import "./UserPage.css"



export default class UserPage extends Component {
    render() {
        return (
            <div>            
              <p><br /><br /><br />Test one two three</p>

              <DonutChart
              data = {[{
                    label: 'Dick',
                    value: 25 
              },
              {
                  label: ' ',
                  value: 75,
                  isEmpty: true
                
              }]}/>
            </div>
        )
    }
}
