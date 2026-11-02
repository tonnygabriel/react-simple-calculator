import { createRoot } from "react-dom/client";
import { useState } from "react";

const root = createRoot(document.getElementById("root"));

export default function App() {

  return (
    <div className="container">
      <div className="input">
        <input type="number" />
      </div>
      <button className="reset">
        AC
      </button>
      <button className="negative">
        +/-
      </button>
      <button className="modulus">
        %
      </button>
      <button className="division">
        ÷
      </button>
      

      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="multiplication">×</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="substract">-</button>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="addition">+</button>

      <button className="zero">0</button>
      <button>.</button>
      <button className="equal">=</button>
    </div>
  )
}


root.render(
  <App />
)