import React, { Component } from 'react'
import {connect} from "react-redux"
import {signOut} from "../../actions"
import "./UserPage.css"


class UserPage extends Component {
    render() {
        return (
            <div>            
            <p><br/><br/><br/>asdsdfsdf</p>   
            <button onClick={this.props.signOut}>LOGOUT</button>
            </div>
        )
    }
}
export default connect(null, {signOut})(UserPage);
