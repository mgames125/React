import React, { Component } from "react";
import "./Counter.css";
import { Display } from "./Display";
import { Buttons } from "./Buttons";
import { StepForm } from "./StepForm";

class Counter extends Component {
  state = {
    number: this.props.startNumber || 0,
    step: this.props.startStep || 5,
  };

  inc = () => {
    this.setState({
      number: this.state.number + this.state.step,
    });
  };
  dec = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  };

  setStep = (newStep) => {
    this.setState({
      step: +newStep,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <Display number={this.state.number} />
        <StepForm step={this.state.step} setStep={this.setStep} />
        <Buttons setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}

export default Counter;