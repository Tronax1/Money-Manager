import React, { Component } from 'react'
import mortgage from './AboutImages/mortgage-image.jpg'

import Fade from "../Animations/Smooth Transitions/Fade"

import "./About.css"

export default class About extends Component {
    render() {
        return (
            <div className="body">
                <div className="about-image">
                    <div className="about-container">
                        <about-h1>About MoneyManager</about-h1>
                        <br /><br />
                        <about-p>Aid users by giving guidance on spendings, loans, savings and other tools that enhace fiscal responsibility</about-p>
                    </div>
                </div>
                
                <div className="vision-container">
                    <about-h2>Our Vision</about-h2>
                    <br /><br />
                    <about-p1>Enhace fiscal responsibility by providing technology that makes financial independence manageable</about-p1>
                </div>

                <div className="about-image2">
                    <div className="services-container">
                        <about-h1>Services</about-h1>
                        <br /> <br />
                        <div className="services-grid">
                            <div className="grid-item">
                                <div className="expense-image"/>
                                <br />
                                Expense Management: Track weekly or monthly spending. Graph visualizations for all your expenses
                            </div>
                            <div className="grid-item">
                                <div className="mortgage-image"/>
                                <br />
                                Mortgage Calculator: Calculate expected mortgage for potential real estate investment. Breakdowns of monthly expense and amortization
                            </div>
                            <div className="grid-item">
                                <div className="goals-image"/>
                                <br />
                                Goal Tracking: Calculate future savings goals and receive recommendations on reaching those goals
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
