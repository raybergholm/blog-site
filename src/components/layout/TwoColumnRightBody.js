import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "../lib/bootstrap/react-bootstrap";

const Body = ({ id, style, children, side, ...others }) => (
  <Container id={id || null} style={style || null} {...others}>
    <Row {...others}>
      <Col small={12} medium={10} large={9}>
        {children}
      </Col>
      <Col medium={2} large={3}>
        {side}
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
  side: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  style: PropTypes.object
};

export default Body;