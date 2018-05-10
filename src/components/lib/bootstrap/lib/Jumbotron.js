import React from "react";
import PropTypes from "prop-types";

import Container from "./layout/Container";

const Jumbotron = ({ children, fluid }) => {
  let component;

  if (fluid) {
    component = (
      <div className="jumbotron jumbotron-fluid">
        <Container>
          {children}
        </Container>
      </div>
    );
  } else {
    component = (
      <div className="jumbotron">
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
  fluid: PropTypes.bool
};
