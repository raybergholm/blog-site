import React from "react";
import PropTypes from "prop-types";

import QuickLinksMenu from "./sidebar/QuickLinksMenu";
import ArchiveMenu from "./sidebar/ArchiveMenu";
import SearchPanel from "./sidebar/SearchPanel";

import { Sticky } from "./foundation/Foundation";

import quickLinks from "../config/quickLinks.json";
import archiveLinks from "../config/archiveLinks.json";

const buildStickyConfig = ({ topAnchor, bottomAnchor }) => {
  const config = {
    "data-options": "marginTop:4;",
  };

  if (topAnchor) {
    config["data-top-anchor"] = topAnchor;
  }

  if (bottomAnchor) {
    config["data-bottom-anchor"] = bottomAnchor;
  }

  return config;
};

const BlogSidebar = (props) => (
  <menu data-sticky-container>
    <Sticky {...buildStickyConfig(props)}>
      <SearchPanel action={null} />
      <QuickLinksMenu title="Quick Links" items={quickLinks} />
      <ArchiveMenu items={archiveLinks} />
    </Sticky>
  </menu>
);

export default BlogSidebar;

BlogSidebar.propTypes = {
  props: PropTypes.object
};