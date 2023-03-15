// import "./App.css";
import { useState } from "react";
import mc from "./app.module.scss";
import Button from "../button/Button";

const obj = {
  red: "red",
  ["is-active"]: "is active",
};

// obj.red            =>   'red'
// obj['is-active']   =>   'is active'

const App = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="red">
      <p className={`big ${mc.red} ${isActive ? mc["is-active"] : ""}`}>Yo</p>

      <Button click={handleClick} />
    </div>
  );
};

export default App;
