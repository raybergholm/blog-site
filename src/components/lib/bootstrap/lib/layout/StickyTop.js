import React from "react";
import PropTypes from "prop-types";

const StickyTop = ({ id, style, children }) => (
  <div id={id || null} style={style || null} className="sticky-top">
    {children}
  </div>
);

export default StickyTop;

StickyTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};
