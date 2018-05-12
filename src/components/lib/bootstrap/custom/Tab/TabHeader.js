import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";

import NavLink from "./NavLink";

const buildClassName = ({ vertical, tabs, pills, fill, justified, extras }) => {
  const tokens = [];

  tokens.push("nav");

  if (vertical) {
    tokens.push("flex-column");
  }

  if (tabs) {
    tokens.push("nav-tabs");
  }

  if (pills) {
    tokens.push("nav-pills");
  }

  if (fill) {
    tokens.push("nav-fill");
  }

  if (justified) {
    tokens.push("nav-justified");
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const TabHeader = ({ id, style, children, ...props }) => (
  <ul id={id || null} style={style || null} className={buildClassName(props)}>
    {children}
  </ul>
);
export default TabHeader;

TabHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.object
};
