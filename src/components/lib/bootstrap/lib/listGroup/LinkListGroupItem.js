import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../../utils/classNames";

const buildClassName = ({ bootstrapStyle, active, disabled, extras }) => {
  const tokens = [];

  tokens.push("list-group-item");

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

const LinkListGroupItem = ({ id, style, linkUrl, text, ...props }) => (
  <a id={id || null} style={style || null} href={linkUrl} className={buildClassName(props)}>
    {text}
  </a>
);

export default LinkListGroupItem;

LinkListGroupItem.propTypes = {
  id: PropTypes.string,
  linkUrl: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
};
