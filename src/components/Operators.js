import React, { Component } from 'react';

class Operators extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="operators">
        <button type="button" className="btn btn-top">AC</button>
        <button type="button" className="btn btn-top">+/-</button>
        <button type="button" className="btn btn-top">%</button>
        <button type="button" className="btn btn-side">/</button>
        <button type="button" className="btn btn-side">x</button>
        <button type="button" className="btn btn-side">-</button>
        <button type="button" className="btn btn-side">+</button>
        <button type="button" className="btn btn-side">=</button>
      </div>

    );
  }
}

export default Operators;
