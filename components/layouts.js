import React from "react";
import Menubar from "./menubar";
import Footer from "./footer";
import Head from "next/dist/shared/lib/head";
import Header from "./header";
import Services from "./services";
import "bootstrap/dist/css/bootstrap.min.css";
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

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Welcome to Kaph Global Solutions Limited</title>
        <link rel="icon" href="/img/favicon.png" />
        <meta
          name="google-site-verification"
          content="LCuDCIfe0pJ2jlIqnY_0ABT5-j-4Q00j7EqvK0Xw3JA"
        />
      </Head>
      <Menubar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
