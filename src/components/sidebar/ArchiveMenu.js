import React from "react";
import PropTypes from "prop-types";

import { ListGroup } from "../lib/bootstrap/react-bootstrap";

const ArchiveMenu = ({ items }) => (
  <menu className="archive-menu">
    <h4>Archives</h4>
    <ListGroup items={items} flush />
  </menu>
);

ArchiveMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default ArchiveMenu;