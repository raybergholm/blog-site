import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

import { LIST_GROUP_TYPE } from "./ListGroup";

const buildClassName = ({ bootstrapStyle, active, disabled, action, extras }) => {
  const tokens = [];

  tokens.push("list-group-item");

  if (bootstrapStyle) {
    tokens.push(`list-group-item-${bootstrapStyle}`);
  }

  if(active){
    tokens.push("active");
  }else if(disabled){
    tokens.push("disabled");
  }

  if(action){
    tokens.push("list-group-item-action");
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const ListGroupItem = ({ id, style, children, listType = LIST_GROUP_TYPE.Standard, data, ...props }) => {
  switch(listType){
    case LIST_GROUP_TYPE.Standard:
    return (<li className={buildClassName(props)}>
      {children}
      </li>);
    case LIST_GROUP_TYPE.Link:
      return (<a className={buildClassName(props)}>
        {children}
      </a>);
    case LIST_GROUP_TYPE.Button:
    return (<button type="button" className={buildClassName(props)}>
        {children}
      </button>);
  }
};

export default ListGroupItem;

ListGroupItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  listType: PropTypes.string,
  style: PropTypes.object,
  template: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};
