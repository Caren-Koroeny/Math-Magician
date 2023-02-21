import Display from './Display';
import NumbersKeys from './NumbersKeys';
import Operators from './Operators';
import '../styles/Calculator.css';

const Calculator = () => (
  <div className="mainContainer">
    {/* add child Components */}
    <Display />
    <NumbersKeys />
    <Operators />

  </div>
);

export default Calculator;
