import React from "react";
import Menubar from "./menubar";
import Footer from "./footer";
import Head from "next/dist/shared/lib/head";
import Header2 from "./header2";
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
import { useRouter } from "next/router";
import { useHistory } from "react-router";
import { useEffect } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  const showHeader = router.asPath === "/" ? true : false;
  const showHeader2 = router.asPath === "/about" ? true : false;

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
      {showHeader && <Header />}
      {showHeader2 && <Header2 />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
