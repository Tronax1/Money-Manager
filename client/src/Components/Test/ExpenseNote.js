import React, { Component } from 'react'
import './ExpenseNote.css'

export default class ExpenseNote extends Component {
    constructor(props){
        super(props);
        this.message = "Expense notea sdfkjhsdf";
        this.handleRemoveExpense = this.handleRemoveExpense.bind(this);
    }
    handleRemoveExpense(id){
        this.props.removeExpense(id);
    }
    render() {
        return (
            <div className="center-flex">
                <div className="Note-background">
                    <span>{this.props.noteName}</span>
                    <span>{this.props.noteAmmount}</span>
                    <span>{this.props.noteNotes}</span>
                    <span className="Close-button" 
                    onClick={()=>this.handleRemoveExpense(this.props.noteId)}>&times;</span>
                </div>
            </div>
        )
    }
}
