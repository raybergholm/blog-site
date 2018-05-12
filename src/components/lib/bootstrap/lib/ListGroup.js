import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

import ListGroupItem from "./ListGroupItem";

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

const ListGroup = ({ id, style, children, listType = LIST_GROUP_TYPE.Standard, items, ...props }) => {
  const listItems = items.map((entry, index) => (
    <ListGroupItem key={index} type={listType} data={entry}>
      {children}
    </ListGroupItem>
  ));

  switch (listType) {
    case LIST_GROUP_TYPE.Standard:
      return (<ul id={id || null} style={style || null} className={buildClassName(props)}>
        {listItems}
      </ul>);
    case LIST_GROUP_TYPE.Link:
    case LIST_GROUP_TYPE.Button:
      return (<div id={id || null} style={style || null} className={buildClassName(props)}>
        {listItems}
      </div>);
    default:
      return null;
  }
};
export default ListGroup;

ListGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  listType: PropTypes.string,
  style: PropTypes.object
};
