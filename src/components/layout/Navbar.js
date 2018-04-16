import React from "react";
import PropTypes from "prop-types";

import TopBar from "../foundation/TopBar";
import Menu from "../foundation/Menu";

const createMenu = (brand, items) => {

  let menuItems = [];
  menuItems.push(brand);
  menuItems = menuItems.concat(items);
  
  console.log(menuItems);
  return (<Menu items={menuItems} />);
};

const Navbar = ({ brand, items }) => (
  <TopBar left={createMenu(brand, items)} />
);

Navbar.propTypes = {
  brand: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default Navbar;