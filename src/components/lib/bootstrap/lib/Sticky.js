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

const Sticky = ({ topAnchor, bottomAnchor, children, ...props }) => (
  <div>
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
  topAnchor: PropTypes.string
};
