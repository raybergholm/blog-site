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

const ListGroup = ({ id, style, items, ...props }) => (
  <div id={id || null} style={style|| null} className={buildClassName(props)}>
    {items.map(({ link, text, ...others }, index) => (<ListGroupItem key={index} link={link} text={text} {...others} />))}
  </div>
);

const Menu = ({ id, style, items, ...others }) => (
  <ul id={id || null} style={style|| null} className={buildClassName(others)}>
    {items.map(({ link, text, ...others }, index) => (<MenuItem key={index} link={link} text={text} {...others} />))}
  </ul>
);

export default ListGroup;

ListGroup.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.object
};
