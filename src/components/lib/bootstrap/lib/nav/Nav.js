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

const Nav = ({ id, style, items, ...props }) => (
  <nav id={id || null} style={style || null} className={buildClassName(props)}>
    {items && items.map((itemProperties, index) => (<NavLink key={index} {...itemProperties} />))}
  </nav>
);
export default Nav;

Nav.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.object
};
