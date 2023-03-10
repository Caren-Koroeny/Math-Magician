import PropTypes from 'prop-types';
import React from 'react';

const NumbersKeys = ({ handleClick }) => (
  <div className="allNumbers">
    <button type="button" className="btn btn-primary" onClick={handleClick}>7</button>
    <button type="button" className="btn btn-primary" onClick={handleClick}>8</button>
    <button type="button" className="btn btn-primary" onClick={handleClick}>9</button>
    <button type="button" className="btn btn-primary" onClick={handleClick}>4</button>
    <button type="button" className="btn btn-primary" onClick={handleClick}>5</button>
    <button type="button" className="btn btn-primary" onClick={handleClick}>6</button>
    <button type="button" className="btn btn-primary" onClick={handleClick}>1</button>
    <button type="button" className="btn btn-primary" onClick={handleClick}>2</button>
    <button type="button" className="btn btn-primary" onClick={handleClick}>3</button>
    <button type="button" className="btn btn-primary col-span-2" onClick={handleClick}>0</button>
    <button type="button" className="btn btn-primary" onClick={handleClick}>.</button>
  </div>
);
NumbersKeys.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NumbersKeys;
