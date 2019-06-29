import React, { Component } from 'react'

import "./ExpenseForm.css"


export default class ExpenseForm extends Component {

    state={
        Name: "",
        Amount: "",
        Date: "",
        Type: "",
        Notes: ""
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state); 
        this.setState({
            Name: "",
            Amount: "",
            Date: "",
            Type: "",
            Notes: ""
        })
    }

    render() {
        return (
            <div className="Alignment">
                <form> 
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Name"
                            placeholder="Name"
                            value={this.state.Name}
                            onChange={e => this.change(e)}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Amount"
                            placeholder="Amount"
                            value={this.state.Amount}
                            onChange={e => this.change(e)}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Date"
                            placeholder="Date"
                            value={this.state.Date}
                            onChange={e => this.change(e)}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Type"
                            placeholder="Type"
                            value={this.state.Type}
                            onChange={e => this.change(e)}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            className="Text-box" 
                            name="Notes"
                            placeholder="Notes"
                            value={this.state.Notes}
                            onChange={e => this.change(e)}
                        />
                    </label>
                    <label>
                        <button className="Expense-Button" onClick={e => this.onSubmit(e)}>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}