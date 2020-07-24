import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ExperienceItems = (props, index) => {
  return (
    <div className="experience-item" key={index}>
      <Row>
        <Col>
          <h5>
            <strong>{props.title}</strong>
          </h5>
          <h6>
            {props.name} / {props.location}
          </h6>
          <h6>
            {props.start} – {props.end}
          </h6>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>
            <strong>Project</strong>
          </h5>
          <h6>{props.projectInfo}</h6>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={8}>
          <h5>
            <strong>Responsibilities</strong>
          </h5>
          <ul>
            {props.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <h5>
            <strong>Software Development Tools</strong>
          </h5>
          <ul>
            {props.tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

class Experience extends React.Component {
  getExperience = () => {
    const experience = require("../experience.json");
    return experience;
  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="experience">
              <h3>EXPERIENCE</h3>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            {this.getExperience() !== undefined &&
              this.getExperience().work.map((item, index) =>
                ExperienceItems(item, index)
              )}
          </Col>
        </Row>
      </>
    );
  }
}

export default Experience;
