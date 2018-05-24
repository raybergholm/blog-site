import React from "react";
import PropTypes from "prop-types";

import BlogPostNavigation from "../components/BlogPostNavigation";
import BlogPost from "../components/BlogPost";

const fetchPost = (postId, cachedPosts) => {
  const post = cachedPosts.get(postId);
  if (post) {
    return post;
  }else {
    // load new
  }


};

const Page = ({ match, postId, cachedPosts, pointerPrev, pointerNext }) => {
  const post = fetchPost(postId, cachedPosts);

  return (<div id="main-content-section">
    {pointerPrev && pointerNext && (<BlogPostNavigation prevLink={pointerPrev} nextLink={pointerNext} />)}
    {post && ( <BlogPost key={post.postId} _id={post.postId} {...post} />)}
  </div>);
};

Page.propTypes = {
  cachedPosts: PropTypes.object,
  match: PropTypes.object,
  postId: PropTypes.string,
  pointerPrev: PropTypes.string,
  pointerNext: PropTypes.string
};

export default Page;