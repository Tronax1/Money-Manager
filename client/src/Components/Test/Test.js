import React, { Component } from 'react'

import ExpenseForm from '../Expense form/ExpenseForm'
import Fade from '../Animations/Smooth Transitions/Fade'
import ExpenseNote from './ExpenseNote'

import '../Expense form/ExpenseForm.css'

export default class TestPage extends Component {
    constructor(props){
        super(props);
        this.addExpense = this.addExpense.bind(this);
        this.state = {
            Expenses: [
                {id: 1, name:'Kappa', ammount:'200', notes:'expense 1'},
                {id: 2, name:'Pride', ammount:'123', notes:'expense 2'}
            ]
        }
    }
    addExpense(name, expense, note){
        const previousNotes = this.state.Expenses;
        previousNotes.push({id: previousNotes.length + 1, name: name, ammount: expense, notes: note});
        this.setState({
            Expenses: previousNotes
        });
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