import React from "react";
import PropTypes from "prop-types";

import BlogPost from "../components/BlogPost";

import { listBlogPosts } from "../scripts/dataApi";
const fetchMainContent = async () => {
  return await listBlogPosts({})
    .then((posts) => posts.map((post) => {
      console.log(post);
      return (<BlogPost key={post._id} _id={post._id} {...post.content} />);
    }));
};

const Page = () => (
  <div id="main-content-section">
    {fetchMainContent()}
  </div>
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;