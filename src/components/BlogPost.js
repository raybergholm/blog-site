import React from "react";
import PropTypes from "prop-types";

import { Badge } from "./lib/bootstrap/react-bootstrap";

import Showdown from "showdown";

const ARTICLE_ROOT_URL = "/blog/post/";

const converter = new Showdown.Converter({
  headerLevelStart: 3,
  requireSpaceBeforeHeadingText: true,
  strikethrough: true,
  tasklists: true
});

const parseText = (text) => converter.makeHtml(text);

const BlogPost = ({ restUrl, title, publishDate, author, tags, body }) => {
  return (
    <article id={`blog-post-${restUrl}`}>
      <h2><a href={`${ARTICLE_ROOT_URL}/${restUrl}`}>{title}</a></h2>
      <p>{publishDate} | <strong>{author}</strong></p>
      <div dangerouslySetInnerHTML={{ __html: parseText(body) }} />
      <div>
        <small>Tags:</small>
        {tags.map((tag, index) => <Badge key={index}>{tag}</Badge>)}
      </div>
      <hr />
    </article>
  );
};

BlogPost.propTypes = {
  restUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  publishDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BlogPost;