import mc from "./blue-block.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { SIZES } from "../../constants/size.constants";
import { changeDescription, uploadFile, uploadImage } from "../../redux/reducers/file.slice";

const BlueBlock = (props) => {
  const { size } = props;
  const dispatch = useDispatch();

  const handleFileUpload = (file) => {
    dispatch(uploadFile({ fileImage: file }));
  };

  const handleChangeDescription = (value) => {
    dispatch(changeDescription({ value }));
  };

  const sendFile = () => {
    dispatch(uploadImage({ description, fileImage }));
  };

  const { counterValue, sizeValue, color, width, height, description, fileImage } = useSelector(
    (store) => {
      return {
        counterValue: store.counter.value,
        color: store.counter.color,
        width: store.size.width,
        height: store.size.height,
        sizeValue: store.size.value,
        description: store.file.description,
        fileImage: store.file.fileImage,
      };
    }
  );

  return (
    <div className={`${mc.container} ${mc.big}`}>
      <p>blue block</p>

      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => handleChangeDescription(e.target.value)}
        />
      </div>

      <div>
        <input
          type="file"
          onChange={(e) => handleFileUpload(e.target.files[0])}
        />
      </div>

      <button
        type="button"
        onClick={sendFile}
      >
        Send file
      </button>
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
