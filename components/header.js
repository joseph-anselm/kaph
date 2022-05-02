import React from "react";
import styles from "../styles/Header.module.css";
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
} from "react-bootstrap";
function Header() {
  return (
    <div>
      <Carousel className="mask rgba-black-light shadow mb-5 bg-body rounded">
        <Carousel.Item interval={1000} className={styles.carousel}>
          <img
            className="d-block w-100"
            src="/img/bg-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={styles.carouselcaption}>
            <h1>Professionalism & Efficiency</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button href="#" className={styles.btn}>
              Contact Us
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} className={styles.carousel}>
          <img
            className="d-block w-100"
            src="/img/bg-3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className={styles.carouselcaption}>
            <h1 className="shadow">Supporting your Business</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button href="#" className={styles.btn}>
              Our Story
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carousel}>
          <img
            className="d-block w-100"
            src="/img/bg-1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className={styles.carouselcaption}>
            <h1>Cutting Edge Consultancy</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button href="#" className={styles.btn}>
              Get Started
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;