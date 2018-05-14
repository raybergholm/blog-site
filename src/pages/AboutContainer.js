import { connect } from "react-redux";

import AboutView from "./AboutView";

const AboutContainer = connect(
  (state) => ({
    currentArticle: "",
    prevArticle: "",
    nextArticle: "" 
  }),
  (dispatch, ownProps) => ({
  })
)(AboutView);

export default AboutContainer;