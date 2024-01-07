import { useState } from "react";

import { TrueSVG, FalseSVG } from "./components/svgElements";

function Palindrome() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(null);

  function isPalindrome(text) {
    let tmp = text;
    const reversed = tmp.split("").reverse().join("");
    const result = text.toLowerCase() === reversed.toLowerCase();
    setAnswer(result);
  }
  function inputHandler(event) {
    setInput(event.target.value);
    setAnswer("");
  }

  return (
    <>
      <div className="card">
        <h1>is {input} a palindrome?</h1>
        <div className="answer">
          {answer === true ? (
            <TrueSVG />
          ) : answer === false ? (
            <FalseSVG />
          ) : null}
        </div>
        <input
          className="input"
          type="text"
          onInput={inputHandler}
          placeholder="enter a word"
        />
        <button className="submit" onClick={() => isPalindrome(input)}>
          Check
        </button>
      </div>
    </>
  );
}

export default Palindrome;
