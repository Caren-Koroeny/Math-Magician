import React, { useState } from 'react';
import Display from './Display';
import NumbersKeys from './NumbersKeys';
import Operators from './Operators';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,

  });
  const { total } = state;
  const { next } = state;
  const { operation } = state;

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };
  return (
    <div className="mainContainer">
      <Display next={next} operation={operation} total={total} />
      <NumbersKeys handleClick={handleClick} />
      <Operators handleClick={handleClick} />

    </div>
  );
};
export default Calculator;
