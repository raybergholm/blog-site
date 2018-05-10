import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "../lib/bootstrap/react-bootstrap";

const Body = ({ id, style, children, left, right, ...others }) => (
  <Container id={id || null} style={style || null} {...others}>
    <Row {...others}>
        <Col medium={2} large={3}>{left}</Col>
        <Col small={12} medium={8} large={6}>{children}</Col>
        <Col medium={2} large={3}>{right}</Col>
    </Row>
  </Container>
);

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  left: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  right: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  style: PropTypes.object
};

export default Body;