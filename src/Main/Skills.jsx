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
              <h3>TECHNICAL SKILLS</h3>
            </div>
          </Col>
        </Row>
        <div className="skills-info">
          <Row>
            <Col>
              <ul>
                {getData() !== undefined &&
                  getData().skills.map((item, index) =>
                    SkillItems(item, index)
                  )}
              </ul>
            </Col>
            <Col>
              {getData() !== undefined &&
                getData().tools.map((item, index) => SkillItems(item, index))}
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Skills;
