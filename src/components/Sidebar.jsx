import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";
import { getData } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/sidebar.css";
import CV from "../JesserSusi.pdf";

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
        <div className="sidenav-details">
          <Row>
            <Col xs={2} md={3} />
            <Col xs={8} md={6} lg={12}>
              <Row>
                <Col xs={4} s={3} l={1} xl={1}/>
                <Col lg={12} xl={10}>
                  <div className="avatar">
                    <Image
                      src={process.env.REACT_APP_AVATAR}
                      roundedCircle
                      fluid
                    />
                  </div>
                </Col>
                <Col xs={4} s={3} l={1} xl={1}/>
              </Row>

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

                <Row>
                  <Col xl={3} />
                  <Col xs={12}>
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
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} />
                </Row>
              </div>
            </Col>
            <Col xs={2} md={3} />
          </Row>
        </div>
        <div className="sidenav-cv">
          <Row>
            <Col xs={3} md={3} xl={2} />
            <Col>
              <Button href={CV} target="_blank" variant="secondary" block>
                {getData().labels[0].socCV}
              </Button>
            </Col>
            <Col xs={3} md={3} xl={2} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Sidebar;
