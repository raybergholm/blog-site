import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";

const buildClassName = ({ fluid, extras }) => {
  const tokens = [];

  tokens.push(fluid ? "container" : "container-fluid");

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Container = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style || null} className={buildClassName(props)}>
    {children}
  </div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};
