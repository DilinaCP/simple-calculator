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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xs w-full p-6 border border-blue-400 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-black mb-4 text-2xl font-bold">Simple Calculator</h1>
        <div className="mb-4 p-4 border border-blue-300 rounded text-2xl bg-sky-100 text-right font-bold min-h-[48px]">{input}</div>
        <div className="grid grid-cols-4 gap-2 mb-2">
          <button
            onClick={handleClear}
            className="col-span-3 bg-red-500 text-white py-2 rounded hover:bg-red-600 font-bold"
          >
            AC
          </button>

          <button
            onClick={() => handleOperator('*')}
            className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 font-bold"
          >
            *
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-2">
          {[7,8,9].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 font-bold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('-')}
            className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 font-bold"
          >
            -
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-2">
          {[4,5,6].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 font-bold"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('+')}
            className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 font-bold"
          >
            +
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {[1,2,3].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 font-bold"
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => handleOperator('/')}
            className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 font-bold"
          >
            /
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-2">
          <button
            onClick={() => handleClick('0')}
            className="col-span-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 font-bold"
          >
            0
          </button>
          <button
            onClick={() => handleClick('.')}
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 font-bold"
          >
            .
          </button>

          <button
            onClick={handleEqual}
            className=" bg-green-500 text-white py-2 rounded hover:bg-green-600 font-bold"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}