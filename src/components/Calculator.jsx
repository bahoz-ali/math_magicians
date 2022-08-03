import React, { Component } from 'react';
import './calculator_style.css';
import Button from './button';
import Input from './input';

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="calculator_section">
        <div className="calculator">
          <Input />
          <Button icon="AC" />
          <Button icon="+/-" />
          <Button icon="%" />
          <Button icon="/" theme="btn--primary" />
          <Button icon="7" />
          <Button icon="8" />
          <Button icon="9" />
          <Button icon="x" theme="btn--primary"/>
          <Button icon="4" />
          <Button icon="5" />
          <Button icon="6" />
          <Button icon="-" theme="btn--primary"/>
          <Button icon="1" />
          <Button icon="2" />
          <Button icon="3" />
          <Button icon="+" theme="btn--primary"/>
          <Button icon="0" number="zero"/>
          <Button icon="." />
          <Button icon="=" theme="btn--primary"/>

        </div>
      </section>
    );
  }
}

export default Calculator;
