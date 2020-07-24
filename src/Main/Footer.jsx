import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileCode } from "@fortawesome/free-solid-svg-icons";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

const FooterIcon = (props) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${props.info}`}>{props.info}</Tooltip>}
    >
      <a href={props.env} className={props.classname}>
        <FontAwesomeIcon icon={props.faicon} size="2x" />
      </a>
    </OverlayTrigger>
  );
};

class Footer extends React.Component {
  render() {
    return (
      <div className="socials">
        <h5 style={{ marginRight: "0.5rem" }}>Let's Connect! </h5>
        <div className="socials-icons">
          <FooterIcon
            env={env.REACT_APP_FOOTER_GITHUB}
            classname="github social"
            faicon={faGithub}
            info="GitHub"
          />
          <FooterIcon
            env={env.REACT_APP_FOOTER_LINKEDIN}
            classname="linkedin social"
            faicon={faLinkedin}
            info="LinkedIn"
          />
          <FooterIcon
            env={env.REACT_APP_FOOTER_EMAIL}
            classname="email social"
            faicon={faEnvelope}
            info="Email"
          />
          <FooterIcon
            env={env.REACT_APP_FOOTER_CV}
            classname="resume social"
            faicon={faFileCode}
            info="Curriculum Vitae or Resume"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
