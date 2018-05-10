import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

const buildClassName = ({ extras }) => {
  const tokens = [];

  tokens.push("sticky");

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Sticky = ({ id, style, children, topAnchor, bottomAnchor, ...props }) => (
  <div id={id || null} style={style || null} className={buildClassName(props)}>
    {children}
  </div>
);

export default Sticky;

Sticky.propTypes = {
  bottomAnchor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object,
  topAnchor: PropTypes.string
};
