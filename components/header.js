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
            src="/img/bg-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={styles.carouselcaption}>
            <h1>Professionalism </h1>
            <p>We ensure topnotch Professionalism in handling your projects.</p>
            <Button href="#" className={styles.btn}>
              Contact Us
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} className={styles.carousel}>
          <img
            className="d-block w-100"
            src="/img/bg-3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className={styles.carouselcaption}>
            <h1 className="shadow">Business Support</h1>
            <p>Creating world class Business support solutions.</p>
            <Button href="#" className={styles.btn}>
              Our Story
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} className={styles.carousel}>
          <img
            className="d-block w-100"
            src="/img/bg-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className={styles.carouselcaption}>
            <h1>Consultancy</h1>
            <p>Best Advisory team, commited to your business needs.</p>
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
