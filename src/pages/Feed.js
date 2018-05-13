import React from "react";
import PropTypes from "prop-types";

import BlogPost from "../components/BlogPost";

import { listBlogPosts } from "../scripts/dataApi";

const fetchMainContent = async () => {
  console.log("in fetchMainContent");
  const response = await listBlogPosts({});

  console.log(response);

  const blogPosts = response.body.map((post) => {
    console.log(post);
    return (<BlogPost key={post.postId} _id={post.postId} {...post.content} />);
  });

  console.log(blogPosts);

  return blogPosts;
};

const Page = async () => (
  <div id="main-content-section">
    {await fetchMainContent()}
  </div>
);

export default Page;

Page.propTypes = {
  match: PropTypes.object
};