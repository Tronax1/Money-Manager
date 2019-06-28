import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import Test from '../Test/Test'
import MortgagePage from '../MortgagePage/MortgagePage'
import {connect} from 'react-redux'
import {signOut} from "../../actions"
import {withRouter} from 'react-router-dom'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import HomeIcon from '@material-ui/icons/Home'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

class AfterLoginRegistration extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.props.signOut();
        this.props.history.push('/Login');
    }
    render(){
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
                            <SideNav.Nav defaultSelected="test">
                                <NavItem eventKey="test">
                                    <NavIcon>
                                        <HomeIcon />
                                    </NavIcon>
                                    <NavText>
                                        Home
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

                                <button onClick={this.handleClick}>Logout</button>

                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            <Route path="/test" component={props => <Test />} />
                            <Route path="/mortgage" component={props => <MortgagePage />} />
                        </main>
                    </React.Fragment>
                )}
                />
            </BrowserRouter>
        );
    }
}

export default connect(null, {signOut})(withRouter(AfterLoginRegistration));