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
        <title>Welcome to Ace Initiatives Website</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <Menubar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
