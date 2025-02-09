import React, { MouseEventHandler, useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}>count</button>
    </div>
  );
};
