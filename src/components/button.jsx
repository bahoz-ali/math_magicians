import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn_container">
        <button type="button" className='btn'>1</button>
      </div>
    );
  }
}

export default Button;
