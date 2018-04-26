import React from "react";
import PropTypes from "prop-types";

import { Menu } from "../foundation/Foundation";

const QuickLinksMenu = ({ items }) => (
  <menu className="quicklinks-menu">
    <h4>Quick links</h4>
    <Menu items={items} vertical={true} />
  </menu>
);

QuickLinksMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default QuickLinksMenu;