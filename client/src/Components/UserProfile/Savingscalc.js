import React,{Component} from "react";
import { render } from "react-dom";
import "./Savingscalc.css";

export default class UserPage extends Component {
  state = {
    firstVal: 0,
    secondVal: 12
  };

  updateInputValue = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: parseInt(value)
    });
  };

  calculate = () => {
    const { firstVal, secondVal } = this.state;
    alert("Each month you need to save $" + (firstVal/secondVal) + " to reach your goal");
  };


  render() {
    return (
      <div>
          <div className = "calc">
        <input
          placeholder="$ to save in a year"
          value={this.state.inputValue}
          name="firstVal"
          onChange={evt => this.updateInputValue(evt)}
        />
        <button onClick={this.calculate}>Calculate</button>
        </div>
      </div>
    );
  }
}

