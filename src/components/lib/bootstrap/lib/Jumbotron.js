import React from "react";
import PropTypes from "prop-types";

import Container from "./layout/Container";

const Jumbotron = ({ id, style, children, fluid }) => {
  let component;

  if (fluid) {
    component = (
      <div id={id || null} style={style || null} className="jumbotron jumbotron-fluid">
        <Container>
          {children}
        </Container>
      </div>
    );
  } else {
    component = (
      <div id={id || null} style={style || null} className="jumbotron">
        {children}
      </div>
    );
  }

  return component;
};

export default Jumbotron;

Jumbotron.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  fluid: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.object
};
