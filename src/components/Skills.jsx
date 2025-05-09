import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getData } from "../helpers";

const SkillItems = (props, index) => {
  return <li key={index}>{props.info}</li>;
};

class Skills extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="skills">
              <h3>{getData().labels[0].skills}</h3>
            </div>
          </Col>
        </Row>
        <div className="skills-info">
          <Row>
            <Col xs={12} md={6} xl={6}>
            <div className="vertical-timeline-element-item">
              {getData() !== undefined &&
                getData().skills.map((item, index) => SkillItems(item, index))}
            </div>
            </Col>
            <Col>
            <div className="vertical-timeline-element-item">
              {getData() !== undefined &&
                getData().tools.map((item, index) => SkillItems(item, index))}
            </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Skills;
