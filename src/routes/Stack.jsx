import { useState } from "react";

function Stack() {
  let [count, setCount] = useState(0);
  let [items, setItems] = useState([]);

  function push() {
    if (count > 5) return;
    setCount(count + 1);
    setItems([...items, count]);
  }

  function pop() {
    if (count == 0) return;
    setCount(count - 1);
    const lastIndex = items.length - 1;
    setItems(items.toSpliced(lastIndex, 1));
  }

  return (
    <>
      <h1>A stack of books</h1>
      <div className="stack-container">
        {items.includes(5) && (
          <div className="book">
            <span>5</span>
          </div>
        )}
        {items.includes(4) && (
          <div className="book">
            <span>4</span>
          </div>
        )}
        {items.includes(3) && (
          <div className="book">
            <span>3</span>
          </div>
        )}
        {items.includes(2) && (
          <div className="book">
            <span>2</span>
          </div>
        )}
        {items.includes(1) && (
          <div className="book">
            <span>1</span>
          </div>
        )}
      </div>
      <div className="btn-group">
        <button onClick={push}>add item</button>
        <button onClick={pop}>remove item</button>
      </div>
    </>
  );
}

export default Stack;
