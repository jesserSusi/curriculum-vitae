import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";
import { getData } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileCode,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/sidebar.css";

const SocialIcon = (props) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${props.info}`}>{props.info}</Tooltip>}
    >
      <a href={props.link} className={props.classname}>
        <FontAwesomeIcon icon={props.faicon} size="2x" />
      </a>
    </OverlayTrigger>
  );
};

class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <Row>
          <Col xs={1} sm={2} md={2} />
          <Col sm={4} md={4} lg={12} xl={12}>
            <div className="avatar">
              <Image src={process.env.REACT_APP_AVATAR} rounded fluid />
            </div>
          </Col>
          <Col>
            <div className="sidenav-info">
              <h1>{process.env.REACT_APP_NAME}</h1>
              <h5>{process.env.REACT_APP_POSITION}</h5>
              <h5>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
                <a href={process.env.REACT_APP_COORDINATES}>
                  {" "}
                  {process.env.REACT_APP_LOCATION}
                </a>
              </h5>

              <div className="socials">
                <div className="socials-icons">
                  <SocialIcon
                    link={process.env.REACT_APP_FOOTER_GITHUB}
                    classname="github social"
                    faicon={faGithub}
                    info={getData().labels[0].socGitHub}
                  />
                  <SocialIcon
                    link={process.env.REACT_APP_FOOTER_LINKEDIN}
                    classname="linkedin social"
                    faicon={faLinkedin}
                    info={getData().labels[0].socLinkedIn}
                  />
                  <SocialIcon
                    link={process.env.REACT_APP_FOOTER_EMAIL}
                    classname="email social"
                    faicon={faEnvelope}
                    info={getData().labels[0].socEmail}
                  />
                  <SocialIcon
                    link={process.env.REACT_APP_FOOTER_CV}
                    classname="resume social"
                    faicon={faFileCode}
                    info={getData().labels[0].socCV}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={1} sm={2} md={2} />
        </Row>
      </div>
    );
  }
}

export default Sidebar;
