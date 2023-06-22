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

const ExperienceItem = (props, index) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(48, 51, 55)", color: "#99A3A4" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(48, 51, 55)" }}
      date={`${props.start} – ${props.end}`}
      iconStyle={{ background: props.end === "Present" ? "rgb(31, 97, 141)" : "rgb(66, 73, 73)", color: "#ccd1d1" }}
      icon={<LaptopIcon />}
      key={index}
    >
      <Row>
        <Col>
          <h5 className="vertical-timeline-element-title">{props.title}</h5>
          <h6 className="vertical-timeline-element-subtitle">
            <a href={props.website}>{props.name}</a> | {props.location}
          </h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="vertical-timeline-element-title">
            {getData().labels[0].project}
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
            {props.projectInfo}
          </h6>
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

const EducationItem = (props) => {
  const data = props.education[0];

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={{ background: "rgb(48, 51, 55)", color: "#7f8c8d" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(48, 51, 55)" }}
      date={`${data.start} – ${data.end}`}
      iconStyle={{ background: "rgb(31, 97, 141)", color: "#ccd1d1" }}
      icon={<SchoolIcon />}
    >
      <Row>
        <Col>
          <h5 className="vertical-timeline-element-title">{data.degree}</h5>
          <h6>{data.institution}</h6>
          <h6>{data.assessment}</h6>
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

        <Row>
          <Col>
            <div className="timeline">
              <VerticalTimeline
                layout="1-column"
                className="vertical-timeline-custom-line"
              >
                {getData() !== undefined &&
                  getData().experience.map((item, index) =>
                    ExperienceItem(item, index)
                  )}
                <EducationItem education={getData().education} />
              </VerticalTimeline>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Experience;
