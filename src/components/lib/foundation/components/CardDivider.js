import React from "react";
import PropTypes from "prop-types";

const BASE_CLASSNAME = "card-divider";

export const CardDivider = ({ id, style, children }) => (
  <div id={id || null} style={style || null} className={BASE_CLASSNAME}>
    {children}
  </div>
);

export default CardDivider;

CardDivider.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  style: PropTypes.object
};