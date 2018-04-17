import React from "react";
import PropTypes from "prop-types";

import Foundation from "../../foundation/Foundation";

const { Menu } = Foundation;

const ArchiveMenu = ({ items }) => (
  <menu className="archive-menu">
    <h4>Archives</h4>
    <Menu items={items} vertical={true} />
  </menu>
);

ArchiveMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default ArchiveMenu;