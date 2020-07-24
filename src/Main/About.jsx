import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Row>
          <Col>
            <p>
              Most recently, I was part of an Agile cross-functional team at
              Infor tasked to migrate the codebase for an existing enterprise
              application from Windows Form to ASP.Net MVC. We leveraged Web
              Services and XML while working with Australian counterparts. We
              used JavaScript and jQuery for front-end. Aside from development,
              I was assigned to build and deploy our server for my QA team for
              their testing processes. Also, I coached one of my new team
              members. Worked with small teams to develop trading platforms
              using C#, WPF and SQL for foreign exchange companies.
            </p>
            <p>
              I like to figure out and solve problems on my own and I find
              satisfaction when the solutions I came up with are working. If it
              didn't work or I fail, I take it as a learning experience.
              However, I believe that working collaboratively with a team is
              crucial in the overall progress of the product delivery.
            </p>
            <p>
              Enjoys learning things and technologies, currently doing some
              React.js and Xamarin development which are live on Heroku. I love
              to bake, cook, take photographs, ride the bicycle, travel and play
              games with friends.
            </p>
            <p>Looking forward to connecting with ICT professionals.</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
