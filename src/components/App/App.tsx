import { useState } from "react";
import classes from "./App.module.scss";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <div className={classes.value}>{counter}</div>
      <button className={classes.button} onClick={increment}>
        count
      </button>
    </div>
  );
};
