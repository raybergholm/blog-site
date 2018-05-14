import { connect } from "react-redux";

import { viewArticle } from "../../actions/blogFeedActions";

import FeedView from "./FeedView";

const FeedContainer = connect(
  (state) => ({
    top: state.feed.top,
    limit: state.feed.limit,
    searchValue: state.feed.searchValue
  }),
  (dispatch, ownProps) => ({
  })
)(FeedView);

export default FeedContainer;