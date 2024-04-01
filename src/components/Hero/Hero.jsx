import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../../Assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <Carousel className="hero">
        <Carousel.Item>
          <img src={logo} alt="firstslide" className="heroImage" />
          <div className="overlay"></div>
          <Carousel.Caption>
            <h3>Laptop services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae quidem error facilis ipsa dolor a voluptates reiciendis
              accusantium eligendi aspernatur.
            </p>
            <a href="/about" className="btn btn-danger" role="button">
              Explore
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={logo} alt="firstslide" className="heroImage" />
          <div className="overlay"></div>
          <Carousel.Caption>
            <h3>CCTV services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quasi!
            </p>
            <a href="/about" className="btn btn-danger" role="button">
              Explore
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={logo} alt="firstslide" className="heroImage" />
          <div className="overlay"></div>
          <Carousel.Caption>
            <h3>Software Installation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              error laboriosam quia reprehenderit at iusto et deleniti. Quae,
              saepe magnam.
            </p>
            <a href="/about" className="btn btn-danger" role="button">
              Explore
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
