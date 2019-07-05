import React, { Component } from 'react'

import ExpenseForm from '../Expense form/ExpenseForm'
import Fade from '../Animations/Smooth Transitions/Fade'
import ExpenseNote from './ExpenseNote'
import fire from '../../Config/Fire'

import '../Expense form/ExpenseForm.css'

export default class TestPage extends Component {
    constructor(props){
        super(props);
        this.addExpense = this.addExpense.bind(this);
        this.db = fire.database().ref().child('Expenses');
        this.state = {
            Expenses: []
        }
    }
    componentWillMount(){
        const previousNote = this.state.Expenses;
        this.db.on('child_added', snap=>{
            previousNote.push({
                id: snap.key,
                name: snap.val().name,
                ammount: snap.val().ammount,
                notes: snap.val().notes
            })
            this.setState({
                Expenses: previousNote
            })
        })
    }
    addExpense(name, expense, note){
        this.db.push().set({
            name: name,
            ammount: expense,
            notes: note
        })
    }
    render(){
        return(
            <div>
                <Fade/>
                <div>
                    {
                        this.state.Expenses.map(note => {
                            return(
                                <ExpenseNote noteId={note.id} noteName={note.name} noteNotes={note.notes}
                                noteAmmount={note.ammount}key={note.id}/>
                            )
                        })
                    }
                    
                </div>
                <ExpenseForm addNote={this.addExpense}/>  
            </div>
        )
    }
}