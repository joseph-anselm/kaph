import React from "react";
import Header2 from "../components/header2";
import Layouts from "../components/layouts";
import Link from "next/dist/client/link";
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

Layouts.title = "Contact us";
Header2.title = "Contact Page";
Header2.title = "Reach out to us";
Header2.imgsrc = "/img/bgd-6.jpg";
Header2.excerpt =
  "We ensure all queries are well attended to, all our available contact options is a way to help us reach our audience and also keep us connected always  ";

export default function contact() {
  return (
    <div>
      <Container>
        <Row className="drop-shadow-md p-5">
          <Col xs={12} md={6} className="pl-4">
            <h1 className="grid">
              {/* {" "}
              <Icon.Headset size={50} className=" text-blue-900" /> */}{" "}
              Enquiries !
            </h1>
            <p>Interested in any of our Servicess? Talk to our experts today</p>
            <p>
              <b className=" text-blue-900">Phone:</b> +2347049788560
            </p>
            <p>
              <b className=" text-blue-900">Mobile:</b> +2347049788560
            </p>
            <p>
              <b className=" text-blue-900">Email:</b> +2347049788560
            </p>
            <hr />

            <h1 className="grid">
              {/* {" "}
              <Icon.Headset size={50} className=" text-blue-900" /> */}
              Follow our pages
            </h1>
            <p>
              Follwing us on any of our social media pages will further help you
              understand our structures and organizational patterns.
            </p>
            <Row>
              <div className="flex justify-start p-2 space-x-5 cursor-pointer relative bottom-0">
                <Link href="https://facebook.com/kaphglobal">
                  <Icon.Facebook size={40} className="text-blue-900" />
                </Link>
                <Link href="https://linkedin.com/kaphglobal">
                  <Icon.Linkedin
                    size={40}
                    className=" border-2 text-blue-900"
                  />
                </Link>
                <Link href="https://twitter.com/kaphglobal">
                  <Icon.Twitter
                    size={40}
                    className=" drop-shadow-sm text-blue-900"
                  />
                </Link>
              </div>
            </Row>
          </Col>
          <Col xs={12} md={6} className="border-1 mb-5 drop-shadow-sm ">
            <h1>Get In Touch !</h1>
            <Form className="m-3">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Enter Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
