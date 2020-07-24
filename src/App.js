import React from "react";
import About from "./Main/About";
import Experience from "./Main/Experience";
import Footer from "./Main/Footer";
import Header from "./Main/Header";
import Projects from "./Main/Projects";
import Skills from "./Main/Skills";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={1} lg={2} />
          <Col>
            <Header />
            <hr />
            <Skills />
            <hr />
            <About />
            <hr />
            <Experience />
            <hr />
            <Projects />
            <hr />
            <Footer />
          </Col>
          <Col md={1} lg={2} />
        </Row>
      </Container>
    );
  }
}

export default App;
