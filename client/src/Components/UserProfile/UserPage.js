import React, { Component } from 'react'
import "./UserPage.css"
import fire from '../../Config/Fire';


export default class UserPage extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <div>            
            <p><br/><br/><br/>asdsdfsdf</p>   
            <button onClick={this.logout}>LOGOUT</button>
            </div>
        )
    }
}
