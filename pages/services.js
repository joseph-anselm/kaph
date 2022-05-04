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
              <Icon.Globe2 size={100} />
              <h2>Global Sourcing</h2>
              <p>
                We understand the diverse need of different clients, that is why
                our sourcing services are scalable, so that we can provide you
                with the precise combination of global sourcing solutions that
                you need most. At KGSL, we do not subscribe to a
                one-size-fits-all approach but rather in close collaboration,
                determine the correct procurement strategy for each of our
                clients. Together we choose the right market through analyzing
                products and materials, country capacity, and raw material
                origin. Our goal is to:
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
