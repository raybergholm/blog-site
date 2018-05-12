import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";

const buildClassName = ({ bootstrapStyle, active, disabled, extras }) => {
  const tokens = [];

  tokens.push("list-group-item");
  tokens.push("list-group-item-action");

  if (bootstrapStyle) {
    tokens.push(`list-group-item-${bootstrapStyle}`);
  }

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

const ButtonListGroupItem = ({ id, style, action, text, ...props }) => (
  <button id={id || null} style={style || null} type="button" onClick={action} className={buildClassName(props)}>
    {text}
  </button>
);

export default ButtonListGroupItem;

ButtonListGroupItem.propTypes = {
  action: PropTypes.func,
  id: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
};
