import { useState } from "react";

function Bubble_sort() {
  const [raw, setRaw] = useState([]);
  const [sorted, setSorted] = useState([]);

  function inputHandler(event) {
    let inputArray = event.target.value.split(",");
    setRaw(inputArray);
  }

  function sort() {
    let numbers = [...raw];
    let result = [];
    while (numbers.length > 0) {
      let length = numbers.length - 1;
      for (let index = 0; index < length; index++) {
        if (+numbers[index] > +numbers[index + 1]) {
          let temp = numbers[index];
          numbers[index] = numbers[index + 1];
          numbers[index + 1] = temp;
        }
      }
      const last = numbers.pop();
      result.unshift(last);
    }
    setSorted([...result]);
  }

  return (
    <>
      <div className="card">
        <h1>Bubble Sort</h1>
        <h3>Unsorted: {raw.join(", ")}</h3>
        <h3>Sorted: {sorted.join(", ")}</h3>
        <input
          className="input"
          type="text"
          onInput={inputHandler}
          placeholder="enter numbers, eg 3, 4, 75, 9.2"
        />
        <button className="submit" onClick={sort}>
          Sort
        </button>
      </div>
    </>
  );
}

export default Bubble_sort;
