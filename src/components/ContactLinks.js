import React from "react";

import { Col, Button, BUTTON_MODES } from "../components/lib/bootstrap/react-bootstrap";

import githubLogo from "../images/github-logo.png";
import linkedinLogo from "../images/linkedin-logo.png";

const GITHUB_PROFILE_URL = "http://github.com/raybergholm";
const LINKEDIN_PROFILE_URL = "http://www.linkedin.com/in/raymond-bergholm-a1b29990";

const ContactLinks = () => (
  <Col shrink>
    <hr />
    <Button mode={BUTTON_MODES.Link} action={{link: GITHUB_PROFILE_URL, target: "_blank"}} clear>
      <img src={githubLogo} alt="Find me on Github!" />
    </Button>
    <Button mode={BUTTON_MODES.Link} action={{link: LINKEDIN_PROFILE_URL, target: "_blank"}} clear>
      <img src={linkedinLogo} alt="Find me on LinkedIn!" />
    </Button>
    <hr />
  </Col>
);

export default ContactLinks;

