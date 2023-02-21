import React, { Component } from 'react';
import Display from './Display';
import NumbersKeys from './NumbersKeys';
import Operators from './Operators';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainContainer">
        {/* add child Components */}
        <Display />
        <NumbersKeys />
        <Operators />

      </div>
    );
  }
}

export default Calculator;
