import React from "react";
import PropTypes from "prop-types";

const FixedBottom = ({ id, style, children }) => (
  <div id={id || null} style={style || null} className="fixed-bottom">
    {children}
  </div>
);

export default FixedBottom;

FixedBottom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};
