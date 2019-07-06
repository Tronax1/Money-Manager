import React,{Component} from "react";
import { render } from "react-dom";
import Fade from '../Animations/Smooth Transitions/Fade'
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
        <Fade/>
        <div className = "backgroundpage"></div>

        
          <div className = "calc">
          <h1 className = "calctitle">Savings Calculator</h1>
          <h3 className = "calctext">Input any amount of money you wish to save per year and hit the calculate button to see how much you need to save each month to reach your goal.</h3>
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

