import React from "react";
import PropTypes from "prop-types";

import QuickLinksMenu from "./sidebar/QuickLinksMenu";
import ArchiveMenu from "./sidebar/ArchiveMenu";
import SearchPanel from "./sidebar/SearchPanel";

import { StickyTop } from "./lib/bootstrap/react-bootstrap";

const BlogSidebar = ({ quickLinks, archiveLinks, tags }) => (
  <StickyTop>
    <SearchPanel action={null} tags={tags} />
    <QuickLinksMenu title="Quick Links" items={quickLinks} />
    <ArchiveMenu items={archiveLinks} />
  </StickyTop>
);

export default BlogSidebar;

BlogSidebar.propTypes = {
  archiveLinks: PropTypes.array,
  quickLinks: PropTypes.array,
  tags: PropTypes.array
};