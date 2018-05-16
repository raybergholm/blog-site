import React from "react";
import PropTypes from "prop-types";

import { Badge } from "../lib/bootstrap/react-bootstrap";

const SearchPanel = ({ tags, action }) => (
  <menu className="search-panel">
    <div>
      <h4>Search</h4>
      <input placeholder="search..." />
    </div>
    {tags &&
      <div>
        <h4>Tags:</h4>
        {tags.map((tag, index) => <Badge key={index} pill>{tag}</Badge>)}
      </div>
    }
  </menu>
);

SearchPanel.propTypes = {
  action: PropTypes.func,
  tags: PropTypes.arrayOf(PropTypes.object)
};

export default SearchPanel;