import PropTypes from "prop-types";

const CircleBox = (props) => {
  const { children, classes } = props;

  return (
    <div
      className={`relative max-w-[40rem] min-w-[35rem] max-h-[80rem] min-h-[38rem] bg-[var(--primaryColor)] overflow-hidden  aspect-square transition duration-200 ease-in-out ${classes}`}
    >
      {children}
    </div>
  );
};

CircleBox.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

export default CircleBox;
