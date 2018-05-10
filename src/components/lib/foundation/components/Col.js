import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const buildClassName = ({ margin, padding, collapse, small, medium, large }) => {
  const BASE_CLASSNAME = "grid-y";
  const tokens = [BASE_CLASSNAME];

  if (margin) {
    tokens.push("grid-margin-y");
  }

  if (padding) {
    tokens.push("grid-padding-y");
  }

  if (collapse) {
    tokens.push(`${collapse}-margin-collapse`);
  }

  if(small){
    tokens.push(`small-up-${small}`);
  }

  if(medium){
    tokens.push(`medium-up-${medium}`);
  }

  if(large){
    tokens.push(`large-up-${large}`);
  }

  return generateClassName(tokens);
};

export const Col = ({ id, style, children, ...others }) => (
  <div id={id || null} style={style || null} className={buildClassName(others)}>{children}</div>
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