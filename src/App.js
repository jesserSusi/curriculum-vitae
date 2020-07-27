import React, { Component } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sidebar from "./components/Sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideHR: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth <= 991;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideHR: currentHideNav });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  render() {
    return (
      <div className="main">
        <Container fluid>
          <Row>
            <Col xl={1} />
            <Col sm={12} xs={12} md={12} lg={3} xl={2}>
              <Sidebar />
            </Col>
            <Col>
              <div className="main-scroll">
                {this.state.hideHR && <hr />}
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
}

export default App;
