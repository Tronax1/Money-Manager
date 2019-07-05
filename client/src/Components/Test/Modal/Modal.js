import React, { Component } from 'react'
import ExpenseForm from '../../Expense form/ExpenseForm'
import './Modal.css'

export default class Modal extends Component {
    onClose(e){
        this.props.onClose && this.props.onClose(e);
    }
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div className="Modal-Background">
                <div className="Modal-Contents">
                    <div className="Header">
                        <span className="Modal-Close-Button" onClick={e=>this.onClose(e)}>&times;</span>
                    </div>
                    <div className="Modal-Body">
                        <ExpenseForm close={this.props.onClose} addNote={this.props.addNote}className="Align-Form"/>
                    </div>
                </div>
            </div>
        )
    }
}
