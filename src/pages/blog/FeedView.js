import React from "react";
import PropTypes from "prop-types";

import { Pagination } from "../../components/foundation/Foundation";

import TwoColumnRightBody from "../../components/layout/TwoColumnRightBody";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/layout/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const getPageNumber = (params) => params.pageNumber;

const fetchMainContent = (pageNumber) => {
  const posts = mockPosts.map((props) => (<BlogPost key={props._id} {...props} />));

  const paginationSettings = {
    currentIndex: 1,
    pageCount: 12
  };
  const pagination = (<Pagination key="pagination" {...paginationSettings} />);

  return [posts, pagination];
};

const Page = ({ match }) => (
  <TwoColumnRightBody id="main-content-section" side={<BlogSidebar topAnchor="app-header:bottom" bottomAnchor="app-footer:top" />}>
    {fetchMainContent(getPageNumber(match))}
  </TwoColumnRightBody>
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;