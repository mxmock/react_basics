import mc from "./green-block.module.scss";

const GreenBlock = (props) => {
  const { click } = props;

  return (
    <div
      className={mc.container}
      onClick={() => click()}
    >
      <p>green block</p>
    </div>
  );
};

export default GreenBlock;
