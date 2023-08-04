import PropTypes from "prop-types";

const CircleBox = (props) => {
  const { children, classes } = props;

  return (
    <div
      className={`relative max-w-[45rem] min-w-[36rem] max-h-[100rem] min-h-[40rem] bg-[var(--primaryColor)] overflow-hidden  aspect-square transition duration-200 ease-in-out ${classes}`}
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
