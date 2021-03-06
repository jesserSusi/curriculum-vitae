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
    document.title = process.env.REACT_APP_TITLE;
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth < 992;
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
            <Col sm={12} xs={12} md={12} lg={4} xl={2}>
              <Sidebar />
              {!this.state.hideHR && <hr className="vhr" />}
            </Col>
            <Col>
              <div className="main-scroll">
                {this.state.hideHR && <hr />}
                {!this.state.hideHR && <span className="bullet" />}
                <About />
                <hr />
                {!this.state.hideHR && <span className="bullet" />}
                <Skills />
                <hr />
                {!this.state.hideHR && <span className="bullet" />}
                <Experience />
                <hr />
                {!this.state.hideHR && <span className="bullet" />}
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
