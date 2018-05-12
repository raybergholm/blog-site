import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";

const buildClassName = ({ active, disabled, extras }) => {
  const tokens = [];

  tokens.push("nav-item");

  if(active){
    tokens.push("active");
  }else if(disabled){
    tokens.push("disabled");
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const TabItem = ({ id, style, children, ...props }) => (
  <li id={id || null} style={style || null} className={buildClassName(props)}>
    {children}
  </li>
);

export default TabItem;

TabItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
};
