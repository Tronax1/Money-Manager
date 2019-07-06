import React, { Component } from 'react'

import ExpenseForm from '../Expense form/ExpenseForm'
import Fade from '../Animations/Smooth Transitions/Fade'
import ExpenseNote from './ExpenseNote'
import Modal from './Modal/Modal'
import fire from '../../Config/Fire'

import './Test.css'

export default class TestPage extends Component {
    constructor(props){
        super(props);
        this.addExpense = this.addExpense.bind(this);
        this.removeExpense = this.removeExpense.bind(this);
        this.showModal = this.showModal.bind(this);
        //this.db = fire.database().ref().child('Expenses');
        this.userKey = fire.auth().currentUser.uid
        this.db = fire.database().ref().child('Users').child(this.userKey).child('Expenses');
        this.state = {
            Expenses: [],
            show: false
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
        this.db.on('child_removed', snap=>{
            for(var i = 0; i < previousNote.length; i++){
                if(previousNote[i].id == snap.key){
                    previousNote.splice(i, 1);
                }
            }
            this.setState({
                Expenses: previousNote
            })
        })
    }
    showModal(){
        this.setState({
            show: !this.state.show
        });
    }
    addExpense(name, expense, note){
        this.db.push().set({
            name: name,
            ammount: expense,
            notes: note
        })
    }
    removeExpense(noteId){
        this.db.child(noteId).remove();
    }
    render(){
        return(
            <div>
                <Fade/>
                <div>
                    {
                        this.state.Expenses.map(note => {
                            return(
                                <ExpenseNote noteId={note.id} 
                                noteName={note.name} 
                                noteNotes={note.notes}
                                noteAmmount={note.ammount}
                                key={note.id} 
                                removeExpense={this.removeExpense}/>
                            )
                        })
                    }
                    <button className="Add-Expense" onClick={this.showModal}>
                        <i class="fas fa-plus"></i>
                        </button>
                </div>
                <Modal addNote={this.addExpense} onClose={this.showModal} show={this.state.show}/>
            </div>
        )
    }
}