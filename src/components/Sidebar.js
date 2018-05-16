import React from "react";
import PropTypes from "prop-types";

import QuickLinksMenu from "./sidebar/QuickLinksMenu";
import ArchiveMenu from "./sidebar/ArchiveMenu";
import SearchPanel from "./sidebar/SearchPanel";

import { StickyTop } from "./lib/bootstrap/react-bootstrap";

import quickLinks from "../config/quickLinks.json";
import archiveLinks from "../config/archiveLinks.json";

const BlogSidebar = (props) => (
  <menu data-sticky-container>
    <StickyTop>
      <SearchPanel action={null} />
      <QuickLinksMenu title="Quick Links" items={quickLinks} />
      <ArchiveMenu items={archiveLinks} />
    </StickyTop>
  </menu>
);

export default BlogSidebar;

BlogSidebar.propTypes = {
  props: PropTypes.object
};