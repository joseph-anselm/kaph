import React from "react";
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

export default function about() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Icon.Bullseye size={100} className="text-center w-100 mb-3" />
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
            <Icon.Signpost2Fill size={100} className="text-center w-100 mb-3" />
            <h2 className=" text-center"> Mision</h2>
            <p>
              Kaph Global Solutions Limited \'KGSL\' is a commercial procurement
              company. KGSL negotiates at the most competitive level to provide
              best-in-class supply management for its customers/clients. KGSL\'s
              mission is to be the preferred procurement company in the world
              and the consequent number one choice for clients across industries
              interested in quality yet cost effective supply chain solutions.
              It achieves its objectives and mission by focusing on the
              following goals:
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}
