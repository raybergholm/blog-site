import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

import MenuItem from "./MenuItem";

const buildClassName = ({ simple, vertical, expanded, nested, alignment, icons }) => {
  const BASE_CLASSNAME = "menu";
  const tokens = [BASE_CLASSNAME];

  if (simple) {
    tokens.push("full");
  }

  if (vertical) {
    tokens.push("vertical");
  }

  if(expanded) {
    tokens.push("expanded");
  }

  if(nested) {
    tokens.push("nested");
  }

  if (alignment) {
      tokens.push(alignment);
  }

  if (icons) {
    tokens.push("icons");
    tokens.push(icons);
  }

  return generateClassName(tokens);
};

const Menu = ({ id, style, items, ...others }) => (
  <ul id={id || null} style={style|| null} className={buildClassName(others)}>
    {items.map(({ link, text, ...others }, index) => (<MenuItem key={index} link={link} text={text} {...others} />))}
  </ul>
);

export default Menu;

Menu.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.object,
  style: PropTypes.object
};