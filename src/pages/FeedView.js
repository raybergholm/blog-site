import React from "react";
import PropTypes from "prop-types";

import BlogPost from "../components/BlogPost";

import { listBlogPosts } from "../scripts/dataApi";

const fetchMainContent = async () => {
  console.log("in fetchMainContent");
  const response = await listBlogPosts({});

  console.log(response);

  const blogPosts = response.body.map((post) => (<BlogPost key={post.postId} _id={post.postId} {...post.content} />));

  console.log(blogPosts);

  return blogPosts;
};

const FeedPage = () => (
  <div id="main-content-section">
    
  </div>
);

export default FeedPage;

FeedPage.propTypes = {
  match: PropTypes.object
};