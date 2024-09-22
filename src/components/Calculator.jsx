import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result ? `= ${result}` : ''}</div>
      </div>
      <div className="calculator-buttons">
        {['C', '(', ')', '/'].map((btn) => (
          <button key={btn} className="btn operator" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {['7', '8', '9', '*'].map((btn) => (
          <button key={btn} className="btn" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {['4', '5', '6', '-'].map((btn) => (
          <button key={btn} className="btn" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {['1', '2', '3', '+'].map((btn) => (
          <button key={btn} className="btn" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {['0', '.', '='].map((btn) => (
          <button key={btn} className={`btn ${btn === '=' ? 'equals' : ''}`} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
