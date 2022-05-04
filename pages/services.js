import React from "react";
import styles from "../styles/Services.module.css";
import * as Icon from "react-bootstrap-icons";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
  CarouselItem,
  Accordion,
} from "react-bootstrap";
import Header2 from "../components/header2";

Header2.imgsrc = "img/bgd-5.jpg";
Header2.title = "Our Exceptional Services";
Header2.excerpt = "We are Competent and Result-oriented";

export default function services() {
  return (
    <div className={styles.section1}>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div>
              <Icon.Globe
                size={100}
                className="w-100 text-center m-4 text-blue-900 animate-bounce"
              />
              <h2 className="w-100 text-center mb-2 ">Global Sourcing</h2>
              We understand the diverse need of different clients, that is why
              our sourcing services are scalable, so that we can provide you
              with the precise combination of global sourcing solutions that you
              need most. At KGSL, we do not subscribe to a one-size-fits-all
              approach but rather in close collaboration, determine the correct
              procurement strategy for each of our clients. Together we choose
              the right market through analyzing products and materials, country
              capacity, and raw material origin. Our goal is to:
            </div>
            <Row>
              <Col xs={12} md={4}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <img src="img/tab-4.jpg" />
                    <Accordion.Header className="bg-secondary ">
                      {" "}
                      End to end procurement
                    </Accordion.Header>
                    <Accordion.Body>
                      At KGSL, our team manage the entire purchasing process by
                      taking a proactive role to guarantee product quality and
                      delivery on your terms. Below are some examples of the
                      activities we can undertake for you:
                      <ul className=" list-disc">
                        <li>Manage day to day supplier communication</li>
                        <li>Negotiate pricing and terms</li>
                        <li>
                          Oversight and management of purchase orders and
                          invoices
                        </li>
                        <li>Project coordination.</li>
                        <li>Perform quality control and assurance.</li>
                        <li>Customs clearance.</li>
                        <li>Special packaging or delivery requirements.</li>
                      </ul>
                      Whether you have already identified your supplier or you
                      have just begun thinking about a new project, we ensure
                      that vendor performance meets your expectations. As a
                      procurement company in Nigeria, KGSL represents your
                      interests and has a local presence and knowledge in
                      several emerging markets to ensure nothing is lost in
                      transition.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={12} md={4}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <img src="img/tab-5.jpg" />
                    <Accordion.Header className="bg-secondary ">
                      {" "}
                      Quality Assurance Service
                    </Accordion.Header>
                    <Accordion.Body>
                      KGSL provides end-to-end quality assurance services to
                      help our client manage their complex procurement need.
                      With an established quality assurance practice, we help
                      global enterprises gain predictability and increased
                      performance thereby enabling our client focus on their
                      core services while we ensure quality assurance in their
                      supply chain process. We mitigate our client&apos;s
                      technical and business risks through our quality assurance
                      frameworks and methodologies.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={12} md={4}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <img src="img/tab-6.jpg" />
                    <Accordion.Header className="bg-secondary ">
                      {" "}
                      Supplier Qualification service
                    </Accordion.Header>
                    <Accordion.Body>
                      If required, KGSL acts as a procurement outsourcing
                      service provider for our global client. This entails
                      locating and managing your entire supplier base. We assess
                      supplier performance and proactively solve issues in a
                      timely and cost-effective manner in order to avoid
                      possible breakdown in our client&apos;s supply chain
                      process.
                      <ul className=" list-disc p-2">
                        <li>Document existing issues and requirements.</li>
                        <li>Audit the supplier&apos;s facility.</li>
                        <li>Analyze their operating conditions.</li>
                        <li>Create a corrective action report.</li>
                      </ul>
                      We even guide the supplier through the successful
                      completion of these actions where required. We pride
                      ourselves on making the design, development, and import of
                      goods from suppliers as transparent as possible for our
                      clients.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Icon.Tools
              size={100}
              className="w-100 text-center m-4 text-blue-900 animate-bounce"
            />
            <h2 className="w-100 text-center mb-2">General Contracting</h2>
            <p>
              Our vision is our mission. KGSL is ready to turn your dreams into
              reality. As your commercial general contractor, we will partner
              with your team to create a safe, efficient, creative, and
              cost-effective plan to bring your project to life.
            </p>
            <p>
              Our general contracting services help ensure that your project
              moves forward as smoothly as possible. We&apos;ll guide you
              through the entire process, offering scheduling, quality control,
              and supervision.{" "}
            </p>
            <p>
              This service is specifically useful for foreign companies who
              require support in Nigeria for the execution of their project. We
              provide sourcing, supervision, and all forms of support services
              to ensure a soft landing on your project delivery.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Icon.PeopleFill
              size={100}
              className="w-100 text-center m-4 text-blue-900 animate-bounce"
            />
            <h2 className="w-100 text-center mb-2">Protocol Service</h2>
            KGSL uses internationally recognized procedures to create a
            welcoming environment for people conducting business in Nigeria.
            KGSL is passionate to make your coming to Nigeria a safe and
            successful journey. From the Airport we assist you through:
            <ul className=" list-disc pb-2">
              <li>Meet and greet</li>
              <li>Immigration process</li>
              <li>Hotel Booking </li>
              <li>Local and International Air Ticket booking</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
