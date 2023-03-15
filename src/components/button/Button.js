// import "./App.css";
import mc from "./button.module.scss";

const Button = (props) => {
  // const onClick = props.onClick;
  // const color = props.color;
  const { click, color } = props;

  // const handleClick = () => {
  //   console.log("handle click");
  //   click();
  // };

  return (
    <button
      type="button"
      className={mc.red}
      // onClick={handleClick}
      onClick={() => click()}
    >
      test button
    </button>
  );
};

export default Button;
