import React from "react";
import * as Icon from "react-bootstrap-icons";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import {
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Nav,
  NavDropdown,
  Jumbotron,
  Form,
  FormControl,
  Button,
  Carousel,
  CarouselItem,
} from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <Container fluid class="mt-4 p-10 bg-black text-white rounded">
        <Row>
          <Col xs={12} md={4}>
            <img src="img/kaphfooterlogo.png" width={150} />
            <p>
              Reprehenderit deserunt occaecat ea velit irure veniam ut dolor do
              fugiat minim incididunt nulla Lorem. Cupidatat ipsum veniam esse
              nostrud amet id ipsum qui occaecat magna. Non dolor cupidatat
              proident laborum fugiat laboris.
            </p>
          </Col>

          <Col xs={12} md={4} className={styles.footerlinks}>
            <h3>Reach out to us</h3>
            <span className="flex">
              <Icon.GeoAlt />{" "}
              <p className="pl-2">
                2 Adaralegbe Close, Off Marshy Hill Estate, Ajah
              </p>
            </span>
            <span className="flex">
              <Icon.Phone /> <p className="pl-2">+23480333555333</p>
            </span>
            <span className="flex">
              <Icon.Envelope /> <p className="pl-2">info@kahpglobal.com</p>
            </span>
          </Col>

          <Col xs={12} md={4} className={styles.footerlinks}>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <Link href="/about">Our Story</Link>
              </li>
              <li>
                <Link href="/about">Contact us</Link>
              </li>
              <li>
                <Link href="/about">Services</Link>
              </li>
              <li>
                <Link href="/about">Our Team</Link>
              </li>

              <Link href="/about">
                <li>Our Team</li>
              </Link>
            </ul>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark p-2 text-center">
        <p className="text-white">
          © 2020 Copyright{" "}
          <span className=" text-blue-200">
            {" "}
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-yellow-400 no-underline"
            >
              Kaph Global Solutions Limited
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}
