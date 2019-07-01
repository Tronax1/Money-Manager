import React, { Component } from 'react'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'

import RegisterForm from "./Register Form/RegisterForm"
import Fade from "../Animations/Smooth Transitions/Fade"
import LoginBackground from "../Images/LoginBackground.jpg"
import "./RegisterPage.css"

const imageStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1
}
class RegisterPage extends Component {
    render() {
        return (
            <div>
                <Fade/>
                {this.props.auth ? (<Redirect to="/Login" />) :
                    (<React.Fragment>
                        <RegisterForm />
                        <img src={LoginBackground} alt="" style={imageStyle}/>
                    </React.Fragment>)}
            </div>
        )
    }
}
function mapStatetoProps({auth}){
    return {auth};
}
export default connect(mapStatetoProps)(RegisterPage)
