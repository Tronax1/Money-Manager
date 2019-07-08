import React, { Component } from 'react'

import Fade from '../Animations/Smooth Transitions/Fade'
import ExpenseNote from './ExpenseNote'
import Modal from './Modal/Modal'
import {connect} from 'react-redux'
import {addExpenseDatabase, removeExpenseDatabase, fetchData} from '../../actions' 

import './Test.css'

class TestPage extends Component {
    constructor(props){
        super(props);
        this.addExpense = this.addExpense.bind(this);
        this.removeExpense = this.removeExpense.bind(this);
        this.showModal = this.showModal.bind(this);
        this.state = {
            Expenses: [],
            show: false
        }
    }
    componentDidMount(){
        this.setState({
            Expenses: this.props.Expense
        })
    }
    showModal(){
        this.setState({
            show: !this.state.show
        });
    }
    addExpense(name, expense, note){
        this.props.addExpenseDatabase(name, expense, note);
        this.setState({
            Expenses: this.props.Expense
        })
    }
    removeExpense(noteId){
        this.props.removeExpenseDatabase(noteId);
        this.setState({
            Expenses: this.props.Expense
        })
    }
    render(){
            return (
                <div>
                    <Fade />
                    <div>
                        {this.state.Expenses.map(note => (
                            <ExpenseNote noteId={note.id}
                                noteName={note.name}
                                noteNotes={note.notes}
                                noteAmmount={note.ammount}
                                key={note.id}
                                removeExpense={this.removeExpense} />
                            ))
                        }
                        <button className="Add-Expense" onClick={this.showModal}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <Modal addNote={this.addExpense} onClose={this.showModal} show={this.state.show} />
                </div>
            )
        
    }
}

function mapStatetoProps({Expense}){
    return {Expense};
}

export default connect(mapStatetoProps, {addExpenseDatabase, removeExpenseDatabase, fetchData})(TestPage)