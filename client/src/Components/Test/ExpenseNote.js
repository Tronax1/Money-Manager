import React, { Component } from 'react'
import './ExpenseNote.css'

export default class ExpenseNote extends Component {
    constructor(props){
        super(props);
        this.message = "Expense notea sdfkjhsdf";
    }
    render() {
        return (
            <div className="center-flex">
                <div className="Note-background">
                    <span>{this.props.noteName}</span>
                    <span>{this.props.noteAmmount}</span>
                    <span>{this.props.noteNotes}</span>
                </div>
            </div>
        )
    }
}
