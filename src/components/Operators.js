import PropTypes from 'prop-types';
import React from 'react';

const Operators = ({ handleClick }) => (
  <>
    <button type="button" className="btn btn-top" onClick={handleClick}>AC</button>
    <button type="button" className="btn btn-top" onClick={handleClick}>+/-</button>
    <button type="button" className="btn btn-top" onClick={handleClick}>%</button>
    <button type="button" className="btn btn-side" onClick={handleClick}>÷</button>
    <button type="button" className="btn btn-side" onClick={handleClick}>x</button>
    <button type="button" className="btn btn-side" onClick={handleClick}>-</button>
    <button type="button" className="btn btn-side" onClick={handleClick}>+</button>
    <button type="button" className="btn btn-side" onClick={handleClick}>=</button>
  </>

);

Operators.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Operators;
