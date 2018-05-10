import React from "react";
import PropTypes from "prop-types";

import ListGroupItem from "./ListGroupItem";

import { generateClassName } from "../utils/classNames";

const buildClassName = ({ extras }) => {
  const tokens = [];

  tokens.push("sticky");

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const ListGroupItem = ({ items, ...props }) => (
  <div className={buildClassName(props)}>
    {items.map(({ link, text, ...others }, index) => (<MenuItem key={index} link={link} text={text} {...others} />))}
  </div>
);

const Menu = ({ id, style, items, ...others }) => (
  <ul id={id || null} style={style|| null} className={buildClassName(others)}>
    {items.map(({ link, text, ...others }, index) => (<MenuItem key={index} link={link} text={text} {...others} />))}
  </ul>
);

export default ListGroupItem;

ListGroupItem.propTypes = {
  bottomAnchor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  topAnchor: PropTypes.string
};
