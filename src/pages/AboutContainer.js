import React from "react";
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
)(class extends React.Component {
  componentDidMount() {

  }
  render() {
    return <AboutView {...this.props} />;
  }
});

export default AboutContainer;