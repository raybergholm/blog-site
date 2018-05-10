import React from "react";
import PropTypes from "prop-types";

const TopBar = ({ id, style, left, right }) => (
  <nav id={id || null} style={style|| null} className="top-bar">
    <div className="top-bar-left">
      {left}
    </div>
    <div className="top-bar-right">
      {right}
    </div>
  </nav>
);

export default TopBar;

TopBar.propTypes = {
  id: PropTypes.string,
  left: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  right: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  style: PropTypes.object
};