import { connect } from "react-redux";

import { viewArticle } from "../../actions/blogActions";

import FeedView from "./FeedView";

const FeedContainer = connect(
  (state) => ({
    currentArticle: "",
    prevArticle: "",
    nextArticle: "" 
  }),
  (dispatch, ownProps) => ({
    goToPreviousArticle: () => dispatch(viewArticle(ownProps.prevArticle)),
    goToNextArticle: () => dispatch(viewArticle(ownProps.nextArticle))
  })
)(FeedView);

export default FeedContainer;