import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import keysMap from '../../utils/keysMap.js';
import { useCalculator } from '../../hooks/useCalculator';
import './Calculator.css';

const Calculator = () => {
  const [display, inputHandler] = useCalculator();

  return (
    <div className='container-fluid col-12 col-sm-10 col-lg-6 my-4 mx-auto p-2 p-sm-4 d-flex flex-column justify-content-center align-items-center rounded bg-secondary calculator'>
      <Display displayValue={display}></Display>
      <Keypad inputHandler={inputHandler} keysMap={keysMap}></Keypad>
    </div>
  );
};

export default Calculator;
