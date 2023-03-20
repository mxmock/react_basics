// import "./App.css";
import { useState } from "react";
import mc from "./app.module.scss";
import RedBlock from "../red-block/RedBlock";
import BlueBlock from "../blue-block/BlueBlock";
import { SIZES } from "../../constants/size.constants";

const App = () => {
  const [size, setSize] = useState(SIZES.small);

  const handleSize = () => {
    // setSize(size === SIZES.big ? SIZES.normal : SIZES.big);

    setSize((actualState) => {
      if (actualState === SIZES.big) {
        return SIZES.normal;
      } else if (actualState === SIZES.small) {
        return SIZES.normal;
      } else {
        return SIZES.big;
      }
    });

    // setSize((actualState) => (actualState === SIZES.big ? SIZES.normal : SIZES.big));
  };

  return (
    <div className={mc.container}>
      <RedBlock />
      <BlueBlock />
    </div>
  );
};

export default App;
