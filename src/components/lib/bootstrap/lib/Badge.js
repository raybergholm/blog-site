import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

const buildClassName = ({ style, pill, extras }) => {
  const tokens = [];

  tokens.push("badge");

  if (style) {
    tokens.push(`badge-${style}`);
  }

  if (pill) {
    tokens.push("badge-pill");
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Badge = ({ link, children, ...props }) => {
  if (link) {
    return (<a href={link} className={buildClassName(props)}>
      {children}
    </a>);
  } else {
    return (<span className={buildClassName(props)}>
      {children}
    </span>);
  }
};

export default Badge;

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  dismissable: PropTypes.bool
};
