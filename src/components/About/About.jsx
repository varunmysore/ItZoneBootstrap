import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import about from "../../Assets/img1.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About</h2>
          <p className="subtitle">Learn more about us</p>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={about} />
          </Col>
          <Col sm={6}>
            In the IT industry, our team decided to alter direction. Now, we
            share our experiences to help others. Our ramp up process is
            designed to empower your technical team or staff your company with
            the services they need to succeed. Ask us about the following
            services: iTZ-ONE offers rapid, cost-effective IT solutions to the
            business challenges faced by companies through its in-depth
            experience and knowledge, technological expertise, and project
            management skills. iTZ-ONE has earned an excellent reputation as a
            solution- oriented organisation specialising in assisting its
            clients in developing innovative strategies, the crafting of
            business effective technology solutions and the successful execution
            of highly complex projects. <br />
            <br />
            With over 10 years of combined proven industry experience and
            technology proficiency to draw on, iTZ-ONE can and does deliver
            significant incremental value to the realisation of our customer’s
            needs.
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
