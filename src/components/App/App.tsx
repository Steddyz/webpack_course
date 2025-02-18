import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>

      <div className={classes.value}>{counter}</div>
      <button className={classes.button} onClick={increment}>
        count
      </button>
      <Outlet />
    </div>
  );
};
