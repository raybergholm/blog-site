import React from "react";
import PropTypes from "prop-types";

import { Menu } from "../foundation/Foundation";

const QuickLinksMenu = ({ title, items }) => (
  <menu className="quicklinks-menu">
    <h4>{title}</h4>
    <Menu items={items} vertical={true} />
  </menu>
);

QuickLinksMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

export default QuickLinksMenu;