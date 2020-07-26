import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getData } from "../helpers";

class About extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <div className="about-me">
            <h3>ABOUT</h3>
          </div>
          <div className="about">
            {getData() !== undefined &&
              getData().about.map((item, index) => (
                <p key={index}>{item.info}</p>
              ))}
          </div>
        </Col>
      </Row>
    );
  }
}

export default About;
