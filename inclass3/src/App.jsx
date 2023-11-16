import React, { useState, useEffect } from "react";
import "./App.css";

const CounterComponent = () => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("counterValue");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counterValue", count.toString());
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-value"> {count}</div>
      <button className="counter-button" onClick={handleIncrement}>
        +
      </button>
      <button className="counter-button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default CounterComponent;
