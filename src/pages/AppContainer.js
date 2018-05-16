import React from "react";
import { connect } from "react-redux";

import { searchByValue, searchByTags } from "../actions/blogSideActions";

import AppView from "./AppView";

const createView = (ViewComponent) => class extends React.Component {
  componentDidMount() {

  }
  render() {
    return <ViewComponent {...this.props} />;
  }
};

const AppContainer = connect(
  (state) => ({
    app: state.app
  }),
  (dispatch) => ({
    searchByValue: (val) => dispatch(searchByValue(val)),
    searchByTags: (tags) => dispatch(searchByTags(tags))
  })
)(createView(AppView));

export default AppContainer;