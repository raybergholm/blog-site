import React from "react";
import PropTypes from "prop-types";

import BlogPostNavigation from "../components/BlogPostNavigation";
import BlogPost from "../components/BlogPost";

const fetchPost = (postId) => {

};

const Page = ({ match }) => {
  const postId = match && match.params ? match.params.currentPost : null;

  const fullPost = fetchPost(postId);

  return (<div id="main-content-section">
    {fullPost && (
      <div>
        <BlogPostNavigation prevLink={fullPost.prev} nextLink={fullPost.next} />
        <BlogPost key={fullPost._id} _id={fullPost._id} {...fullPost.content} />
      </div>
    )}
  </div>);
};

Page.propTypes = {
  match: PropTypes.object
};

export default Page;