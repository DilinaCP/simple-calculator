'use client'

import {useState} from "react";

export default function Calculator(){

  const [numOne, setNumOne] = useState<number | null >(null);
  const [numTwo, setNumTwo] = useState<number | null >(null);
  const [result, setResult] = useState<number | null >(null);

  const addNumbers = () => {
    if (numOne !== null && numTwo !== null){
      setResult(numOne + numTwo);
    }
  };

  const subtractNumbers = () => {
    if (numOne !== null && numTwo !== null){
      setResult( numOne - numTwo);
    }
  };
  const divideNumbers = () => {
    if (numOne !== null && numTwo !== null){
      setResult( numOne / numTwo);
    } else (numOne === 0 )
    {
      alert ("Cannot divide by zero");
    }
  }
  const multiply = () => {
    if (numOne !== null && numTwo !== null){
      setResult (numOne * numTwo);
    }
    }

  const handleNumOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumOne(Number(value));
  }

  const handleNumTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumTwo(Number(value));
  }

  return (
    <>
    <div>
      <h1>Calculator</h1>

      <input type="text" value={numOne} onChange={handleNumOneChange} placeholder="Enter number one"/>
      <input type="text" value={numTwo} onChange={handleNumTwoChange} placeholder="Enter number two"/>


      <button type="button" onClick={addNumbers}> Add </button>
      <button type="button" onClick={subtractNumbers}> Subtract </button>
      <button type="button" onClick={multiply}> Multiply </button>
      <button type="button" onClick={divideNumbers}> Divide </button>


      <div>result : {result}</div>
 
    </div>
   </> 
  );
}
