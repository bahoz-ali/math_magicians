import React, { Component } from 'react';
import './calculator_style.css';
import Button from './button';
import Input from './input';
import calculate from '../logic/calculator';

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    calcInfo: {
      total: null,
      next: null,
      operation: null,
    },
  };

  handleKeyPress = async (event) => {
    const btnName = event.target.name;
    const calculator = calculate(this.state.calcInfo, btnName);
    const updateCalculatorInfo = { ...this.state.calcInfo, ...calculator };

    await this.setState({ calcInfo: updateCalculatorInfo });
  };

  render() {
    return (
      <section className="calculator_section">
        <div className="calculator">
          <Input result={this.state.calcInfo} />
          <Button handleCalculate={this.handleKeyPress} icon="AC" />
          <Button handleCalculate={this.handleKeyPress} icon="+/-" />
          <Button handleCalculate={this.handleKeyPress} icon="%" />
          <Button
            handleCalculate={this.handleKeyPress}
            icon="÷"
            theme="btn--primary"
          />
          <Button handleCalculate={this.handleKeyPress} icon="7" />
          <Button handleCalculate={this.handleKeyPress} icon="8" />
          <Button handleCalculate={this.handleKeyPress} icon="9" />
          <Button
            handleCalculate={this.handleKeyPress}
            icon="x"
            theme="btn--primary"
          />
          <Button handleCalculate={this.handleKeyPress} icon="4" />
          <Button handleCalculate={this.handleKeyPress} icon="5" />
          <Button handleCalculate={this.handleKeyPress} icon="6" />
          <Button
            handleCalculate={this.handleKeyPress}
            icon="-"
            theme="btn--primary"
          />
          <Button handleCalculate={this.handleKeyPress} icon="1" />
          <Button handleCalculate={this.handleKeyPress} icon="2" />
          <Button handleCalculate={this.handleKeyPress} icon="3" />
          <Button
            handleCalculate={this.handleKeyPress}
            icon="+"
            theme="btn--primary"
          />
          <Button
            handleCalculate={this.handleKeyPress}
            icon="0"
            number="zero"
          />
          <Button handleCalculate={this.handleKeyPress} icon="." />
          <Button
            handleCalculate={this.handleKeyPress}
            icon="="
            theme="btn--primary"
          />
        </div>
      </section>
    );
  }
}

export default Calculator;
