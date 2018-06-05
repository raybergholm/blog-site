import React from "react";
import PropTypes from "prop-types";

import BlogQuickView from "../components/BlogQuickView";

const displayBlogPosts = (blogPosts) => blogPosts.map((post) => <BlogQuickView key={post.postId} _id={post.postId} {...post} />);

const FeedPage = ({ posts }) => (
  <div id="main-content-section">
    {posts && posts.length > 0 && displayBlogPosts(posts)}
  </div>
);

export default FeedPage;

FeedPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};