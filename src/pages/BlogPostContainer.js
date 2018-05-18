import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actionCreators } from "../reduxActions/blogPostActions";

import BlogPostView from "./BlogPostView";

const BlogPostContainer = connect(
  (state) => ({
    cachedPosts: state.blogFeed.cache,
    postId: state.blogPost.postId,
    pointerPrev: state.blogPost.pointerPrev,
    pointerNext: state.blogPost.pointerNext
  }),
  (dispatch) => {
    const boundActions = bindActionCreators(actionCreators, dispatch);
    return {
      ...boundActions
    };
  }
)(class extends React.Component {
  componentDidMount() {

  }
  render() {
    return <BlogPostView {...this.props} />;
  }
});

export default BlogPostContainer;