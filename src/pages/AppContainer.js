import React from "react";
import { connect } from "react-redux";

import AppView from "./AppView";

const AppContainer = connect(
  (state) => ({
    app: state.app
  }),
  (dispatch) => ({
  })
)(class extends React.Component {
  componentDidMount() {

  }
  render() {
    return <AppView {...this.props} />;
  }
});

export default AppContainer;