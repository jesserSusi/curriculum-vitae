import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getData } from "../helpers";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Row>
          <Col>
            {getData() !== undefined &&
              getData().about.map((item, index) => (
                <p key={index}>{item.info}</p>
              ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
