import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import TestPage from '../Test/Test'
import MortgagePage from '../MortgagePage/MortgagePage'
import {connect} from 'react-redux'
import {signOut, fetchData, fetchPremium, fetchIncome} from "../../actions"
import {withRouter} from 'react-router-dom'
import Userhome from '../UserProfile/UserHome'
import Savingscalc from '../UserProfile/Savingscalc'
import Stock from '../UserProfile/Stocks/stock'
import {Redirect} from "react-router"
import './AfterLoginRouter.css'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import HomeIcon from '@material-ui/icons/Home'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import SavingsIcon from '@material-ui/icons/Mood'
import StockIcon from '@material-ui/icons/Assessment'

class AfterLoginRegistration extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        if(this.props.auth){
            this.props.fetchData();
            this.props.fetchPremium();
        }
    }
    handleClick(){
        this.props.signOut();
    }
    render(){
        if(!this.props.auth){
            return(<Redirect to="/Login"/>)
        }
        return (
            <BrowserRouter>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="user">
                                <NavItem eventKey="user">
                                    <NavIcon>
                                        <HomeIcon />
                                    </NavIcon>
                                    <NavText>
                                        Home
                                </NavText>
                                </NavItem>

                                <NavItem eventKey = "Expenses">
                                    <NavIcon>
                                        <AssignmentIcon/>
                                    </NavIcon>
                                    <NavText>
                                    Expense Form
                                    </NavText>
                                    </NavItem>

                                <NavItem eventKey="mortgage">
                                    <NavIcon>
                                        <AccountBalanceIcon />
                                    </NavIcon>
                                    <NavText>
                                        Mortgage Calculator
                                </NavText>
                                </NavItem>

                                <NavItem eventKey="savingsCalc">
                                    <NavIcon>
                                        <SavingsIcon />
                                    </NavIcon>
                                    <NavText>
                                        Savings Calculator
                                </NavText>
                                </NavItem>

                                <NavItem eventKey="stock">
                                    <NavIcon>
                                        <StockIcon />
                                    </NavIcon>
                                    <NavText>
                                        Search Stocks
                                </NavText>
                                </NavItem>

                                <button className="Logout-Button"
                                onClick={this.handleClick}>LOGOUT</button>

                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            <Switch>
                            <Route path ="/user" component={props=><Userhome/>}/>
                            <Route path="/Expenses" component={props => <TestPage />} />
                            <Route path="/mortgage" component={props => <MortgagePage />} />
                            <Route path="/savingsCalc" component={props => <Savingscalc />} />
                            <Route path="/stock" component={props => <Stock />} />
                            </Switch>
                        </main>
                    </React.Fragment>
                )}
                />
            </BrowserRouter>
        );
    }
}

function mapStatetoProps({auth}){
    return {auth};
}

export default withRouter(connect(mapStatetoProps, {signOut, fetchData, fetchPremium})(AfterLoginRegistration));