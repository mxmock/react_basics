import mc from "./red-block.module.scss";

const RedBlock = (props) => {
  const { click } = props;

  return (
    <div
      className={mc.container}
      onClick={() => click()}
    >
      <p>red block</p>
    </div>
  );
};

export default RedBlock;
