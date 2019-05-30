import React, { Component } from 'react'
import "./UserPage.css"
import DonutChart from 'react-donut-chart';

export default class UserPage extends Component {
    render() {
        return (
            <div>            
                <DonutChart 
                    data = {[{
                        label: 'Income',
                        value: 2000
                    },
                    {
                        label: ' ',
                        value: 75,
                        isEmpty: true
                    }]} />
            
            </div>
        )
    }
}
