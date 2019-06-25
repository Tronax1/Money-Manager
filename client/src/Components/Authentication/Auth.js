import React, { Component } from 'react'
import {connect} from "react-redux"

import LoginPage from "../Login page/LoginPage"
import UserPage from "../UserProfile/UserPage"


class Auth extends Component {
    render() {
        return(
            <div>
            {this.props.auth ? ( <UserPage/> ) : ( <LoginPage /> )} 
            </div>
        )
    }
}
function mapStatetoProps({auth}){
    return {auth};
}
export default connect(mapStatetoProps)(Auth);
