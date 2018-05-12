import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

export const BUTTON_TYPE = {
  Button: "button",
  // Input: "input",
  Link: "link"
};

export const BUTTON_SIZE = {
  Small: "btn-sm",
  Large: "btn-large"
};

const buildClassName = ({ bootstrapStyle, size, outline, block, active, disabled, extras }) => {
  const tokens = [];

  tokens.push("btn");

  if (bootstrapStyle) {
    tokens.push(`btn-${outline ? "outline-" : ""}${bootstrapStyle}`);
  }

  if (size) {
    tokens.push(size);
  }

  if (block) {
    tokens.push("btn-block");
  }

  if (active) {
    tokens.push("active");
  } else if (disabled) {
    tokens.push("disabled");
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Button = ({ id, style, children, type, action, disabled, ...props }) => {
  let component;

  switch (type) {
    case BUTTON_TYPE.Button:
      component = (
        <button id={id || null} style={style || null} type="button" onClick={action} disabled={disabled || null} className={buildClassName({ disabled, ...props })}>
          {children}
        </button>
      );
      break;
    // case BUTTON_TYPES.Input: // TODO: implement as a different component?
    //   component = (
    //     <input className="btn btn-primary" type="button" value="Input" />
    //   );
    //   break;
    case BUTTON_TYPE.Link:
      component = (
        <a id={id || null} style={style || null}>
          {children}
        </a>
      );
      break;
    default:
      component = null;
  }

  return component;
};

export default Button;

Button.propTypes = {
  action: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.style,
  type: PropTypes.string.isRequired
};
