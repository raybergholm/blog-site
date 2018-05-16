import React from "react";
import PropTypes from "prop-types";

import BlogPost from "../components/BlogPost";

const displayBlogPosts = (blogPosts) => blogPosts.map((post) => <BlogPost key={post.postId} _id={post.postId} {...post.content} />);

const FeedPage = ({posts}) => (
  <div id="main-content-section">
    {posts && posts.length > 0 && displayBlogPosts(posts)}
  </div>
);

export default FeedPage;

FeedPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};