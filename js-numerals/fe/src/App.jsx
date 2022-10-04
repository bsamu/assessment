/* eslint-disable */
import { numToWords } from "./util/converter";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="header" data-testid="header">
        <h2>Arabic number to british-english text conversion tool.</h2>
      </div>

      <div className="main">
        <input
          className="inputArea"
          data-testid="inputArea"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <br />
        <button
          className="button"
          data-testid="button"
          onClick={() => {
            setResult(numToWords(inputValue));
          }}
        >
          Click to convert!
        </button>
      </div>

      <div className="result">
        <span data-testid="resultSpan">{result}</span>
      </div>
    </div>
  );
}

export default App;
