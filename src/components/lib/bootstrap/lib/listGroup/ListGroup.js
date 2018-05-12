import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";

import StandardListGroupItem from "./StandardListGroupItem";
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

const wrapStandard = () => {
  
};

const ListGroup = ({ id, style, children, listType = LIST_GROUP_TYPE.Standard, itemDescriptors, ...props }) => {
  let wrappedElements;
  switch (listType) {
    case LIST_GROUP_TYPE.Standard:
      wrappedElements = wrapStandard(children);
      return (<ul id={id || null} style={style || null} className={buildClassName(props)}>
        {wrappedElements}
      </ul>);
    case LIST_GROUP_TYPE.Link:
      return (<div id={id || null} style={style || null} className={buildClassName(props)}>
        {children.map((itemProperties, index) => (<LinkListGroupItem key={index} {...itemProperties} />))}
      </div>);
    case LIST_GROUP_TYPE.Button:
      return (<div id={id || null} style={style || null} className={buildClassName(props)}>
        {children.map((itemProperties, index) => (<ButtonListGroupItem key={index} {...itemProperties} />))}
      </div>);
    default:
      return null;
  }
};
export default ListGroup;

{children.map((child, index) => {
  return (<StandardListGroupItem key={index} {...itemProperties}>
    {child}
  </StandardListGroupItem>);
})}

ListGroup.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  listType: PropTypes.string,
  style: PropTypes.object
};
