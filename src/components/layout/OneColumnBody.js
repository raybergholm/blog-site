import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "../lib/bootstrap/react-bootstrap";

const Body = ({ id, style, children, ...others }) => (
  <Container id={id || null} style={style || null} {...others}>
    <Row>
      <Col {...others}>
        {children}
      </Col>
    </Row>
  </Container>
);

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};

export default Body;