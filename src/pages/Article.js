import React from "react";
import PropTypes from "prop-types";

import Showdown from "showdown";

const converter = new Showdown.Converter({
  headerLevelStart: 3,
  requireSpaceBeforeHeadingText: true,
  strikethrough: true,
  tasklists: true
});

const parseText = (text) => converter.makeHtml(text);

const Article = ({ _id, title, timestamp, author, body }) => (
  <div id={`article_${_id}`}>
    <h2>{title}</h2>
    <p>{timestamp} by {author}</p>
    <hr />
    <div>
      {parseText(body)}
    </div>
  </div>
);

Article.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired
};

export default Article;