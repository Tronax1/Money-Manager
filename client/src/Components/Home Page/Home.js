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

            <div className = "responsive">
            
                <div className = "budgetimg">
                <img src = {budget}  alt ="Budget"/>
                </div>

                <div className = "spendingimg">
                <img src = {spending}  alt ="Spending"/>
                </div>

                <div className = "savingimg">
                <img src = {saving}  alt ="Saving"/>
                </div>

               
                <div className = "encryptimg">
                
                <img src = {encrypt}  alt ="Encrypt"/>
                <h3 className = "encrypt-text"> Get started with our secure encryption </h3> 
                <h5 className = "encrypt-text1"> > It's easy to set up your free acount in seconds.<p><br/>> We keep your information secure by encrypting your data with a 256-bit encryption. </p></h5>
                <div className = "encryptback">
                </div>
                </div>

                <div className ="billsimg">
                    <img src = {bills} alt = "Bills"/>
                    <h3 className = "bills-text"> Stay on top of your bills </h3>
                    <h5 className = "bills-text1"> > See your bills and money in one place.<p><br/>> Receive custom suggestions to help save money. </p>
                    <p> > Current and past transactions shown to help compare your spendings</p></h5>
                <div className = "billsback">
                </div>
                </div>
                </div>


            </div>
            
        )
    }
}


