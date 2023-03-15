import mc from "./blue-block.module.scss";
import { useSelector } from "react-redux";
import { SIZES } from "../../constants/size.constants";

const BlueBlock = (props) => {
  const { size } = props;

  // const counter = useSelector((store) => {
  //   return store.counter;
  // });

  const { counterValue, sizeValue, color, width, height } = useSelector((store) => {
    return {
      counterValue: store.counter.value,
      color: store.counter.color,
      width: store.size.width,
      height: store.size.height,
      sizeValue: store.size.value,
    };
  });

  return (
    <div className={`${mc.container} ${getSize(size, mc)}`}>
      <p>blue block</p>

      <p>{color}</p>
      <p>{counterValue}</p>
      <p>{width}</p>
      <p>{height}</p>
      <p>{sizeValue}</p>
    </div>
  );
};

const getSize = (size, mc) => {
  switch (size) {
    case SIZES.normal:
      return mc.normal;
    case SIZES.small:
      return mc.small;
    case SIZES.big:
      return mc.big;
    default:
      return mc.normal;
  }
};

export default BlueBlock;
