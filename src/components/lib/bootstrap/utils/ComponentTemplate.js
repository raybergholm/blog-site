import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

const buildClassName = () => {
  const tokens = [];

  tokens.push("WHATEVER_THE_BASE_IS");


  return generateClassName(tokens);
};

const WHATEVER = ({ children, ...props }) => (
  <div className={buildClassName(props)}>
    {children}
  </div>
);

export default WHATEVER;

WHATEVER.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};
