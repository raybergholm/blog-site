import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const parseCellSizingProps = (base, props) => {
  const TOKEN_DELIMITER = "-";

  const tokens = [base];

  if (props instanceof Object) {
    const { size, offset, block, blockY } = props;

    if (block) {
      tokens.push("cell-block");
    } else if (blockY) {
      tokens.push("cell-block-y");
    } else {
      if (offset) {
        tokens.push("offset");
      }

      if (size) {
        tokens.push(size);
      }
    }
  } else {
    tokens.push(props);
  }

  return tokens.join(TOKEN_DELIMITER);
};

const buildClassName = ({ small, medium, large, auto, shrink }) => {
  const BASE_CLASSNAME = "cell";
  const tokens = [BASE_CLASSNAME];

  if (auto) {
    tokens.push("auto");
  } else if (shrink) {
    tokens.push("shrink");
  } else {
    if (small) {
      tokens.push(parseCellSizingProps("small", small));
    }

    if (medium) {
      tokens.push(parseCellSizingProps("medium", medium));
    }

    if (large) {
      tokens.push(parseCellSizingProps("large", large));
    }
  }

  return generateClassName(tokens);
};

export const Cell = ({ id, style, children, ...others }) => (
  <div id={id || null} style={style || null} className={buildClassName(others)}>{children}</div>
);

export default Cell;

Cell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};