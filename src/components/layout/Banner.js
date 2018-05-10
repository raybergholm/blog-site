import React from "react";
import PropTypes from "prop-types";

import { Jumbotron } from "../lib/bootstrap/react-bootstrap";

const Banner = ({ id, style, children }) => (
  <Jumbotron id={id || null} style={style || null}>
    {children}
  </Jumbotron>
);

export default Banner;

Banner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};