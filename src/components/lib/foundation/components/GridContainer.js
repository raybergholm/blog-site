import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const buildClassName = ({ full, fluid }) => {
  const BASE_CLASSNAME = "grid-container";
  const tokens = [BASE_CLASSNAME];

  if (full) {
    tokens.push("full");
  } else if (fluid) {
    tokens.push("fluid");
  }

  return generateClassName(tokens);
};

export const GridContainer = ({ id, style, children, ...others }) => (
  <article id={id || null} style={style || null} className={buildClassName(others)}>{children}</article>
);

export default GridContainer;

// PropType validation

GridContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};