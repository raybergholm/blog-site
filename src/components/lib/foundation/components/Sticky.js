import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const buildClassName = () => {
  const BASE_CLASSNAME = "sticky";
  const tokens = [BASE_CLASSNAME];

  return generateClassName(tokens);
};

const configureSticky = (configs) => {
  const stickyConfigProps = ["data-options", "data-top-anchor", "data-btm-anchor", "data-stick-to"];

  const stickyConfig = {};

  for (const prop in configs) {
    if (stickyConfigProps.indexOf(prop) > -1) {
      stickyConfig[prop] = configs[prop];
    }
  }

  return stickyConfig;
};

const Sticky = ({ id, style, children, ...others }) => (
  <div id={id} style={style} data-sticky {...configureSticky(others)} className={buildClassName(others)}>
    {children}
  </div>
);

export default Sticky;

Sticky.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};