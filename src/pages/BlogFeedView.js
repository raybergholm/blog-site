import React from "react";
import PropTypes from "prop-types";

import BlogQuickView from "../components/BlogQuickView";

const displayBlogPosts = (blogPosts) => blogPosts.map((post, index) => {
  console.log("post:", post);
  return <BlogQuickView key={index} _id={post.restUrlKey} {...post} />;
});

const FeedPage = ({ posts }) => (
  <div id="main-content-section">
    {posts && posts.length > 0 && displayBlogPosts(posts)}
  </div>
);

export default FeedPage;

FeedPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};