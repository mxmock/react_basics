import { useState } from "react";
import { useDispatch } from "react-redux";
import mc from "./green-block.module.scss";
import { decrement, increment, incrementByAmount } from "../../redux/reducers/counter.slice";

const GreenBlock = ({ click }) => {
  const handleChangeAmount = (value) => {
    if (value === "") return;
    setAmount(parseInt(value));
  };

  const handleIncrementByAmount = (amount) => {
    console.log("increment by amount");
    dispatch(incrementByAmount({ amount }));
  };

  const handleIncrement = () => {
    console.log("increment");
    dispatch(increment());
  };

  const handleDecrement = () => {
    console.log("decrement");
    dispatch(decrement());
  };

  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  return (
    <div
      className={mc.container}
      onClick={() => click()}
    >
      <p>green block</p>

      <button
        type="button"
        onClick={handleIncrement}
      >
        <span>Increment</span>
      </button>

      <button
        type="button"
        onClick={handleDecrement}
      >
        <span>Decrement</span>
      </button>

      <input
        type="number"
        value={amount}
        onChange={(e) => handleChangeAmount(e.target.value)}
      />

      <button
        type="button"
        onClick={() => handleIncrementByAmount(amount)}
      >
        <span>Increment by amount</span>
      </button>
    </div>
  );
};

export default GreenBlock;
