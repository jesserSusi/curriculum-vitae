import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="projects">
          <h3>PERSONAL PROJECTS</h3>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <div className="project-info">
              <div className="projects-image">
                <a href="https://gloomblue.herokuapp.com">
                  <Image src={require("../gloomblue.PNG")} rounded fluid />
                </a>
              </div>
              <div className="project-desc">
                <h5>
                  <a href="https://gloomblue.herokuapp.com">
                    <strong>GloomBlue</strong>
                  </a>
                </h5>
                <h6>
                  A simple weather app created using React.JS that displays the
                  weather information based on the inputted city name. It
                  consumes data from OpenWeatherMap and uses
                  https://datahub.io/core/country-list to convert country code
                  based on 2 digit codes (ISO 3166-1) into their full name. Map
                  can also be displayed (provided by react-leaflet) base on the
                  geo coordinates of the city.
                </h6>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project-info">
              <div className="projects-image">
                <a href="https://top10tracks.herokuapp.com">
                  <Image src={require("../top10tracks.PNG")} rounded fluid />
                </a>
              </div>
              <div className="project-desc">
                <h5>
                  <a href="https://top10tracks.herokuapp.com">
                    <strong>Artist's Popular Tracks | Spotify</strong>
                  </a>
                </h5>
                <h6>
                  A simple app created using React.JS that lists the popular
                  songs from a particular artist. The app displays the album
                  cover and some info upon clicking on the song(card). This
                  utilizes Spotify's APIs to search for artist ID, albums, and
                  songs.
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Projects;
