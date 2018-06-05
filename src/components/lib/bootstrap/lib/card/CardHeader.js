import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";

const buildClassName = ({ extras }) => {
  const tokens = [];

  tokens.push("card-header");

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const CardHeader = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style || null} className={buildClassName(props)}>
      {children}
  </div>
);

export default CardHeader;

CardHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};
