'use client'

import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleOperator = (operator: string) => {
    setInput((prev) => prev + operator);
  };

  const handleClick = (digit: string) => {
    setInput((prev) => prev + digit);
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  const handleClear = () => setInput('');

  return (
    <div className="max-w-xs mx-auto p-4">
      <div>
        <div className="mb-4 p-5 border rounded text-xl bg-gray-100 text-right">{input}</div>


        <div className="grid grid-cols-3 gap-2 mb-2">
          {['+', '-', '*', '/'].map((op) => (
            <button
              key={op}
              onClick={() => handleOperator(op)}
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {op}
            </button>
          ))}

          {[...'1234567890.'].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {num}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2 mb-2">
          
          <button
            onClick={handleEqual}
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            =
          </button>
          <button
            onClick={handleClear}
            className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            AC
          </button>

        </div>
      </div>
    </div>
  );
}