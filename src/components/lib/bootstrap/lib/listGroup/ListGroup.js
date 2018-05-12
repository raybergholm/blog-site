import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";

import DisplayListGroupItem from "./DisplayListGroupItem";
import LinkListGroupItem from "./LinkListGroupItem";
import ButtonListGroupItem from "./ButtonListGroupItem";

export const LIST_GROUP_TYPE = {
  Standard: "standard",
  Link: "link",
  Button: "button"
};

const buildClassName = ({ flush, extras }) => {
  const tokens = [];

  tokens.push("list-group");

  if (flush) {
    tokens.push("list-group-flush");
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const ListGroup = ({ id, style, listType = LIST_GROUP_TYPE.Link, items, ...props }) => {
  switch (listType) {
    case LIST_GROUP_TYPE.Standard:
      return (<ul id={id || null} style={style || null} className={buildClassName(props)}>
        {items.map((itemProperties, index) => (<DisplayListGroupItem key={index} {...itemProperties} />))}
      </ul>);
    case LIST_GROUP_TYPE.Link:
    return (<div id={id || null} style={style || null} className={buildClassName(props)}>
    {items.map((itemProperties, index) => (<LinkListGroupItem key={index} {...itemProperties} />))}
  </div>);
    case LIST_GROUP_TYPE.Button:
      return (<div id={id || null} style={style || null} className={buildClassName(props)}>
        {items.map((itemProperties, index) => (<ButtonListGroupItem key={index} {...itemProperties} />))}
      </div>);
    default:
      return null;
  }
};
export default ListGroup;

ListGroup.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  listType: PropTypes.string,
  style: PropTypes.object
};
