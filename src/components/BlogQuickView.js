import React from "react";
import PropTypes from "prop-types";

import Showdown from "showdown";

const ARTICLE_ROOT_URL = "/blog/post";

const converter = new Showdown.Converter({
  headerLevelStart: 3,
  requireSpaceBeforeHeadingText: true,
  strikethrough: true,
  tasklists: true
});

const parseText = (text) => converter.makeHtml(text);

const BlogQuickView = ({ restUrl, title, timestamp, author, summary }) => {
  const blogPostUrl = `${ARTICLE_ROOT_URL}/${restUrl}`;
  return (
    <article id={`blog-post-${restUrl}`}>
      <h2><a href={blogPostUrl}>{title}</a></h2>
      <p>{timestamp} | <strong>{author}</strong></p>
      <div dangerouslySetInnerHTML={{ __html: parseText(summary) }} />
      <a href={blogPostUrl}>Read More...</a>
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