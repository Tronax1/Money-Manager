import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addPremium} from '../../actions';

import './PremiumPage.css'

class PremiumPage extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.addPremium();
    }
    render() {
        return (
            <div>
                <h1>You are not premium</h1>
                <button onClick={this.handleClick}>Go premium</button>
            </div>
        )
    }
}
export default connect(null, {addPremium})(PremiumPage);
