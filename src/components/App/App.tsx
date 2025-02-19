import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import Calendar from "../../assets/calendar.svg";

function TODO(a: number) {
  console.log("zxc");
}

export const App = () => {
  const [counter, setCounter] = useState(0);

  TODO("5252");

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  if (__PLATFORM__ === "mobile") {
    return <div>Mobile</div>;
  }

  if (__PLATFORM__ === "desktop") {
    return <div>Desktop</div>;
  }

  return (
    <div>
      <h1>{__PLATFORM__}</h1>
      <div>
        <img style={{ width: "50px" }} src={avatar} alt="avatar" />
      </div>
      <div>
        <Calendar width={50} height={50} />
      </div>
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
