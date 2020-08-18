import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getData } from "../helpers";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import LaptopIcon from "@material-ui/icons/Laptop";

const TimelineItem = (props, index) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(36, 37, 38)", color: "#7f8c8d" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(36, 37, 38)" }}
      date={`${props.start} – ${props.end}`}
      iconStyle={{ background: "rgb(97, 106, 107)", color: "#fff" }}
      icon={<LaptopIcon />}
      key={index}
    >
      <Row>
        <Col>
          <h5 className="vertical-timeline-element-title">{props.title}</h5>
          <h6>
            <a href={props.website}>{props.name}</a> / {props.location}
          </h6>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="vertical-timeline-element-title">
            {getData().labels[0].project}
          </h5>
          <h6>{props.projectInfo}</h6>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={8}>
          <h5 className="vertical-timeline-element-title">
            {getData().labels[0].responsibilities}
          </h5>
          {props.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Col>
        <Col>
          <div className="experience-tools">
            <h5 className="vertical-timeline-element-title">
              {getData().labels[0].tools}
            </h5>
            {props.tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </Col>
      </Row>
    </VerticalTimelineElement>
  );
};

class Experience extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="experience">
              <h3>{getData().labels[0].experience}</h3>
            </div>
          </Col>
        </Row>

        <VerticalTimeline layout="1-column">
          {getData() !== undefined &&
            getData().experience.map((item, index) =>
              TimelineItem(item, index)
            )}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(31, 97, 141)", color: "#fff" }}
            icon={<SchoolIcon />}
          />
        </VerticalTimeline>
      </>
    );
  }
}

export default Experience;
