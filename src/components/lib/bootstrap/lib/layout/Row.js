import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

const buildClassName = ({ align, alignBy, justify, noGutters, extras }) => {
  const tokens = [];

  tokens.push("row");

  if (align && alignBy) {
    tokens.push(`align-${alignBy}-${align}`);
  }

  if (justify) {
    tokens.push(justify);
  }

  if (noGutters) {
    tokens.push("no-gutters");
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Row = ({ children, ...props }) => (
  <div className={buildClassName(props)}>
    {children}
  </div>
);

export default Row;

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};
