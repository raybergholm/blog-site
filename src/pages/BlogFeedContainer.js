import { connect } from "react-redux";

import { loadPosts } from "../actions/blogFeedActions";

import BlogFeedView from "./BlogFeedView";

const FeedContainer = connect(
  (state) => ({
    feed: state.feed
  }),
  (dispatch) => ({
  })
)(BlogFeedView);

export default FeedContainer;