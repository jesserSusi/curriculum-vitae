import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getData } from "../helpers";

const ExperienceItems = (props, index) => {
  return (
    <div className="experience-item" key={index}>
      <Row>
        <Col>
          <h5>{props.title}</h5>
          <h6>
            <a href={props.website}>{props.name}</a> / {props.location}
          </h6>
          <h6>
            {props.start} – {props.end}
          </h6>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>{getData().labels[0].project}</h5>
          <h6>{props.projectInfo}</h6>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={8}>
          <h5>{getData().labels[0].responsibilities}</h5>
          {props.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Col>
        <Col>
          <div className="experience-tools">
            <h5>{getData().labels[0].tools}</h5>
            {props.tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </Col>
      </Row>
    </div>
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
            {getData() !== undefined &&
              getData().experience.map((item, index) =>
                ExperienceItems(item, index)
              )}
          </Col>
        </Row>
      </>
    );
  }
}

export default Experience;
