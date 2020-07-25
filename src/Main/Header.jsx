import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Row>
          <Col xs={4} md={3} lg={2}>
            <div className="header-avatar">
              <Image src={require("../profile.jpg")} roundedCircle fluid />
            </div>
          </Col>
          <Col xs={8} md={9} lg={10}>
            <div className="header-info">
              <h1>Hi, I'm {process.env.REACT_APP_NAME}</h1>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
