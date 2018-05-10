import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

const buildClassName = ({ bootstrapStyle, pill, extras }) => {
  const tokens = [];

  tokens.push("badge");

  if (bootstrapStyle) {
    tokens.push(`badge-${bootstrapStyle}`);
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

const Badge = ({ id, style, children, link, ...props }) => {
  if (link) {
    return (<a id={id || null} style={style || null} href={link} className={buildClassName(props)}>
      {children}
    </a>);
  } else {
    return (<span id={id || null} style={style || null} className={buildClassName(props)}>
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
  id: PropTypes.string,
  link: PropTypes.string,
  style: PropTypes.object
};
