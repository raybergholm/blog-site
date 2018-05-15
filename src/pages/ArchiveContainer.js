import React from "react";
import { connect } from "react-redux";

import ArchiveView from "./ArchiveView";

const ArchiveContainer = connect(
  (state) => ({
    archive: state.archive
  }),
  (dispatch, ownProps) => ({
  })
)(class extends React.Component {
  componentDidMount() {

  }
  render() {
    return <ArchiveView {...this.props} />;
  }
});

export default ArchiveContainer;