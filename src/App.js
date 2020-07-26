import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col xl={1} />
          <Col sm={12} xs={12} md={4} lg={3} xl={2}>
            <Sidebar />
          </Col>
          <Col>
            <div className="main-scroll">
              <About />
              <hr />
              <Skills />
              <hr />
              <Experience />
              <hr />
              <Projects />
            </div>
          </Col>
          <Col xl={1} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
