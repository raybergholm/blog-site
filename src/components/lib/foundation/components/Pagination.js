import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ id, style, currentIndex, pageCount, visibleRange, ...others }) => {
  const enabledPreviousButton = currentIndex > 1;
  const enabledNextButton = currentIndex < pageCount;
  
  return (<nav id={id || null} style={style || null} aria-label="Pagination">
    <ul className="pagination text-center">
      <li className={`pagination-previous${enabledPreviousButton ? "" : " disabled"}`}>Previous</li>
      <li className="current"><span className="show-for-sr">You are on page</span> 1</li>
      <li><a href="#" aria-label="Page 2">2</a></li>
      <li><a href="#" aria-label="Page 3">3</a></li>
      <li><a href="#" aria-label="Page 4">4</a></li>
      <li className="ellipsis"></li>
      <li><a href="#" aria-label="Page 12">11</a></li>
      <li><a href="#" aria-label="Page 12">12</a></li>
      <li className={`pagination-next${enabledNextButton ? "" : " disabled"}`}><a href="#" aria-label="Next page">Next</a></li>
    </ul>
  </nav>);
};

export default Pagination;

Pagination.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  currentIndex: PropTypes.number,
  id: PropTypes.string,
  pageCount: PropTypes.number,
  settings: PropTypes.object,
  style: PropTypes.object,
  visibleRange: PropTypes.arrayOf(PropTypes.number)
};