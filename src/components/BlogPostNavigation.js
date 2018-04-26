import React from "react";
import PropTypes from "prop-types";

import { Row, Cell, Button, BUTTON_MODES } from "./foundation/Foundation";

const redirectPage = (postId) => {
  if (postId) {
    window.location.href = `/blog/post/${postId}`;
  }
};

const BlogPostNavigation = ({ prevLink, nextLink }) => (
  <Row>
    <Cell small={2}>
      <Button mode={BUTTON_MODES.Button} action={prevLink ? () => redirectPage(prevLink) : null} expanded disabled={!prevLink}>
        <span>Previous</span>
      </Button>
    </Cell>
    <Cell auto></Cell>
    <Cell small={2}>
      <Button mode={BUTTON_MODES.Button} action={nextLink ? () => redirectPage(nextLink) : null} expanded disabled={!nextLink}>
        <span>Next</span>
      </Button>
    </Cell>
  </Row>
);

export default BlogPostNavigation;

BlogPostNavigation.propTypes = {
  nextLink: PropTypes.string,
  prevLink: PropTypes.string
};