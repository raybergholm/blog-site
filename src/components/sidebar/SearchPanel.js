import React from "react";
import PropTypes from "prop-types";

import { Button } from "../lib/bootstrap/react-bootstrap";

const SearchPanel = ({ tags, action }) => (
  <menu className="search-panel">
    <div>
      <h4>Search</h4>
      <input placeholder="search..." />
      <Button action={action}><span>Search</span></Button>
    </div>
    {tags &&
      <div>
        <h4>Tags:</h4>
        {tags.map(({ tagName, selected }, index) => <Button key={index} active={selected}>{tagName}</Button>)}
      </div>
    }
  </menu>
);

SearchPanel.propTypes = {
  action: PropTypes.func,
  tags: PropTypes.arrayOf(PropTypes.object)
};

export default SearchPanel;