import React, { Component } from 'react'
import "./UserPage.css"
import DonutChart from 'react-donut-chart';

export default class UserPage extends Component {
    render() {
        return (
            <div>            
                <DonutChart 
                    data = {[{
                        label: 'Give you up',
                        value: 25
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
