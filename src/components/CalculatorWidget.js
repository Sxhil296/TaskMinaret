import React, { useState } from 'react';

const CalculatorWidget = () => {
  const [input, setInput] = useState('');
  
  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Calculator</h2>
      <div className="flex flex-col">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-100 p-2 mb-2 rounded"
        />
        <div className="grid grid-cols-4 gap-2">
          {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/'].map((value, index) => (
            <button
              key={index}
              className={`rounded bg-gray-300 p-2 ${value === '=' ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => {
                if (value === '=') {
                  calculateResult();
                } else if (value === 'C') {
                  clearInput();
                } else {
                  handleButtonClick(value);
                }
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorWidget;