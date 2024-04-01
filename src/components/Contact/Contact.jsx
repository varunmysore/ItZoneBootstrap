import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">Get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your Email address"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your message"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.304921750518!2d77.65110893666471!3d12.98296365664436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae114fc19e08cb%3A0xf5365c91142f65e9!2sC%20V%20Raman%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711804715329!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i class="fas fa-envelope"></i>
              itzone@gmil.com
            </li>
            <li>
              <i class="fas fa-phone"></i>
              9901452566
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              CV Raman Nagar, Bengaluru
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
