import React from "react";
import PropTypes from "prop-types";

const OffCanvas = ({ ids = {}, styles = {}, direction = "left", mainContent, sideContent }) => (
    <div id={ids.wrapper} style={styles.wrapper} className="off-canvas-wrapper">
        <div id={ids.side} style={styles.side} className={`off-canvas position-${direction}`} data-off-canvas>
            {sideContent}
        </div>
        <div id={ids.main} style={styles.main} className="off-canvas-content" data-off-canvas-content>
            {mainContent}
        </div>
    </div>
);

export default OffCanvas;

OffCanvas.propTypes = {
    ids: PropTypes.string,
    direction: PropTypes.string,
    mainContent: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    sideContent: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    styles: PropTypes.object
};


