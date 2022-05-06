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
      <Container fluid class="p-10 bg-black text-white rounded">
        <Row>
          <Col xs={12} md={4} className={styles.footerlinks}>
            <img
              src="img/kaphfooterlogo.png"
              width={150}
              alt="footer image"
              className="mb-4"
            />
            <p>
              Kaph Global Solutions Limited (KGSL) is a women-owned commercial
              procurement and B2B supply chain company. Our approach to business
              has enabled us to provide value-driven alternatives to our client.
            </p>
          </Col>

          <Col xs={12} md={4} className={styles.footerlinks}>
            <h3>Reach out to us</h3>
            <span className="flex">
              <Icon.GeoAlt />{" "}
              <p className="pl-2">
                2 Adaralegbe Close Marshy Hill Estate, Ajah. Lekki, Lagos.
              </p>
            </span>
            <span className="flex">
              <Icon.Phone /> <p className="pl-2">+2347049788560</p>
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
                <Link href="/contact">Contact us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">Our Team</Link>
              </li>
              <li>
                <Link href="/about">Our Values</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark p-2 text-center grid">
        <Row>
          <div className="flex justify-center p-2 space-x-5 cursor-pointer">
            <Link href="https://facebook.com/kaphglobal">
              <Icon.Facebook
                size={20}
                color="yellow"
                className="hover:animate-ping"
              />
            </Link>
            <Link href="https://linkedin.com/kaphglobal">
              <Icon.Linkedin
                size={20}
                color="yellow"
                className="hover:animate-ping"
              />
            </Link>
            <Link href="https://twitter.com/kaphglobal">
              <Icon.Twitter
                size={20}
                color="yellow"
                className="hover:animate-ping"
              />
            </Link>
          </div>
        </Row>
        <p className="text-white text-xs">
          © 2020 Copyright{" "}
          <span className=" text-blue-200">
            {" "}
            <Link
              href="https://kaphglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-yellow-400 no-underline"
            >
              Kaph Global Solutions Limited
            </Link>
          </span>
        </p>
      </footer>
    </div>
  );
}
