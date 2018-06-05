import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";

const buildClassName = ({ fluid, extras }) => {
  const tokens = [];

  tokens.push("card");

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Card = ({ id, style, children, header, ...props }) => (
  <div id={id || null} style={style || null} className={buildClassName(props)}>
    {header && (
      <div className="card-header">
        {header}
      </div>
    )}
    <div className="card-body">
      {children}
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  id: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  style: PropTypes.object
};
