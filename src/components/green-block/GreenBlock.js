import { useDispatch } from "react-redux";
import mc from "./green-block.module.scss";
import { decrement, increment } from "../../redux/reducers/counter.slice";

const GreenBlock = (props) => {
  const { click } = props;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    console.log("increment");
    dispatch(increment());
  };

  const handleDecrement = () => {
    console.log("decrement");
    dispatch(decrement());
  };

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
    </div>
  );
};

export default GreenBlock;
