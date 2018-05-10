import React from "react";
import PropTypes from "prop-types";

const BASE_CLASSNAME = "card";

export const Card = ({ id, style, children }) => (
  <div id={id || null} style={style || null} className={BASE_CLASSNAME}>
    {children}
  </div>
);

export default Card;

Card.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  style: PropTypes.object
};