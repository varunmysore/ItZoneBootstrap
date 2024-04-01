import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AppServices = () => {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          <Col sm={4} className="holder">
            <div className="icon">
              <i class="fas fa-clone"></i>
            </div>
            <h3>laptop service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime eveniet a porro soluta voluptas veritatis laborum, officia
              tempore! Voluptas.
            </p>
          </Col>
          <Col sm={4} className="holder">
            <div className="icon">
              <i class="fas fa-gear"></i>
            </div>
            <h3>laptop service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime eveniet a porro soluta voluptas veritatis laborum, officia
              tempore! Voluptas.
            </p>
          </Col>
          <Col sm={4} className="holder">
            <div className="icon">
              <i class="fas fa-gear"></i>
            </div>
            <h3>laptop service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime eveniet a porro soluta voluptas veritatis laborum, officia
              tempore! Voluptas.
            </p>
          </Col>
          <Col sm={4} className="holder">
            <div className="icon">
              <i class="fas fa-gear"></i>
            </div>
            <h3>laptop service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime eveniet a porro soluta voluptas veritatis laborum, officia
              tempore! Voluptas.
            </p>
          </Col>
          <Col sm={4} className="holder">
            <div className="icon">
              <i class="fas fa-gear"></i>
            </div>
            <h3>laptop service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime eveniet a porro soluta voluptas veritatis laborum, officia
              tempore! Voluptas.
            </p>
          </Col>
          <Col sm={4} className="holder">
            <div className="icon">
              <i class="fas fa-gear"></i>
            </div>
            <h3>laptop service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime eveniet a porro soluta voluptas veritatis laborum, officia
              tempore! Voluptas.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppServices;
