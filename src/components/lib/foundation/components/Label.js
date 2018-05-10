import React from "react";
import PropTypes from "prop-types";

import { Colors } from "../Foundation";
import { generateClassName } from "./utils";

const buildClassName = ({ primary, secondary, success, warning, alert }) => {
  const BASE_CLASSNAME = "label";
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

  return generateClassName(tokens);
};

const Label = ({ id, style, text, ...others }) => (
  <div id={id || null} style={style || null} className={buildClassName(others)}>{text}</div>
);

export default Label;

Label.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
};