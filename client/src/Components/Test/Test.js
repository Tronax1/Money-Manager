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
        this.renderExpenses = this.renderExpenses.bind(this);
        this.showModal = this.showModal.bind(this);
        this.state = {
            Expenses: [],
            show: false
        }
    }
    componentDidMount(){
        this.props.fetchData();
        const previousNotes = this.state.Expenses;
        previousNotes.push(this.props.Expense);
        this.setState({
            Expenses: previousNotes
        })
    }
    showModal(){
        this.setState({
            show: !this.state.show
        });
    }
    addExpense(name, expense, note){
        this.props.addExpenseDatabase(name, expense, note);
    }
    removeExpense(noteId){
        this.props.removeExpenseDatabase(noteId);
    }
    renderExpenses(){
        console.log(this.state.Expenses);
            //this.state.Expenses.map(note => {
              //  return <ExpenseNote noteId={note.id}
              //      noteName={note.name}
              //      noteNotes={note.notes}
              ///      noteAmmount={note.ammount}
              //      key={note.id}
                //    removeExpense={this.removeExpense} />
          //  });
       // }
    }
    render(){
        
        return(
            <div>
                <Fade/>
                <div>
                    {this.renderExpenses()}
                    <button className="Add-Expense" onClick={this.showModal}>
                        <i className="fas fa-plus"></i>
                        </button>
                </div>
                <Modal addNote={this.addExpense} onClose={this.showModal} show={this.state.show}/>
            </div>
        )
    }
}

function mapStatetoProps({Expense}){
    return {Expense};
}

export default connect(mapStatetoProps, {addExpenseDatabase, removeExpenseDatabase, fetchData})(TestPage)