import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

const buildClassName = ({ style, dismissable, extras }) => {
  const tokens = [];

  tokens.push("alert");

  if (style) {
    tokens.push(`alert-${style}`);
  }

  if (dismissable) {
    tokens.push("alert-dismissable");
    tokens.push("fade");
    tokens.push("show");
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Alert = ({ children, dismissable, ...props }) => (
  <div className={buildClassName({ dismissable, ...props })} role="alert">
    {children}
    {dismissable && (
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    )}
  </div>
);

export default Alert;

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  dismissable: PropTypes.bool
};
