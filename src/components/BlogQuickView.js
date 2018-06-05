import React from "react";
import PropTypes from "prop-types";

const ARTICLE_ROOT_URL = "/blog/post";

const BlogQuickView = ({ restUrl, title, timestamp, author, tags, summary }) => {
  return (
    <article id={`blog-post-${restUrl}`}>
      <h2><a href={`${ARTICLE_ROOT_URL}/${restUrl}`}>{title}</a></h2>
      <p>{timestamp} | <strong>{author}</strong></p>
      <div>
        <p>{summary}</p>
      </div>
      <hr />
    </article>
  );
};

BlogQuickView.propTypes = {
  restUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BlogQuickView;