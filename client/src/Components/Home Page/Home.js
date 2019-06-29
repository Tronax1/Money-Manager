import React, { Component } from 'react'
import money from './Images/money.jpg'
import budget from './Images/Budgets.jpg'
import spending from './Images/spending.jpg'
import saving from './Images/Savings.jpg'
import encrypt from './Images/encrypt.jpg'
import bills from './Images/bills.jpg'
import Fade from "../Animations/Smooth Transitions/Fade"
import "./Home.css"


export default class Home extends Component {
    render() {
        return (
        
            <div>
                <Fade />
                <div className = "moneyimg">
                <img src = {money}  alt ="money"/>
                    <h4 className = "money-text">Welcome to Money Manager where we help you effortlessly manage all your finances in one place. To get started,
            simply click the register button to sign up for a free account. </h4>
  
                </div>
                <div className="Mid-section"> 
                    <div className="Mid-Flex">
                        <div className="budgetimg">
                            <img className="Image-size" src={budget} alt="Budget" />
                        </div>

                        <div className="spendingimg">
                            <img className="Image-size" src={spending} alt="Spending" />
                        </div>

                        <div className="savingimg">
                            <img className="Image-size" src={saving} alt="Saving" />
                        </div>
                    </div>
                </div>
               
                <div className="Lower-Formatting">
                    <div className="Formatting-Flex">
                        <div>
                            <p className="encrypt-text"> Get started with our secure encryption </p>
                            <p className="encrypt-text1"> > It's easy to set up your free acount in seconds.<br/><br/>> We keep your information secure by encrypting your data with a 256-bit encryption.</p>
                        </div>
                        <div>
                            <img className="encryptimg" src={encrypt} alt="Encrypt" />
                        </div>
                    </div>
                </div>
                <div className="Lower-Formatting">
                    <div className="Formatting-Flex">
                        <div>
                            <img className="encryptimg" src={bills} alt="Bills" />
                        </div>
                        <div>
                            <p className="bills-text"> Stay on top of your bills </p>
                            <p className="bills-text1"> > See your bills and money in one place.<br /><br /> > Receive custom suggestions to help save money. <br /><br/>
                                 > Current and past transactions shown to help compare your spendings.</p>
                            <div className="billsback">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="encryptback"/>
                <div className="billsback"/>
            </div>  
        )
    }
}