import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Button, BUTTON_TYPES } from "./lib/bootstrap/react-bootstrap";

const redirectPage = (postId) => {
  if (postId) {
    window.location.href = `/blog/post/${postId}`;
  }
};

const BlogPostNavigation = ({ prevLink, nextLink }) => (
  <Row>
    <Col small={2}>
      <Button mode={BUTTON_TYPES.Button} action={prevLink ? () => redirectPage(prevLink) : null} expanded disabled={!prevLink}>
        <span>Previous</span>
      </Button>
    </Col>
    <Col auto></Col>
    <Col small={2}>
      <Button mode={BUTTON_TYPES.Button} action={nextLink ? () => redirectPage(nextLink) : null} expanded disabled={!nextLink}>
        <span>Next</span>
      </Button>
    </Col>
  </Row>
);

export default BlogPostNavigation;

BlogPostNavigation.propTypes = {
  nextLink: PropTypes.string,
  prevLink: PropTypes.string
};