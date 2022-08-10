import React, { useState } from 'react';
import './calculator_style.css';
import Button from '../components/button';
import Input from '../components/input';
import calculate from '../logic/calculator';

const Calculator = (props) => {
  const [calcInfo, setCalcInfo] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleKeyPress = (event) => {
    const btnName = event.target.name;
    const calculator = calculate(calcInfo, btnName);
    const updateCalculatorInfo = { ...calcInfo, ...calculator };

    setCalcInfo(updateCalculatorInfo);
  };

  return (
    <section className="calculator_section">
      <div className="calculator">
        <Input result={calcInfo} />
        <Button handleCalculate={handleKeyPress} icon="AC" />
        <Button handleCalculate={handleKeyPress} icon="+/-" />
        <Button handleCalculate={handleKeyPress} icon="%" />
        <Button
          handleCalculate={handleKeyPress}
          icon="÷"
          theme="btn--primary"
        />
        <Button handleCalculate={handleKeyPress} icon="7" />
        <Button handleCalculate={handleKeyPress} icon="8" />
        <Button handleCalculate={handleKeyPress} icon="9" />
        <Button
          handleCalculate={handleKeyPress}
          icon="x"
          theme="btn--primary"
        />
        <Button handleCalculate={handleKeyPress} icon="4" />
        <Button handleCalculate={handleKeyPress} icon="5" />
        <Button handleCalculate={handleKeyPress} icon="6" />
        <Button
          handleCalculate={handleKeyPress}
          icon="-"
          theme="btn--primary"
        />
        <Button handleCalculate={handleKeyPress} icon="1" />
        <Button handleCalculate={handleKeyPress} icon="2" />
        <Button handleCalculate={handleKeyPress} icon="3" />
        <Button
          handleCalculate={handleKeyPress}
          icon="+"
          theme="btn--primary"
        />
        <Button handleCalculate={handleKeyPress} icon="0" number="zero" />
        <Button handleCalculate={handleKeyPress} icon="." />
        <Button
          handleCalculate={handleKeyPress}
          icon="="
          theme="btn--primary"
        />
      </div>
    </section>
  );
};

export default Calculator;
