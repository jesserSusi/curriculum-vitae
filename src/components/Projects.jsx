import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { getData } from "../helpers";

const ProjectCarousel = (props, index) => {
  return (
    <Carousel.Item key={index}>
      <Col>
        <Image
          className="d-block w-100"
          src={require(`../${props.link}.PNG`)}
          alt={props.link}
          rounded
        />
        <Carousel.Caption>
          <a href={`https://${props.link}.netlify.app`}>
            <h5>{props.name}</h5>
          </a>
        </Carousel.Caption>
      </Col>
    </Carousel.Item>
  );
};

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="projects">
          <h3>{getData().labels[0].personalProj}</h3>
        </div>
        <div className="project-desc">
          <Row>
            {getData() !== undefined &&
              getData().projects.map((item, index) => (
                <Col xs={12} md={6} xl={6} key={index}>
                  <a href={`https://${item.link}.netlify.app`}>
                    <h5>{item.name}</h5>
                  </a>
                  <h6>{item.description}</h6>
                </Col>
              ))}
          </Row>
        </div>
        <div className="projects-carousel">
          <Row>
            <Carousel>
              {getData() !== undefined &&
                getData().projects.map((item, index) =>
                  ProjectCarousel(item, index)
                )}
            </Carousel>
          </Row>
        </div>
      </>
    );
  }
}

export default Projects;
