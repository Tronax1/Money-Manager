import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import Test from '../Test/Test'
import MortgagePage from '../MortgagePage/MortgagePage'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import HomeIcon from '@material-ui/icons/Home'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

function AfterLoginRegistration(){
    return(
        <BrowserRouter>
            <Route render={({location, history}) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if(location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="test">
                            <NavItem eventKey="test">
                                <NavIcon>
                                    <HomeIcon/>
                                </NavIcon>
                                <NavText>
                                    Home
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="mortgage">
                                <NavIcon>
                                    <AccountBalanceIcon/>
                                </NavIcon>
                                <NavText>
                                    Mortgage Calculator
                                </NavText>
                            </NavItem>
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

export default AfterLoginRegistration;