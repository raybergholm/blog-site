import React from "react";
import PropTypes from "prop-types";

const Sticky = ({children}) => (
    <div>
      {children}
    </div>
);

export default Sticky;

Sticky.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};