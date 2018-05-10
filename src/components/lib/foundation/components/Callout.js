import React from "react";
import PropTypes from "prop-types";

import { Colors, Sizes } from "../Foundation";
import { generateClassName } from "./utils";

const buildClassName = ({ primary, secondary, success, warning, alert, small, large }) => {
  const BASE_CLASSNAME = "callout";
  const tokens = [BASE_CLASSNAME];

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

  if (small) {
    tokens.push(Sizes.SMALL);
  } else if (large) {
    tokens.push(Sizes.LARGE);
  }

  return generateClassName(tokens);
};

const CloseButton = () => (
  <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button>
);

const Callout = ({ id, style, children, closable, ...others }) => (
  <div id={id || null} style={style || null} data-closable={closable || null} className={buildClassName(others)}>
    {children}
    {closable && <CloseButton />}
  </div>
);

export default Callout;

Callout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  closable: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};
