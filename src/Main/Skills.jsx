import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Skills extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="skills">
              <h3>TECHNICAL SKILLS AND TOOLS</h3>
            </div>
          </Col>
        </Row>
        <div className="skills-info">
          <Row>
            <Col>
              <ul>
                <li>C# .Net, ASP.NET MVC, WPF</li>
                <li>javaScript, jQuery, HTML, CSS, Bootstrap, React.JS</li>
                <li>Microsoft SQL Server</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Web Services, REST APIs</li>
                <li>Visual Studio, Visual Studio Code, TFS, JIRA, Git</li>
                <li>Agile Scrum Development</li>
              </ul>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Skills;
