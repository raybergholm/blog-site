import React from "react";
import PropTypes from "prop-types";

import { Row, Cell, Button } from "../foundation/Foundation";

const redirectPage = (postId) => {
  if (postId) {
    window.location.href = `/blog/post/${postId}`;
  }
};

const ArticleNavigation = ({ prevLink, nextLink }) => (
  <Row>
    <Cell small={2}>
      <Button action={prevLink ? () => redirectPage(prevLink) : () => { }} expanded disabled={!prevLink}>
        <span>Previous</span>
      </Button>
    </Cell>
    <Cell auto></Cell>
    <Cell small={2}>
      <Button action={nextLink ? () => redirectPage(nextLink) : () => { }} expanded disabled={!nextLink}>
        <span>Next</span>
      </Button>
    </Cell>
  </Row>
);

export default ArticleNavigation;

ArticleNavigation.propTypes = {
  nextLink: PropTypes.string,
  prevLink: PropTypes.string
};