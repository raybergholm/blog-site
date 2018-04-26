import React from "react";
import PropTypes from "prop-types";

const SearchPanel = ({ action }) => (
  <menu className="search-panel">
    <h4>Search</h4>
    <input placeholder="search..." />
  </menu>
);

SearchPanel.propTypes = {
  action: PropTypes.func
};

export default SearchPanel;