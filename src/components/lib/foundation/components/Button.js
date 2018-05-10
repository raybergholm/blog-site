import React from "react";
import PropTypes from "prop-types";

import { Colors, Sizes } from "../Foundation";
import { generateClassName } from "./utils";

const buildClassName = ({ dropdown, hollow, clear, disabled, primary, secondary, success, warning, alert, tiny, small, large, expanded }) => {
  const BASE_CLASSNAME = "button";
  const tokens = [BASE_CLASSNAME];

  if (dropdown) {
    tokens.push("dropdown");
  }

  if (hollow) {
    tokens.push("hollow");
  }

  if (clear) {
    tokens.push("clear");
  }

  if (disabled) {
    tokens.push("disabled");
  }

  if (primary) {
    tokens.push(Colors.PRIMARY);
  } else if (secondary) {
    tokens.push(Colors.SECONDARY);
  } else if (success) {
    tokens.push(Colors.SUCCESS);
  } else if (warning) {
    tokens.push(Colors.WARNING);
  } else if (alert) {
    tokens.push(Colors.ALERT);
  }

  if (tiny) {
    tokens.push(Sizes.TINY);
  } else if (small) {
    tokens.push(Sizes.SMALL);
  } else if (large) {
    tokens.push(Sizes.LARGE);
  }

  if (expanded) {
    tokens.push("expanded");
  }

  return generateClassName(tokens);
};

export const BUTTON_MODES = {
  Button: "button",
  Link: "link"
};

const Button = ({ mode, children, action, disabled, ...others }) => {
  let component;

  switch (mode) {
    case BUTTON_MODES.Button:
      component = (
        <button type="button" onClick={action} disabled={disabled || null} className={buildClassName({ disabled, ...others })}>
          {children}
        </button>
      );
      break;
    case BUTTON_MODES.Link:
      component = (
        <a href={action.link} target={action.target} disabled={disabled || null} className={buildClassName({ disabled, ...others })}>
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
  disabled: PropTypes.bool,
  mode: PropTypes.string.isRequired,
  target: PropTypes.string
};
