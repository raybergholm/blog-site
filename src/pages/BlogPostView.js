import React from "react";
import PropTypes from "prop-types";

import BlogPostNavigation from "../components/BlogPostNavigation";
import BlogPost from "../components/BlogPost";

const fetchPost = (articleId) => {
  // const result = mockPosts.filter(({ _id }) => _id === articleId);

  // return result ? result[0] : null;
};

const Page = ({ match }) => {
  const post = fetchPost(match.params.articleId);

  return (
    <div id="main-content-section">
      <BlogPostNavigation prevLink={post.prev} nextLink={post.next} />
      {post && (<BlogPost key={post._id} _id={post._id} {...post.content} />)}
    </div>
  );
};

Page.propTypes = {
  match: PropTypes.object,
  state: PropTypes.object
};

export default Page;