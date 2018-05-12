import React from "react";
import PropTypes from "prop-types";

import { ListGroup } from "../lib/bootstrap/react-bootstrap";

const QuickLinksMenu = ({ title, items }) => (
  <menu className="quicklinks-menu">
    <h4>{title}</h4>
    <ListGroup items={items} flush />
  </menu>
);

QuickLinksMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

export default QuickLinksMenu;