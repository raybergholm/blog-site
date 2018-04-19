import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const buildClassName = ({ margin, padding, collapse }) => {
  const BASE_CLASSNAME = "grid-x";
  const tokens = [BASE_CLASSNAME];

  if (margin) {
    tokens.push("grid-margin-x");
  }

  if (padding) {
    tokens.push("grid-padding-x");
  }

  if (collapse) {
    tokens.push(`${collapse}-margin-collapse`);
  }

  return generateClassName(tokens);
};

export const Row = ({ id, style, children, ...others }) => (
  <div id={id || null} style={style || null} className={buildClassName(others)}>{children}</div>
);

export default Row;

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};