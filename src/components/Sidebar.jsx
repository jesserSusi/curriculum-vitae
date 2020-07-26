import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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
  constructor(props) {
    super(props);
    this.state = {
      hideHR: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth < 768;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideHR: currentHideNav });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  render() {
    return (
      <div className="sidenav">
        <div className="avatar">
          <Image src={process.env.REACT_APP_AVATAR} rounded fluid />
        </div>
        <div className="sidenav-info">
          <h1>{process.env.REACT_APP_NAME}</h1>
          <h5>Software Engineer</h5>
          <h5>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> Wellington, NZ
          </h5>

          <div className="socials">
            <h5 style={{ marginRight: "0.5rem" }}>Connect with me:</h5>
            <div className="socials-icons">
              <SocialIcon
                link={process.env.REACT_APP_FOOTER_GITHUB}
                classname="github social"
                faicon={faGithub}
                info="GitHub"
              />
              <SocialIcon
                link={process.env.REACT_APP_FOOTER_LINKEDIN}
                classname="linkedin social"
                faicon={faLinkedin}
                info="LinkedIn"
              />
              <SocialIcon
                link={process.env.REACT_APP_FOOTER_EMAIL}
                classname="email social"
                faicon={faEnvelope}
                info="Email"
              />
              <SocialIcon
                link={process.env.REACT_APP_FOOTER_CV}
                classname="resume social"
                faicon={faFileCode}
                info="Curriculum Vitae or Resume"
              />
            </div>
          </div>
        </div>

        {this.state.hideHR && <hr />}
      </div>
    );
  }
}

export default Sidebar;
