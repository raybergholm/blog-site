import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Height } from "../../bootstrap4-wrapper";

const fullHeight = Height(100);

const ResponsiveSidebar = ({ children }) => (
    <Container fluid extras={[fullHeight]}>
        <Row extras={[fullHeight]}>
            <aside className="col-12 col-md-2 p-1 bg-dark">
                <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start">
                    <div className="collapse navbar-collapse">
                        <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
        </Row>
    </Container>
);

export default ResponsiveSidebar;

ResponsiveSidebar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};