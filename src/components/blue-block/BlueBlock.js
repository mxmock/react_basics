import mc from "./blue-block.module.scss";
import { SIZES } from "../../constants/size.constants";

const BlueBlock = (props) => {
  const { size } = props;

  return (
    <div className={`${mc.container} ${getSize(size, mc)}`}>
      <p>blue block</p>
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
