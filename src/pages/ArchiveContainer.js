import { connect } from "react-redux";

import ArchiveView from "./ArchiveView";

const ArchiveContainer = connect(
  (state) => ({
    archive: state.archive
  }),
  (dispatch, ownProps) => ({
  })
)(ArchiveView);

export default ArchiveContainer;