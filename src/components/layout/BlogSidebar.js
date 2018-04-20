import React from "react";
import PropTypes from "prop-types";

import QuickLinksMenu from "./sidebar/QuickLinksMenu";
import ArchiveMenu from "./sidebar/ArchiveMenu";
import SearchPanel from "./sidebar/SearchPanel";

import { Sticky } from "../foundation/Foundation";

import quickLinks from "../../config/quickLinks.json";
import archiveLinks from "../../config/archiveLinks.json";

const buildStickConfig = ({topAnchor, bottomAnchor}) => ({
  "data-options": "marginTop:4;",
  "data-top-anchor": topAnchor,
  "data-bottom-anchor": bottomAnchor
});

const BlogSidebar = (props) => (
  <menu data-sticky-container>
    <Sticky {...buildStickConfig(props)}>
      <SearchPanel action={null} />
      <QuickLinksMenu items={quickLinks} />
      <ArchiveMenu items={archiveLinks} />
    </Sticky>
  </menu>
);

export default BlogSidebar;

BlogSidebar.propTypes = {
  props: PropTypes.object
};