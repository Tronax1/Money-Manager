import React, { Component } from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router"

import LoginPage from "../Login page/LoginPage"


class Auth extends Component {
    render() {
        return(
            <div>
                {this.props.auth ? (<Redirect to="/user" /> ) : ( <LoginPage /> )} 
            </div>
        )
    }
}
function mapStatetoProps({auth}){
    return {auth};
}
export default connect(mapStatetoProps)(Auth);
