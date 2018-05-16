import React from "react";
import PropTypes from "prop-types";

const FixedTop = ({ id, style, children }) => (
  <div id={id || null} style={style || null} className="fixed-top">
    {children}
  </div>
);

export default FixedTop;

FixedTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};
