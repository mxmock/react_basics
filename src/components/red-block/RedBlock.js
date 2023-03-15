import GreenBlock from "../green-block/GreenBlock";
import mc from "./red-block.module.scss";

const RedBlock = (props) => {
  const { click } = props;

  return (
    <div className={mc.container}>
      <p>red block</p>

      <GreenBlock click={click} />
    </div>
  );
};

export default RedBlock;
