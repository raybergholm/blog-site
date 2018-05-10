import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const buildClassName = ({ menuText, isActive }) => {
  const tokens = [];

  if (menuText) {
    tokens.push("menu-text");
  }
  if (isActive) {
    tokens.push("is-active");
  }

  return generateClassName(tokens);
};

const MenuItem = ({ id, style, link, text, ...others }) => (
  <li id={id || null} style={style|| null} className={buildClassName(others)}>
    {link ? <a href={link}>{text}</a> : text}
  </li>
);

export default MenuItem;

MenuItem.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  link: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
};