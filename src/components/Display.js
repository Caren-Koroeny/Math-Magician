import { Component } from 'react';

class Display extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="displayscreen-count-section">
        <input type="text" className="display-screen" />
      </div>
    );
  }
}
export default Display;
