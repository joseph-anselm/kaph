import React from "react";
import styles from "../styles/About.module.css";
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

Header2.imgsrc = "img/bg-1.jpg";
Header2.title = "About Us - Our Unique story";
Header2.excerpt =
  "We are from a place where Professionalism is never compromised.";

export default function about() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Icon.Bullseye
              size={100}
              className="text-center w-100 mt-5 mb-3 text-blue-900 animate-bounce "
            />
            <h2 className="text-center">Vision</h2>
            <p>
              Our vision is to be the preferred and trusted FMCG & commercial
              procurement company in Nigeria and in the world by providing an
              environment where our staff can thrive, ensuring our clients have
              access to cost effective and efficient supply chain solutions,
              increasing access to good and quality products from trusted
              manufacturers for the end users, fostering trust and upholding
              good business relationships with our stakeholders
            </p>
          </Col>
          <Col xs={12} md={12}>
            <Icon.Signpost2Fill
              size={100}
              className="text-center w-100 m-3 text-blue-900 animate-bounce delay-75"
            />
            <h2 className=" text-center"> Mision</h2>
            <p className="m-2">
              Kaph Global Solutions Limited &apos;KGSL&apos; is a commercial
              procurement company. KGSL negotiates at the most competitive level
              to provide best-in-class supply management for its
              customers/clients. KGSL&apos;s mission is to be the preferred
              procurement company in the world and the consequent number one
              choice for clients across industries interested in quality yet
              cost effective supply chain solutions. It achieves its objectives
              and mission by focusing on the following goals:
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Goal #1</Accordion.Header>
                <Accordion.Body>
                  Build the most relevant, competitive, comprehensive quality
                  repository of supply contracts
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Goal #2</Accordion.Header>
                <Accordion.Body>
                  Ensure honest and transparent dealing at all times.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Goal #3</Accordion.Header>
                <Accordion.Body>
                  Strengthen and sustain partnerships for mutual benefit.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <p className="m-3">
              <b>We strive to:</b>
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Provision</Accordion.Header>
                <Accordion.Body>
                  Provide the Highest possible Quality Services to our Clients.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Development</Accordion.Header>
                <Accordion.Body>
                  Develop and implement new partnerships and synergies.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Affordable</Accordion.Header>
                <Accordion.Body>
                  Ensure that we offer the best pricing and terms & conditions
                  available.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Transparency</Accordion.Header>
                <Accordion.Body>
                  Carry out all our business transactions in a transparent
                  manner.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <p className="m-2">
              In following these goals, and thereby achieving KGSL&apos;s
              objectives and mission, it is essential that we continually
              conduct ourselves and our businesses in accordance with the
              highest moral and ethical standards and in compliance with all
              relevant local and international laws. KGSL will adopt a zero
              tolerance approach, both internally and externally, to any failure
              to adhere to these principles and standards. KGSL&apos;s
              Sustainability Vision is to become the Socially and
              Environmentally Responsible Leading Procurement partner of choice.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="m-10">
        <Row>
          <div className="p-1 me-auto text-gray rounded text-center pb-4">
            <h1>Our Team Values</h1>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p> */}
          </div>
        </Row>

        <Row className={styles.sectionchild}>
          <Col xs={6} md={3}>
            <div className={styles.iconstab}>
              <Icon.Globe2
                size={80}
                className="hover:animate-bounce text-blue-900 drop-shadow-md"
              />
              <h4>Competence</h4>
            </div>
          </Col>
          <Col xs={6} md={3} className={styles.iconstab}>
            <Icon.UiChecks
              size={80}
              className="hover:animate-bounce text-blue-900"
            />
            <h4>Professionalism</h4>
          </Col>

          <Col xs={6} md={3}>
            <Icon.Gem
              size={80}
              className="hover:animate-bounce text-blue-900 text-center"
            />
            <h4>Excellence</h4>
          </Col>
          <Col xs={6} md={3}>
            <Icon.PersonCheck
              size={80}
              className="hover:animate-bounce text-blue-900 w-100 flex justify-center"
            />
            <h4>Integrity</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
