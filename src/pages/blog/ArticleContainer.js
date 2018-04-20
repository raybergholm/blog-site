import { connect } from "react-redux";

import { viewArticle } from "../../actions/blogActions";

import ArticleView from "./ArticleView";

const ArticleContainer = connect(
  (state) => ({
    currentArticle: "",
    prevArticle: "",
    nextArticle: "" 
  }),
  (dispatch, ownProps) => ({
    goToPreviousArticle: () => dispatch(viewArticle(ownProps.prevArticle)),
    goToNextArticle: () => dispatch(viewArticle(ownProps.nextArticle))
  })
)(ArticleView);

export default ArticleContainer;