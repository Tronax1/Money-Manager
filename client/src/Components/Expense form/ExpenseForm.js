import React, { Component } from 'react'

import "./ExpenseForm.css"


export default class ExpenseForm extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            Name: "",
            Amount: "",
            Date: "",
            Type: "",
            Notes: ""
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addNote(this.state.Name, this.state.Amount, this.state.Notes);
        this.setState({
            Name: "",
            Amount: "",
            Date: "",
            Type: "",
            Notes: ""
        })
        this.props.close(e);
    }

    render() {
        return (
            <div className="Alignment">
                <form onSubmit={this.handleSubmit}> 
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Name"
                            placeholder="Name"
                            value={this.state.Name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Amount"
                            placeholder="Amount"
                            value={this.state.Amount}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Date"
                            placeholder="Date"
                            value={this.state.Date}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Type"
                            placeholder="Type"
                            value={this.state.Type}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Notes"
                            placeholder="Notes"
                            value={this.state.Notes}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        <button className="Expense-Button">Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}