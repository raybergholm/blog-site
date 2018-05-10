import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";
import { SIZES } from "../../utils/sizes";

const buildClassName = ({ xsmall, small, medium, large, xlarge, extras }) => {
  const base = "col";

  const tokens = [];

  tokens.push(base);

  if (xsmall) {
    tokens.push(`col-${xsmall}`);
  }

  if (small) {
    tokens.push(`col-${SIZES.Small}-${small}`);
  }

  if (medium) {
    tokens.push(`col-${SIZES.Medium}-${medium}`);
  }

  if (large) {
    tokens.push(`col-${SIZES.Large}-${large}`);
  }

  if (xlarge) {
    tokens.push(`col-${SIZES.XLarge}-${xlarge}`);
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Col = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style || null} className={buildClassName(props)}>
    {children}
  </div>
);

export default Col;

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};
