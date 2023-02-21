// snippet rce
import React, { Component } from 'react';

class NumbersKeys extends Component {
  // snippet rconst
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="allNumbers">
        <button type="button" className="btn btn-primary">7</button>
        <button type="button" className="btn btn-primary">8</button>
        <button type="button" className="btn btn-primary">9</button>
        <button type="button" className="btn btn-primary">4</button>
        <button type="button" className="btn btn-primary">5</button>
        <button type="button" className="btn btn-primary">6</button>
        <button type="button" className="btn btn-primary">1</button>
        <button type="button" className="btn btn-primary">2</button>
        <button type="button" className="btn btn-primary">3</button>
        <button type="button" className="btn btn-primary col-span-2">0</button>
        <button type="button" className="btn btn-primary">.</button>
      </div>
    );
  }
}

export default NumbersKeys;
