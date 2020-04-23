import React from "react";
import PropTypes from "prop-types";
import classname from "classnames";
import styles from "./styles.scss";

const cg_BUTTON_COLORS = {
  linearLightYellow: "linearLightYellow",
  linearYellow: "linearYellow",
};

const CgButton = (props) => {
  const { color, children, handleClick, className, type, size } = props;
  const cgBtnClass = classname(styles.cgButton, className, {
    [styles.linearYellow]: color === cg_BUTTON_COLORS.linearYellow,
    [styles.sizeXS]: size === "xs",
  });
  return (
    <button className={cgBtnClass} onClick={handleClick} type={type}>
      {children}
    </button>
  );
};

CgButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

CgButton.defaultProps = {
  color: cg_BUTTON_COLORS.linearYellow, // [linearYellow, linearLightYellow],
  size: "xs", // ['xs', 'md', 'lg']
};

export default CgButton;
