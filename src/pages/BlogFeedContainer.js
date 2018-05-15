import React from "react";
import { connect } from "react-redux";

import { loadPosts } from "../actions/blogFeedActions";

import BlogFeedView from "./BlogFeedView";

const FeedContainer = connect(
  (state) => ({
    feed: state.feed
  }),
  (dispatch) => ({
    
  })
)(class extends React.Component {
  async componentDidMount() {
    const posts = await loadPosts();
    console.log("async loaded posts:", posts);
  }
  render() {
    return <BlogFeedView {...this.props} />;
  }
});

export default FeedContainer;