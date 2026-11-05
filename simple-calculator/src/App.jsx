import { createRoot } from "react-dom/client";
import { useState, useRef } from "react";

const root = createRoot(document.getElementById("root"));

export default function App() {
  const [num1, setNum] = useState(0);
  const output = useRef("");

  let obj = useRef({});

  // function handleclick(e){

  // }

  function handleDigit(e){
    output.current = output.current + e.target.innerText;
    setNum(Number(output.current));
  }

  function op(e){
    obj.current["num1"] = Number(output.current);
    output.current = "";
    setNum(0);
    obj.current["op"] = e.target.innerText;
    console.log(obj.current);
    // return;
  }

  const reset = () =>{
    setNum(0);
    output.current = "";
    obj.current = {};
  };

  // const addition = () =>{
  //   obj.current["num1"] = output.current;
  //   output.current = "";
  //   setNum(0);
  //   console.log(obj.current);
  // };


  const equal = () =>{
    obj.current["num2"] = output.current;
    output.current = "";
    console.log(obj.current);
    let result = 0;

    switch (obj.current["op"]) {

      //percent
      case "%":
        result = obj.current["num1"] / 100;
        break;
      //diviison
      case "÷":
        result = Number(obj.current["num1"]) / Number(obj.current["num2"]);
        break;
      
      //multiplication
      case "×":
        result = Number(obj.current["num1"]) * Number(obj.current["num2"]);
        break;
      
      //substract
      case "-":
        result = Number(obj.current["num1"]) - Number(obj.current["num2"]);
        break;

      case "+":
        result = Number(obj.current["num1"]) + Number(obj.current["num2"]);
        break;

      default: console.error("Operator or numbers not recognized!", obj.current); 
        break;
    }

    obj.current = {};
    setNum(result);
  };


  return (
    <div className="container grid grid-cols-4 grid-rows-6 border divide-x divide-y divide-gray-500 h-120 w-[20rem]">
      <div className="input col-span-4 bg-gray-500 text-right px-1 text-white py-7 text-4xl">
        {num1}
      </div>
      <button className="reset" onClick={reset}>
        AC
      </button>
      <button className="negative">
        +/-
      </button>
      <button className="modulus" onClick={op}>
        %
      </button>
      <button className="division bg-amber-600 text-white" onClick={op}>
        ÷
      </button>
      

      <button className="seven" onClick={handleDigit}>7</button>
      <button className="eight" onClick={handleDigit}>8</button>
      <button className="nine" onClick={handleDigit}>9</button>
      <button className="multiplication bg-amber-600 text-white" onClick={op}>×</button>

      <button className="four" onClick={handleDigit}>4</button>
      <button className="five" onClick={handleDigit}>5</button>
      <button className="six" onClick={handleDigit}>6</button>
      <button className="substract bg-amber-600 text-white" onClick={op}>-</button>

      <button className="one" onClick={handleDigit}>1</button>
      <button className="two" onClick={handleDigit}>2</button>
      <button className="three" onClick={handleDigit}>3</button>
      <button className="addition bg-amber-600 text-white" onClick={op}>+</button>

      <button className="zero col-span-2" onClick={handleDigit}>0</button>
      <button>.</button>
      <button className="equal bg-amber-600 text-white" onClick={equal}>=</button>
    </div>
  )
}


root.render(
  <App />
)